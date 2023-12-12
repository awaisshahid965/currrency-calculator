import { CurrencyCalculatorModel } from '../api/currency-calculator/currency-calculator.modal'

class CurrencyCalculatorRepository {
  private currencyCalculatorModel

  constructor() {
    this.currencyCalculatorModel = CurrencyCalculatorModel
  }

  getAll = async () => {
    const records = await this.currencyCalculatorModel.find().select('calculatedValue currencyType -_id').lean()
    return records
  }

  addCalculation = async (calculatedValue: number, currencyType: string) => {
    const newRecord = new this.currencyCalculatorModel({
      calculatedValue,
      currencyType,
    })
    await newRecord.save()
    return {
      calculatedValue,
      currencyType,
    }
  }
}

export default CurrencyCalculatorRepository
