import { BaseIcon } from '@components/BaseIcon/BaseIcon'
import clsx from 'clsx'
import React from 'react'

export interface BaseIconTextProps {
  icon?: React.ReactNode
  secondary?: React.ReactNode
  selectable?: boolean
  noIcon?: boolean
  type?: Type
  disabled?: boolean
}

export enum Type {
  FULL = 'FULL',
  AUTO = 'AUTO',
}

export const BaseIconText: React.FC<BaseIconTextProps> = ({
  icon,
  noIcon = false,
  selectable,
  secondary,
  type = Type.FULL,
  disabled = false,
}) => (
  <div
    className={clsx('flex items-center select-none', {
      'w-full': type === Type.FULL,
    })}
  >
    {!noIcon && (
      <BaseIcon disabled={disabled} selectable={selectable}>
        {icon}
      </BaseIcon>
    )}
    <div>{secondary}</div>
  </div>
)
