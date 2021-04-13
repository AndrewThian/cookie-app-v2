import SafeHydrate from "../domains/system/SafeHydrate"

function MyApp({ Component, pageProps }) {
  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  )
}

export default MyApp
