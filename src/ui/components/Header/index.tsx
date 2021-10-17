import React from 'react'

type Props = {
  level: number
  children: React.ReactNode
}

const Header: React.FC<Props> = ({ level, children }) => {
  const defaultHeader = <h1 className="font-medium font-h1">{children}</h1>

  if (level === 1) {
    return defaultHeader
  } else if (level === 2) {
    return <h2 className="font-medium font-h2">{children}</h2>
  } else if (level === 3) {
    return <h3 className="font-medium font-h3">{children}</h3>
  }

  return defaultHeader
}

export default Header
