import 'reflect-metadata'
import dotenv from 'dotenv'
import Mongodb from './config/database'
import http from 'http'
import { setupInversifyExpressApp } from './adapters/inversify-express'

dotenv.config()

const port = process.env.PORT
const inversifyExpressApp = setupInversifyExpressApp()

const initServer = async () => {
  await Mongodb.init()
  const httpServer = http.createServer(inversifyExpressApp)
  httpServer.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
  })
}

initServer()
