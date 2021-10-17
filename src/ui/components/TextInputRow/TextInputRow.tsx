import { BaseIconText } from '@components/BaseIconText'
import React, { ChangeEventHandler, FocusEventHandler, MouseEventHandler } from 'react'
import { useClickAway } from 'react-use'
import { BaseRow, RowStatus } from '../BaseRow'

export interface TextInputRowProps {
  onChange: (value: string) => void
  disabled?: boolean
}

export const TextInputRow: React.FC<TextInputRowProps> = ({ onChange, disabled = false }) => {
  const [inputText, setInputText] = React.useState('')
  const [inputFocus, setInputFocus] = React.useState(false)
  const inputElementRef = React.useRef<HTMLInputElement>(null)
  const containerElementRef = React.useRef<HTMLDivElement>(null)

  const onChangeRef = React.useRef(onChange)
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value
    setInputText(value)
  }

  useClickAway(containerElementRef, () => setInputFocus(false))

  const handleContainerClick: MouseEventHandler<HTMLDivElement> = () => {
    if (disabled) return
    if (inputElementRef.current) inputElementRef.current.focus()
  }

  const handleInputFocus: FocusEventHandler<HTMLInputElement> = () => setInputFocus(true)

  React.useEffect(() => {
    if (onChangeRef.current) {
      onChangeRef.current(inputText)
    }
  }, [inputText])

  return (
    <BaseRow disabled={disabled} borderStatus={inputFocus ? RowStatus.SUCCESS : RowStatus.DEFAULT}>
      <BaseIconText
        secondary={
          <div
            ref={containerElementRef}
            className="flex items-center"
            onClick={handleContainerClick}
          >
            <input
              disabled={disabled}
              className="w-full placeholder-grey-300"
              type="text"
              value={inputText}
              onChange={handleChange}
              onFocus={handleInputFocus}
              placeholder="Enter text"
            />
          </div>
        }
      />
    </BaseRow>
  )
}
