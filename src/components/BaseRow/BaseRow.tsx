import clsx from 'clsx'
import React from 'react'

export interface BaseRowProps {
  children: React.ReactNode
  borderColor?: string
}

export const BaseRow: React.FC<BaseRowProps> = ({ children, borderColor = 'border-white' }) => {
  const baseClassNames = 'text-base base-row-padding-base flex items-center relative rounded border'
  return <div className={clsx(baseClassNames, borderColor)}>{children}</div>
}
