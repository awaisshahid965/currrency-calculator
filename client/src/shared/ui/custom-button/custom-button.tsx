import React, { CSSProperties, FC } from 'react'
import { Button as AntdButton } from 'antd'

interface CustomButtonProps {
  title: string
  size?: 'large' | 'middle' | 'small'
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'
  styles?: CSSProperties
  classNames?: string
  disabled?: boolean
  hide?: boolean
  onClick?: () => void
  danger?: boolean
}

const CustomButton: FC<CustomButtonProps> = ({
  title,
  size = 'middle',
  type = 'default',
  styles = {},
  classNames,
  disabled = false,
  hide,
  onClick,
  danger,
}) => {
  const onButtonClick = () => {
    onClick?.()
  }
  if (hide) {
    return null
  }
  return (
    <AntdButton
      size={size}
      type={type}
      style={{ ...styles }}
      className={classNames}
      onClick={onButtonClick}
      disabled={disabled}
      danger={danger}
    >
      {title}
    </AntdButton>
  )
}

export default CustomButton
