import { Request, Response } from 'express'
import { controller, httpGet } from 'inversify-express-utils'

@controller('/')
class IndexController {
  @httpGet('/')
  index(_: Request, res: Response) {
    res.send('Express + TypeScript Server')
  }
}

export default IndexController
