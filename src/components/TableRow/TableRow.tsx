import React from 'react'

export interface TableRowProps {
  label: string
  isSelected: boolean
  iconURI: string
}

const Tick: React.FC = () => (
  <div className="tablerow-tick bg-blue-100 absolute top-2 right-4 rounded-full flex justify-center items-center">
    <img src="/assets/icons/blue-tick.svg" alt="blue tick" />
  </div>
)

export const TableRow: React.FC<TableRowProps> = ({ label, iconURI, isSelected }) => {
  const fontStyle = 'text-base'
  const paddingStyle = 'p-4'
  const imgSrc = iconURI ?? '/assets/icons/diamond.svg'

  return (
    <div className={`${fontStyle} ${paddingStyle} flex items-center relative`}>
      <img src={imgSrc} alt="category icon" />
      <p className="block ml-4">{label}</p>
      {isSelected ? <Tick /> : null}
    </div>
  )
}
