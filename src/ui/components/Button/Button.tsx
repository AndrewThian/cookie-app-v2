import clsx from 'clsx'
import React from 'react'

export enum WidthType {
  FIXED = 'fixed',
  VARIABLE = 'variable',
}

export enum ButtonType {
  LINK = 'link',
  BUTTON = 'button',
}

export enum FontWeight {
  MED = 'medium',
  BOLD = 'bold',
}

enum ButtonSize {
  LARGE = 'large',
  SMALL = 'small',
}
export interface ButtonProps {
  label: string
  widthType?: WidthType
  btnType?: ButtonType
  size?: ButtonSize
  disabled?: boolean
  fontWeight?: FontWeight
  onClick: () => void
}

const computePaddingStyle = (
  type: WidthType = WidthType.FIXED,
  size: ButtonSize = ButtonSize.LARGE
): string => {
  if (size === ButtonSize.SMALL && type === WidthType.VARIABLE) return `py-2.5`
  if (size === ButtonSize.SMALL && type !== WidthType.VARIABLE) return `p-2.5`
  if (size === ButtonSize.LARGE && type === WidthType.VARIABLE) return `py-4`
  return `p-4`
}

const computeFontColorStyle = (type: ButtonType = ButtonType.BUTTON, disabled: boolean): string => {
  if (type === ButtonType.LINK && disabled) return 'text-grey-200'
  if (type === ButtonType.LINK && !disabled) return 'text-blue-400'
  return 'text-white'
}

const computeColorStyle = (type: ButtonType = ButtonType.BUTTON, disabled: boolean): string => {
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
  btnType = ButtonType.BUTTON,
  widthType = WidthType.VARIABLE,
  fontWeight = FontWeight.BOLD,
  onClick,
}) => {
  const fontStyle = size === ButtonSize.SMALL ? 'text-sm' : 'text-base'

  const paddingStyle = computePaddingStyle(widthType, size)
  const colorStyle = computeColorStyle(btnType, disabled)
  const fontColor = computeFontColorStyle(btnType, disabled)

  const variableStyle = widthType === WidthType.VARIABLE ? 'w-full' : 'w-min'

  return (
    <button
      onClick={onClick}
      className={clsx(
        `${colorStyle} ${fontStyle} ${paddingStyle} ${variableStyle} ${fontColor} rounded `,
        {
          'font-medium': fontWeight === FontWeight.BOLD,
          'font-normal': fontWeight === FontWeight.MED,
        }
      )}
    >
      {label}
    </button>
  )
}
