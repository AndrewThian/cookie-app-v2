import clsx from 'clsx'
import React from 'react'

export enum RowStatus {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  DISABLE = 'DISABLE',
  DEFAULT = 'DEFAULT',
}

export interface BaseRowProps {
  children: React.ReactNode
  borderStatus?: RowStatus
  bgStatus?: RowStatus
  disabled?: boolean
}

export const BaseRow: React.FC<BaseRowProps> = ({
  borderStatus = RowStatus.DEFAULT,
  bgStatus = RowStatus.DEFAULT,
  children,
  disabled = false,
}) => {
  return (
    <div
      className={clsx(
        'text-base rounded border bg-white w-full',
        {
          'border-white': borderStatus === RowStatus.DEFAULT,
          'border-blue-400': borderStatus === RowStatus.SUCCESS,
          'border-pink-400': borderStatus === RowStatus.FAILURE,
          'border-grey-100': disabled,
        },
        {
          'bg-white': bgStatus === RowStatus.DEFAULT,
          'bg-grey-100': disabled,
        },
        {
          'text-grey-300': bgStatus === RowStatus.DISABLE,
          'text-grey-400': disabled,
        }
      )}
    >
      {children}
    </div>
  )
}
