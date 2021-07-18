import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TableRow, TableRowProps } from './TableRow'

export default {
  title: 'Components/TableRow',
  component: TableRow,
} as Meta

const Template: Story<TableRowProps> = (args) => <TableRow {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'TableRow',
}
