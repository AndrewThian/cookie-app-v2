import React from 'react'
import { Story, Meta } from '@storybook/react'

import { MainCTA, MainCTAProps } from './MainCTA'

export default {
  title: 'ui/Home/MainCTA',
  component: MainCTA,
} as Meta

const Template: Story<MainCTAProps> = (args) => <MainCTA {...args} />

export const Primary = Template.bind({})

Primary.args = {
  title: 'Welcome to Storybook',
  subTitle: 'Use storybook to properly design your application components',
}
