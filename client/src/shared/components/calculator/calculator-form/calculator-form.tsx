import React, { ChangeEvent, useState } from 'react'
import styleClasses from '../calculator.module.scss'
import CustomInput from '@/shared/ui/custom-input/custom-input'
import CustomButton from '@/shared/ui/custom-button/custom-button'
import { useCurrencyCalculatorContext } from '@/context/currency-calculator/currency-calculator.context'
import { CalculationType, getAnswerValueForCalculationType, renderChangeCurrencyButton } from '../calculator.utils'

const CalculatorForm = () => {
  const [calculationValue, setCalculationValue] = useState({
    value_1: 0,
    value_2: 0,
  })
  const [answer, setAnswer] = useState<number | undefined>(undefined)
  const { currencyType, changeCurrencyType, updateHistoryOnCalculation } = useCurrencyCalculatorContext()

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setCalculationValue((prevState) => ({
      ...prevState,
      [name]: parseInt(value),
    }))
  }

  const onClickCalculationButton = async (calculationType: CalculationType) => {
    const { value_1, value_2 } = calculationValue
    if (!value_1 || !value_2) {
      return
    }
    const answerValue = getAnswerValueForCalculationType(calculationType, value_1, value_2)
    await updateHistoryOnCalculation(answerValue)
    setAnswer(answerValue)
  }

  // Higher Order Function to get function for respective type
  // all this logic is to avoid ugly if-elif thing
  const getCalculationButtonFunction = (calculationType: CalculationType) => () =>
    onClickCalculationButton(calculationType)

  return (
    <div className={styleClasses['calculator-form']}>
      <div className={styleClasses['calculator-form--wrapper']}>
        <div>
          <CustomInput label="Value 1" type="number" name="value_1" onChange={onChangeInput} />
          <br />
          <CustomInput label="Value 2" type="number" name="value_2" onChange={onChangeInput} />
        </div>
        <div className={styleClasses['calculator-form--btn-group']}>
          <CustomButton title="Add +" type="primary" onClick={getCalculationButtonFunction(CalculationType.ADD)} />
          <CustomButton
            title="Sub -"
            type="primary"
            onClick={getCalculationButtonFunction(CalculationType.SUBSTRACT)}
          />
          <CustomButton title="Mul *" type="primary" onClick={getCalculationButtonFunction(CalculationType.MULTIPLY)} />
          <CustomButton
            title="Divide /"
            type="primary"
            onClick={getCalculationButtonFunction(CalculationType.DIVIDE)}
          />
        </div>
        <div>{renderChangeCurrencyButton(currencyType, changeCurrencyType)}</div>
        <p>Answer is: {answer}</p>
      </div>
    </div>
  )
}

export default CalculatorForm
