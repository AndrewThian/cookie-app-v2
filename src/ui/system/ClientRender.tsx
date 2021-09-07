type Props = {
  children: JSX.Element
}

function ClientRender({ children }: Props): JSX.Element | null {
  if (typeof document === 'undefined') {
    return null
  }

  return children
}

export { ClientRender }
