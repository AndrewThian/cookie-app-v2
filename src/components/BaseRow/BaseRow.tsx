import clsx from 'clsx'
import React from 'react'

export enum IgnoreMargin {
  LEFT = 'left',
  RIGHT = 'right',
}

export enum JustifyContent {
  CENTER = 'center',
}
export interface BaseRowProps {
  children: React.ReactNode
  borderColor?: string
  ignoreMargin?: IgnoreMargin
  justifyContent?: JustifyContent
}

export const BaseRow: React.FC<BaseRowProps> = ({
  children,
  borderColor = 'border-white',
  ignoreMargin,
  justifyContent,
}) => {
  const baseClassNames = 'text-base flex items-center relative rounded border'
  return (
    <div
      className={clsx(baseClassNames, borderColor, {
        'p-base': !ignoreMargin,
        'pr-base pt-base pb-base': ignoreMargin === IgnoreMargin.LEFT,
        'pl-base pt-base pb-base': ignoreMargin === IgnoreMargin.RIGHT,
        'justify-between': justifyContent === JustifyContent.CENTER,
      })}
    >
      {children}
    </div>
  )
}
