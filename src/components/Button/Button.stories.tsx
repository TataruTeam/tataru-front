import Button from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { type: 'function' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Success',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'Warning',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Danger',
};
