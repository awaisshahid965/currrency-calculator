/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'

export function withErrorHandler(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value

  descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
    try {
      await originalMethod.call(this, req, res, next)
    } catch (error: any) {
      console.error(error)
      res.status(400).json({ error: error.message })
    }
  }
}
