import React from 'react'
import { BaseRow } from '../BaseRow'

export interface CheckboxRowProps {
  label: string
  isSelected?: boolean
  iconURI?: string
}

const Tick: React.FC = () => (
  <div className="rounded-full icon-size bg-blue-100 absolute top-2 right-4 flex justify-center items-center">
    <img src="/assets/icons/blue-tick.svg" alt="blue tick" />
  </div>
)

export const CheckboxRow: React.FC<CheckboxRowProps> = ({
  label,
  iconURI = '/assets/icons/diamond.svg',
  isSelected = false,
}) => (
  <BaseRow>
    <img src={iconURI} alt="category icon" />
    <p className="block ml-4">{label}</p>
    {isSelected ? <Tick /> : null}
  </BaseRow>
)
