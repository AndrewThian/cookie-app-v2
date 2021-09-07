import React from 'react'
import { useForm } from 'react-hook-form'

export interface FormProps {
  defaultValues: Record<string, unknown>
  children: React.ReactChildren
  onSubmit: () => void
}

export const Form: React.FC<FormProps> = ({ defaultValues, children, onSubmit }) => {
  const methods = useForm({ defaultValues })
  const { handleSubmit } = methods

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child

        // TODO: find out why we need to do a createElement instead of cloneElement
        // is it because we need to deep clone the properties?
        // return React.cloneElement(child, { register: methods.register })
        return React.createElement(child.type, {
          ...{ ...child.props, register: methods.register, key: child.props.name },
        })
      })}
    </form>
  )
}
