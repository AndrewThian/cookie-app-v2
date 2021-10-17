import clsx from 'clsx'
import React from 'react'

export enum FontWeight {
  regular = 'regular',
  medium = 'medium',
}

type Props = {
  weight?: FontWeight
  children: React.ReactNode
}

const Body: React.FC<Props> = ({ weight = FontWeight.regular, children }) => {
  return (
    <p
      className={clsx({
        'font-medium': weight === FontWeight.medium,
      })}
    >
      {children}
    </p>
  )
}

export default Body
