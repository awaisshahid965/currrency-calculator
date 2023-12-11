import React, { ChangeEvent } from 'react'
import { Input } from 'antd'
import classes from './custom-input.module.scss'

interface CustomInputProps {
  label?: string
  name: string
  type?: 'text' | 'email' | 'password' | 'number'
  value?: string | number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  errorMessage?: string
  required?: boolean
  disabled?: boolean
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  errorMessage,
  required = false,
  disabled = false,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event)
  }

  return (
    <div className={classes['custom-input']}>
      {label && <label className={classes['custom-input__label']}>{label}:</label>}
      <Input
        type={type}
        name={name}
        defaultValue={value?.toString()}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
      {errorMessage && <div className={classes['custom-input__error']}>{errorMessage}</div>}
    </div>
  )
}

export default CustomInput
