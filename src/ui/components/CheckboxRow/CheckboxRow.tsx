import { Checkbox } from '../Checkbox'
import React from 'react'
import { BaseRow } from '../BaseRow'

export interface CheckboxRowProps {
  label: string
  isSelected?: boolean
  iconURI?: string
  onChange?: (checked: boolean) => void
  initialValue?: boolean
}

export const CheckboxRow: React.FC<CheckboxRowProps> = ({
  label,
  iconURI = '/assets/icons/diamond.svg',
  onChange,
  initialValue,
}) => {
  const [checked, setChecked] = React.useState(initialValue ?? false)
  const handleClick = (): void => setChecked((currentChecked) => !currentChecked)
  const onChangeRef = React.useRef(onChange)

  React.useEffect(() => {
    if (onChangeRef.current) {
      onChangeRef.current(checked)
    }
  }, [checked])

  return (
    <div className="flex items-center cursor-pointer" onClick={handleClick}>
      <BaseRow>
        <div className="flex items-center select-none p-base w-full">
          <img src={iconURI} alt="category icon" />
          <p className="block ml-4">{label}</p>
        </div>
      </BaseRow>
      <Checkbox spacing onChange={onChange} checked={checked} disableEvents />
    </div>
  )
}
