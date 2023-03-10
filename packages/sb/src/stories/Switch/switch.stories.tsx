import {Switch, SwitchProps, theme} from '@sportsuex/react';
import {ComponentStory, Meta} from '@storybook/react';

export default {
  title: 'Forms/Switch',
  component: Switch,
} as Meta<SwitchProps>;

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />;

const TemplateWithLabel: ComponentStory<typeof Switch> = args => (
  <div style={{display: 'flex', alignItems: 'center', gap: '.5rem'}}>
    <Switch {...args} id='teste' />
    <label
      style={{color: theme.colors.button_text_secondary.toString()}}
      htmlFor='teste'>
      Accept terms and conditions
    </label>
  </div>
);

export const Checked = Template.bind({});
Checked.args = {
  defaultChecked: true,
};

Checked.argTypes = {
  defaultChecked: {
    table: {
      disable: true,
    },
  },
  size: {
    name: 'SIZE',
    type: 'boolean',
    defaultValue: 'normal',
    description: 'SWITCH BETWEEN SIZES',
    table: {defaultValue: {summary: 'normal'}},
    control: {
      type: 'inline-radio',
      options: ['sm', 'normal'],
    },
  },
};

export const Unchecked = Template.bind({});
Unchecked.args = {
  defaultChecked: false,
};

export const With_Label = TemplateWithLabel.bind({});
With_Label.args = {
  defaultChecked: true,
};
