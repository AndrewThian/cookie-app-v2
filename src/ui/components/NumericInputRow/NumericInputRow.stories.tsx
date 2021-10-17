import React from 'react'
import { Story, Meta } from '@storybook/react'

import { NumericInputRow, NumericInputRowProps } from './NumericInputRow'

export default {
  title: 'Components/Molecule/NumericInputRow',
  component: NumericInputRow,
} as Meta

const Template: Story<NumericInputRowProps> = (args) => <NumericInputRow {...args} />

export const Primary = Template.bind({})

Primary.args = {
  label: 'NumericInputRow',
  iconURI: '/assets/icons/diamond.svg',
}
