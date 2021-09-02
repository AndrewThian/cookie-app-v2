import React from 'react'
import { Story, Meta } from '@storybook/react'

import { BaseRow, BaseRowProps } from './BaseRow'

export default {
  title: 'Components/BaseRow',
  component: BaseRow,
} as Meta

const Template: Story<BaseRowProps> = (args) => <BaseRow {...args} />

export const Primary = Template.bind({})

function Test(): React.ReactElement {
  return <p>Ice cream</p>
}

Primary.args = {
  children: <Test />,
}
