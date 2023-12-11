import React, { ChangeEvent, useState } from 'react'
import styleClasses from '../calculator.module.scss'
import CustomInput from '@/shared/ui/custom-input/custom-input'
import CustomButton from '@/shared/ui/custom-button/custom-button'

const CalculatorForm = () => {
    const [calculationValue, setCalculationValue] = useState({
        value_1: 0,
        value_2: 0,
    })

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setCalculationValue((prevState) => ({
            ...prevState,
            [name]: parseInt(value)
        }))
    }

    return (
        <div className={styleClasses['calculator-form']}>
            <div className={styleClasses['calculator-form--wrapper']}>
                <div>
                    <CustomInput
                        label='Value 1'
                        type="number"
                        name="value_1"
                        onChange={onChangeInput}
                    />
                    <br />
                    <CustomInput
                        label='Value 2'
                        type="number"
                        name="value_2"
                        onChange={onChangeInput}
                    />
                </div>
                <div className={styleClasses['calculator-form--btn-group']}>
                    <CustomButton title='Add +' type='primary' />
                    <CustomButton title='Sub -' type='primary' />
                    <CustomButton title='Mul *' type='primary' />
                    <CustomButton title='Divide /' type='primary' />
                </div>
                <p>Answer is: 12</p>
            </div>
        </div>
    )
}

export default CalculatorForm