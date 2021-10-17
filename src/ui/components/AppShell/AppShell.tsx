import clsx from 'clsx'
import React from 'react'

export enum BgColor {
  WHITE = 'white',
  GREY = 'grey',
}

export enum ShellType {
  main = 'main',
  page = 'page',
}
export interface AppShellProps {
  children: React.ReactNode
  bgColor?: BgColor
  type?: ShellType
}

export const AppShell: React.FC<AppShellProps> = ({
  type = ShellType.main,
  children,
  bgColor = BgColor.GREY,
}) => {
  return (
    <div
      className={clsx('h-screen', {
        'bg-grey-bg': bgColor === BgColor.GREY,
        'bg-white': bgColor === BgColor.WHITE,
        'px-4': type === ShellType.main,
        'py-8 px-4': type === ShellType.page,
      })}
    >
      {children}
    </div>
  )
}
