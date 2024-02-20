import { Container } from 'inversify'
import CurrencyCalculatorController from '../api/currency-calculator/currency-calculator.controller'
import IndexController from '../api/home/home.controller'

export const inversifyContainer = new Container({ autoBindInjectable: true, defaultScope: 'Singleton' })

inversifyContainer.bind<IndexController>(IndexController).to(IndexController).inSingletonScope()
inversifyContainer
  .bind<CurrencyCalculatorController>(CurrencyCalculatorController)
  .to(CurrencyCalculatorController)
  .inSingletonScope()
