import React from 'react'

enum DropdownState {
  ACTIVE = 'active',
  ERROR = 'error',
  EMPTY = 'empty',
  FILLED = 'filled',
}
export interface DropdownProps {
  label: string
  disabled?: boolean
  filled?: boolean
  state?: DropdownState
  iconURI?: string
}

const defaultIconURI = '/assets/icons/diamond.svg'

const computeLabelColor = (state: DropdownState, disabled: boolean): string => {
  if (disabled || state === DropdownState.EMPTY) return 'text-grey-300'
  return ''
}

/**
 * Primary UI component for user interaction
 */
export const Dropdown: React.FC<DropdownProps> = ({
  label,
  disabled = false,
  state = DropdownState.EMPTY,
  iconURI,
}) => {
  const labelColor = computeLabelColor(state, disabled)

  return (
    <div className="text-base p-4 flex items-center relative">
      {iconURI && <img src={iconURI ?? defaultIconURI} alt="icon" />}
      <p className={`block ml-4 ${labelColor}`}>{label}</p>
    </div>
  )
}
