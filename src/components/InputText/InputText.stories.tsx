import InputText from '.';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../Button';

export default {
  title: 'Input/Text',
  component: InputText,
  argTypes: {
    onClick: { type: 'function' },
  },
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = () => (
  <div className="flex flex-col w-[400px] items-end">
    <InputText label="Username" />
    <InputText type="password" label="Password" />
    <Button className="w-full">Send</Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder...',
};
