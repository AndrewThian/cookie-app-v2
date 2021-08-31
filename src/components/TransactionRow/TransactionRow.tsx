import React from 'react'
import { BaseRow, JustifyContent } from '../BaseRow'

export interface TransactionRowProps {
  label: string
  isSelected?: boolean
  iconURI?: string
  mainText?: string
  subText?: string
}

export const TransactionRow: React.FC<TransactionRowProps> = ({
  label,
  iconURI = '/assets/icons/diamond.svg',
  mainText,
  subText,
}) => (
  <BaseRow justifyContent={JustifyContent.CENTER}>
    <div className="flex items-center">
      <img src={iconURI} alt="category icon" />
      <div className="block ml-4">
        <p className="text-sm">{label}</p>
        <p className="text-xs text-grey-300">{label}</p>
      </div>
    </div>
    <div className="text-right">
      <p>{mainText}</p>
      <p className="text-xs text-grey-300">{subText}</p>
    </div>
  </BaseRow>
)
