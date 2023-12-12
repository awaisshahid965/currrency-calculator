import { model, Schema } from 'mongoose'
import { CurrencyType } from './currency-calculator.types'

interface CurrencyCalculatorSchema {
  calculatedValue: number
  currencyType: CurrencyType
}

const currencyCalculatorSchema = new Schema<CurrencyCalculatorSchema>({
  calculatedValue: {
    type: Number,
    required: true,
  },
  currencyType: {
    type: String,
    enum: Object.values(CurrencyType),
    required: true,
  },
})

export const CurrencyCalculatorModel = model('CurrencyCalculator', currencyCalculatorSchema)
