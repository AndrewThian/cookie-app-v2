import React from 'react'
import DatePicker from 'react-datepicker'
import { BaseRow, RowStatus } from '../BaseRow'
import { CustomDateInput } from './CustomDateInput'

import 'react-datepicker/dist/react-datepicker.css'
import { BaseIconText, Type } from '@components/BaseIconText'

export interface CalendarRowProps {
  label: string
  onChange: (date: Date) => void
  status?: RowStatus
  disabled?: boolean
}

export const CalendarRow: React.FC<CalendarRowProps> = ({
  label,
  status = RowStatus.DEFAULT,
  disabled = false,
  onChange,
}) => {
  const [startDate, setStartDate] = React.useState(new Date())
  const onChangeRef = React.useRef(onChange)

  const handleChange = (date: Date): void => {
    if (disabled) return
    setStartDate(date)
  }

  React.useEffect(() => {
    if (onChangeRef.current) {
      onChangeRef.current(startDate)
    }
  }, [startDate])

  const rowStatus = disabled ? RowStatus.DISABLE : status

  return (
    <BaseRow borderStatus={rowStatus} bgStatus={rowStatus}>
      <div className="flex items-center">
        <BaseIconText type={Type.AUTO} secondary={<p className="text-base">{label}</p>} />
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          customInput={<CustomDateInput />}
          wrapperClassName="test"
        />
      </div>
    </BaseRow>
  )
}
