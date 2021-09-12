import React, { FocusEventHandler, MouseEventHandler } from 'react'
import { BaseRow, RowStatus } from '../BaseRow'
import { isUndefined } from 'lodash-es'
import clsx from 'clsx'
import { ChangeEventHandler } from 'react'
import { useClickAway } from 'react-use'

export interface NumericInputRowProps {
  label: string
  iconURI?: string
  disabled?: boolean
  onChange: (value: string) => void
}

const hasDollarSign = (val: string): boolean => RegExp('\\$').test(val)
const stripDollarSign = (val: string): string => val.replace(RegExp('\\$'), '')

export const NumericInputRow: React.FC<NumericInputRowProps> = ({
  label,
  disabled = false,
  iconURI,
  onChange,
}) => {
  const [inputText, setInputText] = React.useState('')
  const [inputFocus, setInputFocus] = React.useState(false)
  const inputElementRef = React.useRef<HTMLInputElement>(null)
  const containerElementRef = React.useRef<HTMLDivElement>(null)
  const hasIcon = !isUndefined(iconURI) && iconURI !== ''

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
    let text = hasDollarSign(value) ? value : `$${value}`
    if (text === '$') text = ''
    setInputText(text)
  }

  useClickAway(containerElementRef, () => setInputFocus(false))

  const handleContainerClick: MouseEventHandler<HTMLDivElement> = () => {
    if (disabled) return
    if (inputElementRef.current) inputElementRef.current.focus()
  }

  const handleInputFocus: FocusEventHandler<HTMLInputElement> = () => setInputFocus(true)

  React.useEffect(() => {
    if (onChange) {
      onChange(stripDollarSign(inputText))
    }
  }, [onChange, inputText])

  return (
    <BaseRow
      bgStatus={disabled ? RowStatus.DISABLE : RowStatus.DEFAULT}
      borderStatus={
        disabled ? RowStatus.DISABLE : inputFocus ? RowStatus.SUCCESS : RowStatus.DEFAULT
      }
    >
      <div
        className={clsx('flex items-center select-none p-base', {
          'cursor-pointer': !disabled,
        })}
        ref={containerElementRef}
        onClick={handleContainerClick}
      >
        {iconURI && <img width="24" height="24" src={iconURI} alt="category icon" />}
        <div className="flex items-center w-full">
          <div
            className={clsx({
              'ml-4': hasIcon,
            })}
          >
            <p>{label}</p>
          </div>
          <input
            disabled={disabled}
            ref={inputElementRef}
            className="pointer-events-none w-full placeholder-grey-300 text-right"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="$0"
            value={inputText}
            onChange={handleChange}
            onFocus={handleInputFocus}
          />
        </div>
      </div>
    </BaseRow>
  )
}
