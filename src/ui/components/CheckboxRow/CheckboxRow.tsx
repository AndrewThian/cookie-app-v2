import { Checkbox } from '../Checkbox'
import React from 'react'
import { BaseRow } from '../BaseRow'
import { BaseIconText } from '@components/BaseIconText'

export interface CheckboxRowProps {
  label: string
  isSelected?: boolean
  onChange?: (checked: boolean) => void
  initialValue?: boolean
}

export const CheckboxRow: React.FC<CheckboxRowProps> = ({ label, onChange, initialValue }) => {
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
        <BaseIconText secondary={<p className="text-base">{label}</p>} />
      </BaseRow>
      <Checkbox spacing onChange={onChange} checked={checked} disableEvents />
    </div>
  )
}
