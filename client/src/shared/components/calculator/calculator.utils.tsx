import { CurrencyType } from '@/context/currency-calculator/currency-calculator.interface'
import CustomButton from '@/shared/ui/custom-button/custom-button'

export enum CalculationType {
  ADD = 'ADD',
  SUBSTRACT = 'SUBSTRACT',
  MULTIPLY = 'MULTIPLY',
  DIVIDE = 'DIVIDE',
}

export const getAnswerValueForCalculationType = (
  calculationType: CalculationType,
  value_1: number,
  value_2: number,
) => {
  const respectiveFunctionForCalculationType = {
    [CalculationType.ADD]: () => value_1 + value_2,
    [CalculationType.SUBSTRACT]: () => value_1 - value_2,
    [CalculationType.MULTIPLY]: () => value_1 * value_2,
    [CalculationType.DIVIDE]: () => value_1 / value_2,
  }

  return respectiveFunctionForCalculationType[calculationType]()
}

export const renderChangeCurrencyButton = (
  currencyType: CurrencyType,
  onClickChangeCurrencyType: (currencyType: CurrencyType) => void,
) => {
  if (currencyType === CurrencyType.EURO) {
    return (
      <div>
        <span>Change Currency type to: </span>
        <CustomButton
          title={CurrencyType.USD}
          type="default"
          onClick={() => onClickChangeCurrencyType(CurrencyType.USD)}
        />
      </div>
    )
  }
  return (
    <div>
      <span>Change Currency type to: </span>
      <CustomButton
        title={CurrencyType.EURO}
        type="default"
        onClick={() => onClickChangeCurrencyType(CurrencyType.EURO)}
      />
    </div>
  )
}
