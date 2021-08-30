import React, { ChangeEventHandler } from 'react'

export interface CheckboxProps {
  name: string
  onChange: (checked: boolean) => void
  initialValue?: boolean
}

const CheckboxIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <img src={`/assets/checkbox/${filled ? 'filled' : 'blank'}.svg`} />
)

export const Checkbox: React.FC<CheckboxProps> = ({ onChange, name, initialValue }) => {
  const [checked, setChecked] = React.useState(initialValue ?? false)
  const onChangeRef = React.useRef(onChange)

  const handleClick = (): void => setChecked((currentChecked) => !currentChecked)
  const handleCheck: ChangeEventHandler<HTMLInputElement> = (e): void =>
    setChecked(e?.target?.checked)

  React.useEffect(() => {
    if (onChangeRef.current) {
      onChangeRef.current(checked)
    }
  }, [checked])

  return (
    <div onClick={handleClick}>
      <input
        name={name}
        className="hidden"
        checked={checked}
        type="checkbox"
        onChange={handleCheck}
      />
      <CheckboxIcon filled={checked} />
    </div>
  )
}
