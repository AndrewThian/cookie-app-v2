import React from 'react'

type CustomDateInputProps = {
  onClick?: () => void
  value?: string
}

export const CustomDateInput = React.forwardRef<HTMLDivElement, CustomDateInputProps>(
  ({ value, onClick }, ref) => {
    return (
      <div ref={ref} onClick={onClick} className="select-none p-base cursor-pointer text-right">
        <p>{value}</p>
      </div>
    )
  }
)

CustomDateInput.displayName = 'CustomDateInput'
