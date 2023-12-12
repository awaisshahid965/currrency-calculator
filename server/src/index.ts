import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import Mongodb from './config/database'
import { currencyCalculatorRouter } from './api/currency-calculator/currency-calculator.routes'
import cors from 'cors'

dotenv.config()

const app: Express = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())

app.get('/', (_: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

// apis
app.use('/api/calculator', currencyCalculatorRouter)

const initServer = async () => {
  await Mongodb.init()

  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
  })
}

initServer()
