import SafeHydrate from '../domains/system/SafeHydrate'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  )
}

export default MyApp
