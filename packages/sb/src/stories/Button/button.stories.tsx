import {Button, ButtonProps} from '@sportsuex/react';
import {ComponentStory, Meta} from '@storybook/react';

export default {
  title: 'Design System/Forms/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta<ButtonProps>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Filled = Template.bind({});

Filled.args = {
  intent: 'filled',
  size: 'md',
};

Filled.argTypes = {
  children: {
    name: 'CHILDREN',
  },
  intent: {
    name: 'INTENT',
    table: {
      defaultValue: {summary: 'filled'},
    },
    control: {
      type: 'inline-radio',
      options: ['filled', 'outline_primary'],
    },
  },
  size: {
    name: 'SIZE',
    defaultValue: 'md',
    control: {
      type: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const outline_primary = Template.bind({});

outline_primary.args = {
  intent: 'outline_primary',
};
