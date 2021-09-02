import clsx from 'clsx'
import React, { ChangeEventHandler } from 'react'

export interface CheckboxProps {
  name?: string
  onChange?: (checked: boolean) => void
  initialValue?: boolean
  spacing?: boolean
  checked?: boolean
  disableEvents?: boolean
}

const CheckboxIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <img src={`/assets/checkbox/${filled ? 'filled' : 'blank'}.svg`} />
)

export const Checkbox: React.FC<CheckboxProps> = ({
  spacing = false,
  onChange,
  name,
  initialValue,
  checked,
  disableEvents = false,
}) => {
  const [localChecked, setLocalChecked] = React.useState(initialValue ?? false)
  const onChangeRef = React.useRef(onChange)

  const compositeChecked = (checked ?? false) || localChecked
  const handleClick = (): void => {
    if (typeof checked !== 'undefined') setLocalChecked((currentChecked) => !currentChecked)
  }
  const handleCheck: ChangeEventHandler<HTMLInputElement> = (e): void =>
    setLocalChecked(e?.target?.checked)

  React.useEffect(() => {
    if (onChangeRef.current) {
      onChangeRef.current(localChecked)
    }
  }, [localChecked])

  return (
    <div
      onClick={handleClick}
      className={clsx({
        'p-4': spacing,
        'pointer-events-none': disableEvents,
      })}
    >
      <input
        name={name}
        type="checkbox"
        className="hidden"
        onChange={handleCheck}
        checked={compositeChecked}
      />
      <CheckboxIcon filled={compositeChecked} />
    </div>
  )
}
