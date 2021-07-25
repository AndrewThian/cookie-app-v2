import React, { useEffect, useRef } from 'react'
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
  onClick: (state: DropdownState, event: React.MouseEvent<HTMLDivElement>) => void
  onFilled: (state: DropdownState) => void
  onActive: (state: DropdownState) => void
  onError: (state: DropdownState) => void
  onEmpty: (state: DropdownState) => void
  onStateChange: (state: DropdownState) => void
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
  onClick,
  onError,
  onActive,
  onFilled,
  onEmpty,
  onStateChange,
}) => {
  const onStateChangeRef = useRef(onStateChange)
  const onActiveRef = useRef(onActive)
  const onFilledRef = useRef(onFilled)
  const onErrorRef = useRef(onError)
  const onEmptyRef = useRef(onEmpty)

  useEffect(() => {
    onStateChangeRef.current(state)
    if (state === DropdownState.ACTIVE) return onActiveRef.current(state)
    if (state === DropdownState.FILLED) return onFilledRef.current(state)
    if (state === DropdownState.ERROR) return onErrorRef.current(state)
    if (state === DropdownState.EMPTY) return onEmptyRef.current(state)
  }, [state])

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => onClick(state, event)
  const shouldShowIcon = Boolean(iconURI) && state !== DropdownState.EMPTY
  return (
    <div
      aria-hidden
      onClick={handleClick}
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
