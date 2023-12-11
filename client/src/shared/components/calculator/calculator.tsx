import React from 'react'
import styleClasses from './calculator.module.scss'
import CalculatorHistory from './calculator-history/calculator-history'
import CalculatorForm from './calculator-form/calculator-form'
import { useCurrencyCalculatorContext } from '@/context/currency-calculator/currency-calculator.context'
import { withCurrencyCalculator } from '@/context/currency-calculator/currency-calculator.container'

const Calculator = () => {
  const { history } = useCurrencyCalculatorContext()

  return (
    <div className={styleClasses['calculator']}>
      <div className={styleClasses['calculator__wrapper']}>
        <div className={styleClasses['calculator__main']}>
          <CalculatorForm />
        </div>
        <div className={styleClasses['calculator__history']}>
          <CalculatorHistory calculations={history} />
        </div>
      </div>
    </div>
  )
}

export default withCurrencyCalculator(Calculator)
