import { Router } from 'express'
import CurrencyCalculatorController from './currency-calculator.controller'
import CurrencyCalculatorRepository from '../../repositories/currency-calculator.repository'

export const currencyCalculatorRouter = Router()

const controller = new CurrencyCalculatorController(new CurrencyCalculatorRepository())

currencyCalculatorRouter.get('/all', controller.getAll.bind(controller))
currencyCalculatorRouter.post('/add', controller.addCalculation.bind(controller))
