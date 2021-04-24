import * as React from 'react'

type Props = {
  children: JSX.Element
}

function SafeHydrate({ children }: Props) {
  return <div suppressHydrationWarning>{typeof document === 'undefined' ? null : children}</div>
}

export default SafeHydrate
