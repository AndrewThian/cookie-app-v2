import React from 'react'
import { Story, Meta } from '@storybook/react'

import { CalendarRow, CalendarRowProps } from './CalendarRow'

export default {
  title: 'Components/CalendarRow',
  component: CalendarRow,
} as Meta

const Template: Story<CalendarRowProps> = (args) => <CalendarRow {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'CalendarRow',
  dateText: '2021/02/22',
}
