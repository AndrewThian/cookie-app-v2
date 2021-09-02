import clsx from 'clsx'
import React from 'react'

export enum BgColor {
  WHITE = 'white',
  GREY = 'grey',
}

export interface AppShellProps {
  children: React.ReactNode
  bgColor?: BgColor
}

export const AppShell: React.FC<AppShellProps> = ({ children, bgColor = BgColor.GREY }) => {
  return (
    <div
      className={clsx('px-4 h-screen', {
        'bg-grey-bg': bgColor === BgColor.GREY,
        'bg-white': bgColor === BgColor.WHITE,
      })}
    >
      {children}
    </div>
  )
}
