import React from 'react'
import DatePicker from 'react-datepicker'
import { BaseRow, JustifyContent } from '../BaseRow'
import { CustomDateInput } from './CustomDateInput'

import 'react-datepicker/dist/react-datepicker.css'

export interface CalendarRowProps {
  label: string
  iconURI?: string
  onChange: (date: Date) => void
}

export const CalendarRow: React.FC<CalendarRowProps> = ({
  label,
  iconURI = '/assets/icons/diamond.svg',
  onChange,
}) => {
  const [startDate, setStartDate] = React.useState(new Date())
  const onChangeRef = React.useRef(onChange)

  const handleChange = (date: Date): void => setStartDate(date)

  React.useEffect(() => {
    if (onChangeRef.current) {
      onChangeRef.current(startDate)
    }
  }, [startDate])

  return (
    <BaseRow justifyContent={JustifyContent.CENTER}>
      <div className="flex items-center">
        <img src={iconURI} alt="category icon" />
        <div className="block ml-4">
          <p className="text-base">{label}</p>
        </div>
      </div>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        customInput={<CustomDateInput />}
        wrapperClassName="test"
      />
    </BaseRow>
  )
}
