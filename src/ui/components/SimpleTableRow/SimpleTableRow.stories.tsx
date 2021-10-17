import React from 'react'
import { Story, Meta } from '@storybook/react'

import { SimpleTableRow, SimpleTableRowProps } from './SimpleTableRow'

export default {
  title: 'Components/Molecule/SimpleTableRow',
  component: SimpleTableRow,
} as Meta

const Template: Story<SimpleTableRowProps> = (args) => <SimpleTableRow {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'SimpleTableRow',
}
