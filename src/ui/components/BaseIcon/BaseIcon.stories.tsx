import React from 'react'
import { Story, Meta } from '@storybook/react'

import { BaseIcon, BaseIconProps } from './BaseIcon'

export default {
  title: 'Components/Atom/BaseIcon',
  component: BaseIcon,
} as Meta

const Template: Story<BaseIconProps> = (args) => <BaseIcon {...args} />

export const Primary = Template.bind({})

Primary.args = {}
