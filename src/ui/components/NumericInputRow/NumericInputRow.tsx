import React, { FocusEventHandler, MouseEventHandler } from 'react'
import { BaseRow, RowStatus } from '../BaseRow'
import clsx from 'clsx'
import { ChangeEventHandler } from 'react'
import { useClickAway } from 'react-use'
import { BaseIconText, Type } from '@components/BaseIconText'

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
  onChange,
}) => {
  const [inputText, setInputText] = React.useState('')
  const [inputFocus, setInputFocus] = React.useState(false)
  const inputElementRef = React.useRef<HTMLInputElement>(null)
  const containerElementRef = React.useRef<HTMLDivElement>(null)

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
    <BaseRow disabled={disabled} borderStatus={inputFocus ? RowStatus.SUCCESS : RowStatus.DEFAULT}>
      <div
        className={clsx('flex items-center select-none', {
          'cursor-pointer': !disabled,
        })}
        ref={containerElementRef}
        onClick={handleContainerClick}
      >
        <BaseIconText
          type={Type.AUTO}
          disabled={disabled}
          secondary={<p className="text-base">{label}</p>}
        />
        <div className="flex items-center w-full p-base">
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
