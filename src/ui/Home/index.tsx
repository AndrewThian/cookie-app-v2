import * as React from 'react'
import { Button, ButtonType } from '@components/Button'
import { AppShell, BgColor } from '@components/AppShell'

function Home(): JSX.Element {
  return (
    <AppShell bgColor={BgColor.WHITE}>
      <h1 className="text-grey-400">Welcome to Cookiejar</h1>
      <div>
        <p>Track finances faster and see where your money goes</p>
      </div>
      <Button label="Log first transaction" type={ButtonType.LINK}></Button>
    </AppShell>
  )
}

export default Home
