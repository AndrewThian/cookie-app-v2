import React from 'react'
import { Story, Meta } from '@storybook/react'

import { FirstTxBtn, FirstTxBtnProps } from './FirstTxBtn'

export default {
  title: 'ui/Home/FirstTxBtn',
  component: FirstTxBtn,
} as Meta

const Template: Story<FirstTxBtnProps> = (args) => <FirstTxBtn {...args} />

export const Primary = Template.bind({})

Primary.args = {}
