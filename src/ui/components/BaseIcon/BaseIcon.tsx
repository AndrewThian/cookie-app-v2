import React from 'react'

import Diamond from '@icons/diamond.svg'
import ChevronDown from '@icons/chevron-down.svg'
import clsx from 'clsx'

export interface BaseIconProps {
  selectable?: boolean
  disabled?: boolean
  children?: React.ReactNode
}

const Icon: React.FC<Omit<BaseIconProps, 'selectable'>> = ({ children, disabled = false }) => {
  const colorClassName = clsx('fill-current', { 'text-grey-300': disabled })

  return children && React.isValidElement(children) ? (
    React.cloneElement(children, {
      className: colorClassName,
    })
  ) : (
    <Diamond className={colorClassName} />
  )
}

export const BaseIcon: React.FC<BaseIconProps> = ({
  selectable = false,
  disabled = false,
  children,
}) => {
  return (
    <div
      className={clsx('w-min p-base pr-4 flex items-center', {
        'cursor-pointer': !disabled && selectable,
      })}
    >
      <Icon disabled={disabled}>{children}</Icon>
      {selectable && (
        <Icon disabled={disabled}>
          <ChevronDown />
        </Icon>
      )}
    </div>
  )
}
