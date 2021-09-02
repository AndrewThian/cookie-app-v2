import React from 'react'

export enum ButtonType {
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

const computePaddingStyle = (
  type: ButtonType = ButtonType.FIXED,
  size: ButtonSize = ButtonSize.LARGE
): string => {
  if (size === ButtonSize.SMALL && type === ButtonType.VARIABLE) return `py-2.5`
  if (size === ButtonSize.SMALL && type !== ButtonType.VARIABLE) return `p-2.5`
  if (size === ButtonSize.LARGE && type === ButtonType.VARIABLE) return `py-4`
  return `p-4`
}

const computeFontColorStyle = (type: ButtonType = ButtonType.FIXED, disabled: boolean): string => {
  if (type === ButtonType.LINK && disabled) return 'text-grey-200'
  if (type === ButtonType.LINK && !disabled) return 'text-blue-400'
  return 'text-white'
}

const computeColorStyle = (type: ButtonType = ButtonType.FIXED, disabled: boolean): string => {
  if (type !== ButtonType.LINK && disabled) return 'bg-grey-200'
  if (type !== ButtonType.LINK && !disabled) return 'bg-blue-400'
  return ''
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  label,
  size = ButtonSize.LARGE,
  type = ButtonType.VARIABLE,
}) => {
  const fontStyle = size === ButtonSize.SMALL ? 'text-sm' : 'text-base'

  const paddingStyle = computePaddingStyle(type, size)
  const colorStyle = computeColorStyle(type, disabled)
  const fontColor = computeFontColorStyle(type, disabled)

  const variableStyle = type === ButtonType.VARIABLE ? 'w-full' : 'w-min'

  return (
    <button
      className={`${colorStyle} ${fontStyle} ${paddingStyle} ${variableStyle} ${fontColor} rounded font-medium`}
    >
      {label}
    </button>
  )
}
