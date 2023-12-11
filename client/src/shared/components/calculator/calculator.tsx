import React from 'react'
import styleClasses from './calculator.module.scss'
import CalculatorHistory from './calculator-history/calculator-history'
import CalculatorForm from './calculator-form/calculator-form'

const Calculator = () => {
  return (
    <div className={styleClasses['calculator']}>
        <div className={styleClasses['calculator__wrapper']}>
            <div className={styleClasses['calculator__main']}>
                <CalculatorForm />
            </div>
            <div className={styleClasses['calculator__history']}>
                <CalculatorHistory calculations={['aaa', 'bbb']} />
            </div>
        </div>
    </div>
  )
}

export default Calculator