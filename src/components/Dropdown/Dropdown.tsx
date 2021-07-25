import React from 'react'
import cx from 'clsx'

enum DropdownState {
  ACTIVE = 'active',
  ERROR = 'error',
  EMPTY = 'empty',
  FILLED = 'filled',
}
export interface DropdownProps {
  label: string
  disabled?: boolean
  state?: DropdownState
  iconURI?: string
}

const defaultIconURI = '/assets/icons/diamond.svg'

/**
 * Primary UI component for user interaction
 */
export const Dropdown: React.FC<DropdownProps> = ({
  label,
  disabled = false,
  state = DropdownState.EMPTY,
  iconURI,
}) => {
  const shouldShowIcon = Boolean(iconURI) && state !== DropdownState.EMPTY

  return (
    <div
      className={cx(
        'text-base p-4 flex items-center relative rounded border',
        {
          'border-white': !(state === DropdownState.ACTIVE || state === DropdownState.ERROR),
          'border-blue-400': !disabled && state === DropdownState.ACTIVE,
          'border-pink-400': !disabled && state === DropdownState.ERROR,
        },
        {
          'border-grey-100': disabled,
          'bg-grey-100': disabled,
          'cursor-not-allowed': disabled,
        }
      )}
    >
      {shouldShowIcon && <img src={iconURI ?? defaultIconURI} alt="icon" />}
      <p
        className={cx(
          {
            'block ml-4': shouldShowIcon,
          },
          {
            'text-grey-300': disabled || state === DropdownState.EMPTY,
          }
        )}
      >
        {label}
      </p>
    </div>
  )
}
