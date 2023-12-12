import HttpClient from './http-client'

enum CurrencyCalculatorEndpoints {
  GET_ALL = '/calculator/all',
  ADD_CALCULATION = '/calculator/add',
}

class CurrencyCalculatorService {
  static async getHistory() {
    const historyData = HttpClient.get(CurrencyCalculatorEndpoints.GET_ALL)
    return historyData
  }

  static async addCalculation(calculatedValue: number, currencyType: string) {
    const addedCalculation = await HttpClient.post(CurrencyCalculatorEndpoints.ADD_CALCULATION, {
      calculatedValue,
      currencyType,
    })
    return addedCalculation
  }
}

export default CurrencyCalculatorService
