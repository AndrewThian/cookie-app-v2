import { BaseIconText, Type } from '@components/BaseIconText'
import React from 'react'
import { BaseRow } from '../BaseRow'

export interface TransactionRowProps {
  label: string
  iconURI?: string
  mainText?: string
  subText?: string
}

export const TransactionRow: React.FC<TransactionRowProps> = ({ label, mainText, subText }) => (
  <BaseRow>
    <div className="flex items-center justify-between">
      <BaseIconText
        type={Type.AUTO}
        secondary={
          <div>
            <p className="text-sm">{label}</p>
            <p className="text-xs text-grey-300">{label}</p>
          </div>
        }
      />
      <div className="text-right pr-4">
        <p>{mainText}</p>
        <p className="text-xs text-grey-300">{subText}</p>
      </div>
    </div>
  </BaseRow>
)
