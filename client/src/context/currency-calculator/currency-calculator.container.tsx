import React, { ComponentType, FC, PropsWithChildren, useEffect, useState } from 'react'
import { CurrencyCalculatorInterface, CurrencyType, currencyCalculatorDefaults } from './currency-calculator.interface'
import { CurrencyCalculatorProvider } from './currency-calculator.context'
import CurrencyCalculatorService from '@/services/currency-calculator-service'

type HistoryServerResponse = {
  calculatedValue: number
  currencyType: string
}

const CurrencyCalculatorContainer: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<CurrencyCalculatorInterface>(currencyCalculatorDefaults)

  const loadCurrencyCalculatorHistory = async () => {
    const history = await CurrencyCalculatorService.getHistory()
    const historyArray = (history as HistoryServerResponse[]).map(
      ({ calculatedValue, currencyType }) => calculatedValue + currencyType,
    )
    setState((prevState) => ({
      ...prevState,
      history: historyArray,
    }))
  }

  useEffect(() => {
    loadCurrencyCalculatorHistory()
  }, [])

  const updateHistoryOnCalculation = async (answerValue: number) => {
    const data = await CurrencyCalculatorService.addCalculation(answerValue, state.currencyType)
    setState((prevState) => ({
      ...prevState,
      history: [...prevState.history, `${answerValue} ${state.currencyType}`],
    }))
  }

  const changeCurrencyType = (currencyType: CurrencyType) => {
    setState((prevState) => ({
      ...prevState,
      currencyType,
    }))
  }

  return (
    <CurrencyCalculatorProvider value={{ ...state, updateHistoryOnCalculation, changeCurrencyType }}>
      {children}
    </CurrencyCalculatorProvider>
  )
}

export const withCurrencyCalculator = <P extends object>(WrappedComponent: ComponentType<P>): FC<P> => {
  const WithCurrencyCalculator: FC<P> = (props) => {
    return (
      <CurrencyCalculatorContainer>
        <WrappedComponent {...props} />
      </CurrencyCalculatorContainer>
    )
  }

  return WithCurrencyCalculator
}
