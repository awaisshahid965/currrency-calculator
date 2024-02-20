import { Request, Response } from 'express'
import { withErrorHandler } from '../../utils'
import CurrencyCalculatorRepository from '../../repositories/currency-calculator.repository'
import { interfaces, controller, httpGet, httpPost } from 'inversify-express-utils'

@controller('/api/calculator')
class CurrencyCalculatorController implements interfaces.Controller {
  constructor(private currencyCalculatorRepository: CurrencyCalculatorRepository) {}

  @withErrorHandler
  @httpGet('/all')
  async getAll(_: Request, res: Response) {
    const records = await this.currencyCalculatorRepository.getAll()
    return res.json(records)
  }

  @withErrorHandler
  @httpPost('/add')
  async addCalculation(req: Request, res: Response) {
    const { calculatedValue, currencyType } = req.body
    if (!calculatedValue || !currencyType) {
      throw new Error('invalid data')
    }
    const newRecord = await this.currencyCalculatorRepository.addCalculation(calculatedValue, currencyType)
    return res.json(newRecord)
  }
}

export default CurrencyCalculatorController
