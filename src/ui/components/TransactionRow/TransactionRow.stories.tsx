import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TransactionRow, TransactionRowProps } from './TransactionRow'

export default {
  title: 'Components/Molecule/TransactionRow',
  component: TransactionRow,
} as Meta

const Template: Story<TransactionRowProps> = (args) => <TransactionRow {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'TransactionRow',
  mainText: '$21.10',
  subText: 'Lunch with Dad',
}
