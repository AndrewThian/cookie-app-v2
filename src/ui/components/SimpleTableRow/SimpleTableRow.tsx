import React from 'react'
import { BaseRow } from '../BaseRow'

import BlueTick from '@icons/blue-tick.svg'
import DefaultIcon from '@icons/diamond.svg'

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

export const SimpleTableRow: React.FC<SimpleTableRowProps> = ({
  label,
  icon,
  isSelected = false,
}) => (
  <BaseRow>
    <div className="flex justify-between items-center">
      <div className="flex items-center p-base">
        {icon ?? <DefaultIcon />}
        <p className="block ml-4">{label}</p>
      </div>
      {isSelected ? <Tick /> : null}
    </div>
  </BaseRow>
)
