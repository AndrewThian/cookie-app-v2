import React from 'react'
import { Story, Meta } from '@storybook/react'

import { BaseIconText, BaseIconTextProps } from './BaseIconText'

export default {
  title: 'Components/Molecule/BaseIconText',
  component: BaseIconText,
} as Meta

const Template: Story<BaseIconTextProps> = (args) => <BaseIconText {...args} />

export const Primary = Template.bind({})

const SampleSecondary: React.FC = () => <p className="text-base">Sample</p>

Primary.args = {
  secondary: <SampleSecondary />,
}
