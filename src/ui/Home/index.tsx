import * as React from 'react'
import { AppShell, BgColor } from '@components/AppShell'
import { MainCTA } from './MainCTA'
import { FirstTxBtn } from './FirstTxBtn'

function Home(): JSX.Element {
  return (
    <AppShell bgColor={BgColor.WHITE}>
      <div className="flex flex-col justify-between h-screen">
        <MainCTA
          title="Welcome to Cookiejar"
          subTitle="Track finances faster and see where your money goes"
        />
        <FirstTxBtn onClick={() => console.log('clicked')} />
      </div>
    </AppShell>
  )
}

export default Home
