import express from 'express'
import cors from 'cors'
import { InversifyExpressServer } from 'inversify-express-utils'
import { inversifyContainer } from '../../config/inversify.config'

export function setupInversifyExpressApp(): express.Application {
  const server = new InversifyExpressServer(inversifyContainer)
  server.setConfig((app) => {
    app.use(cors())
    app.use(express.json())
  })
  const inversifyExpressApp = server.build()
  return inversifyExpressApp
}
