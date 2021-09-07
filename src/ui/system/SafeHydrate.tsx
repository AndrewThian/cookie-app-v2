import * as React from 'react'

type Props = {
  children: JSX.Element
}

function SafeHydrate({ children }: Props): JSX.Element {
  return <div suppressHydrationWarning>{typeof document === 'undefined' ? null : children}</div>
}

export { SafeHydrate }
