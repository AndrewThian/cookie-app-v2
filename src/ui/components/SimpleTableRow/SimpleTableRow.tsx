import React from 'react'
import { BaseRow } from '../BaseRow'

import BlueTick from '@icons/blue-tick.svg'
import { BaseIconText } from '@components/BaseIconText'

export interface SimpleTableRowProps {
  label: string
  isSelected?: boolean
  icon?: React.ReactElement
}

const Tick: React.FC = () => (
  <div className="icon-padding">
    <div className="rounded-full icon-size bg-blue-100 flex justify-center items-center">
      <BlueTick />
    </div>
  </div>
)

export const SimpleTableRow: React.FC<SimpleTableRowProps> = ({ label, isSelected = false }) => (
  <BaseRow>
    <div className="flex justify-between items-center">
      <BaseIconText secondary={<p className="text-base">{label}</p>} />
      {isSelected ? <Tick /> : null}
    </div>
  </BaseRow>
)
