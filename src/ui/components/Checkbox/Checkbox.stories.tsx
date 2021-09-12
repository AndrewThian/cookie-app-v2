import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Checkbox, CheckboxProps } from './Checkbox'

export default {
  title: 'Components/Atom/Checkbox',
  component: Checkbox,
} as Meta

const Template: Story<CheckboxProps> = (args) => (
  <div>
    <Checkbox {...args} />
  </div>
)

export const Primary = Template.bind({})

Primary.args = {
  name: 'Checkbox',
}
