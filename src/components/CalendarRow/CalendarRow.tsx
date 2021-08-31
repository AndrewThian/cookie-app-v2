import React from 'react'
import { BaseRow, JustifyContent } from '../BaseRow'

export interface CalendarRowProps {
  label: string
  isSelected?: boolean
  iconURI?: string
  dateText?: string
}

export const CalendarRow: React.FC<CalendarRowProps> = ({
  label,
  iconURI = '/assets/icons/diamond.svg',
  dateText,
}) => (
  <BaseRow justifyContent={JustifyContent.CENTER}>
    <div className="flex items-center">
      <img src={iconURI} alt="category icon" />
      <div className="block ml-4">
        <p className="text-base">{label}</p>
      </div>
    </div>
    <div className="text-right">
      <p>{dateText}</p>
    </div>
  </BaseRow>
)
