import React from 'react'
import { Story, Meta } from '@storybook/react'

import { TextInputRow, TextInputRowProps } from './TextInputRow'

export default {
  title: 'Components/Molecule/TextInputRow',
  component: TextInputRow,
} as Meta

const Template: Story<TextInputRowProps> = (args) => <TextInputRow {...args} />

export const Primary = Template.bind({})

Primary.args = {}
