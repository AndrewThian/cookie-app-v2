import React from 'react'

enum ButtonType {
  FIXED = 'fixed',
  VARIABLE = 'variable',
  LINK = 'link',
}

enum ButtonSize {
  LARGE = 'large',
  SMALL = 'small',
}
export interface ButtonProps {
  label: string
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ disabled, label, size, type }) => {
  const fontStyle = size === ButtonSize.SMALL ? 'text-sm' : 'text-base'
  const colorStyle = type === ButtonType.LINK ? '' : disabled ? 'bg-grey-200' : 'bg-blue-400'
  const paddingStyle =
    size === ButtonSize.SMALL
      ? `p${type === ButtonType.VARIABLE ? 'y' : ''}-2.5`
      : `p${type === ButtonType.VARIABLE ? 'y' : ''}-4`
  const variableStyle = type === ButtonType.VARIABLE ? 'w-full' : 'w-min'
  const fontColor =
    type === ButtonType.LINK ? `text-${disabled ? 'grey-200' : 'blue-400'}` : `text-white`

  return (
    <button
      className={`${colorStyle} ${fontStyle} ${paddingStyle} ${variableStyle} ${fontColor} rounded font-medium `}
    >
      {label}
    </button>
  )
}
