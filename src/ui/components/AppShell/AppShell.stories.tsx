import React from 'react'
import { Story, Meta } from '@storybook/react'

import { AppShell, AppShellProps } from './AppShell'

export default {
  title: 'Components/AppShell',
  component: AppShell,
} as Meta

const Template: Story<AppShellProps> = (args) => <AppShell {...args} />

export const Primary = Template.bind({})

function Test(): React.ReactElement {
  return <p>Ice cream</p>
}

Primary.args = {
  children: <Test />,
}
