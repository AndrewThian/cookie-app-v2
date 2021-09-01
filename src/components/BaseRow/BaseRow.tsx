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
  hasIcon?: boolean
}

export const BaseRow: React.FC<BaseRowProps> = ({
  children,
  borderColor = 'border-white',
  ignoreMargin,
  justifyContent,
  hasIcon = false,
}) => {
  const baseClassNames = 'flex text-base items-center relative rounded border'
  return (
    <div
      className={clsx(baseClassNames, borderColor, {
        'p-base': !ignoreMargin,
        'pr-base pt-base pb-base': ignoreMargin === IgnoreMargin.LEFT,
        'pl-base pt-base pb-base': ignoreMargin === IgnoreMargin.RIGHT,
        'justify-between': justifyContent === JustifyContent.CENTER,
        'p-5.5': !hasIcon,
      })}
    >
      {children}
    </div>
  )
}
