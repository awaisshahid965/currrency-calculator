export enum CurrencyType {
  EURO = 'Euro',
  USD = 'USD',
}

export interface CurrencyCalculatorInterface {
  history: Array<string>
  currencyType: CurrencyType
  updateHistoryOnCalculation: (answerValue: number) => Promise<void>
  changeCurrencyType: (currencyType: CurrencyType) => void
}

export const currencyCalculatorDefaults: CurrencyCalculatorInterface = {
  history: [],
  currencyType: CurrencyType.EURO,
  updateHistoryOnCalculation: async () => {},
  changeCurrencyType: () => {},
}
