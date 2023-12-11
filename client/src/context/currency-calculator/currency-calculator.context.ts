import { createContext, useContext } from 'react'
import { CurrencyCalculatorInterface, currencyCalculatorDefaults } from './currency-calculator.interface'

const CurrencyCalculatorContext = createContext<CurrencyCalculatorInterface>(currencyCalculatorDefaults)

export const CurrencyCalculatorProvider = CurrencyCalculatorContext.Provider

export const useCurrencyCalculatorContext = () => useContext(CurrencyCalculatorContext)
