import React, { ComponentType, FC, PropsWithChildren, useEffect, useState } from 'react'
import { CurrencyCalculatorInterface, CurrencyType, currencyCalculatorDefaults } from './currency-calculator.interface'
import { CurrencyCalculatorProvider } from './currency-calculator.context'

const CurrencyCalculatorContainer: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState<CurrencyCalculatorInterface>(currencyCalculatorDefaults)

  const loadCurrencyCalculatorHistory = async () => {}

  useEffect(() => {
    loadCurrencyCalculatorHistory()
  }, [])

  const updateHistoryOnCalculation = async (answerValue: number) => {
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
