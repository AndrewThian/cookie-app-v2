import React from 'react'

export interface ButtonProps {
  label: string
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = () => {
  return <button>text button</button>
}
