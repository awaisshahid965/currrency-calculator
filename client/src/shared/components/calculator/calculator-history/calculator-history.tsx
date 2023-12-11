import React, { FC } from 'react'
import styleClasses from '../calculator.module.scss'

interface CalculatorHistoryProps {
    calculations: Array<string>
}

const CalculatorHistory: FC<CalculatorHistoryProps> = ({ calculations }) => {
  return (
    <div className={styleClasses['calculator__history-wrapper']}>
        {
            calculations.map(calculation => (
                <p className={styleClasses['calculator__history-wrapper--item']}>{calculation}</p>
            ))
        }
    </div>
  )
}

export default CalculatorHistory