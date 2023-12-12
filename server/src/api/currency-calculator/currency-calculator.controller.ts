import { Request, Response } from 'express'
import { withErrorHandler } from '../../utils'
import CurrencyCalculatorRepository from '../../repositories/currency-calculator.repository'

class CurrencyCalculatorController {
  currencyCalculatorRepository: CurrencyCalculatorRepository

  constructor(currencyCalculatorRepository: CurrencyCalculatorRepository) {
    this.currencyCalculatorRepository = currencyCalculatorRepository
  }

  @withErrorHandler
  async getAll(_: Request, res: Response) {
    const records = await this.currencyCalculatorRepository.getAll()
    return res.json(records)
  }

  @withErrorHandler
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
