import React from 'react'
import { BaseRow } from '../BaseRow'

export interface TransactionRowProps {
  label: string
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
  <BaseRow>
    <div className="flex items-center p-base justify-between">
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
    </div>
  </BaseRow>
)
