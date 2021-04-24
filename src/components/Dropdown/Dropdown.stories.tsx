import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Dropdown, DropdownProps } from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Dropdown',
};
