import React from 'react'
import { Story, Meta } from '@storybook/react'

import { CheckboxRow, CheckboxRowProps } from './CheckboxRow'

export default {
  title: 'Components/Molecule/CheckboxRow',
  component: CheckboxRow,
} as Meta

const Template: Story<CheckboxRowProps> = (args) => <CheckboxRow {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'CheckboxRow',
}
