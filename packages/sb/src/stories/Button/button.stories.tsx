import { Button, ButtonProps } from '@sportsuex/react'
import { ComponentStory, Meta } from '@storybook/react'

import { AddIcon } from '../../components/icons/add'
import { CheckIcon } from '../../components/icons/check'

export default {
  title: 'Forms/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta<ButtonProps>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

Primary.args = {
  intent: 'filled',
  variant: 'primary',
  size: 'md',
  disabled: false,
}

Primary.argTypes = {
  disabled: {
    name: 'DISABLED',
    control: {
      type: 'boolean',
    },
  },
  children: {
    description: 'CHANGE THE TEXT INSIDE THE BUTTON',
    // @ts-ignore
    type: { required: true },
    name: 'CHILDREN',
  },
  intent: {
    name: 'INTENT',
    description: 'ALTERNATE BETWEEN BUTTON FILLING TYPES',
    table: {
      defaultValue: { summary: 'filled' },
    },
    control: {
      type: 'inline-radio',
      options: ['filled', 'outline'],
    },
  },
  size: {
    name: 'SIZE',
    description: 'ALTERNATE BETWEEN BUTTON SIZES',
    table: {
      defaultValue: { summary: 'md' },
    },
    control: {
      type: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  variant: {
    name: 'VARIANT',
    description: 'ALTERNATE BETWEEN BUTTON COLORS',
    table: {
      defaultValue: { summary: 'primary' },
    },
    control: {
      type: 'inline-radio',
      options: ['primary', 'secondary'],
    },
  },
}

export const Secondary = Template.bind({})

Secondary.args = {
  intent: 'filled',
  variant: 'secondary',
  size: 'md',
  disabled: false,
}

Secondary.argTypes = {
  disabled: {
    name: 'DISABLED',
    control: {
      type: 'boolean',
    },
  },
  children: {
    // @ts-ignore
    type: { required: true },
    name: 'CHILDREN',
  },
  intent: {
    name: 'INTENT',
    description: 'BUTTON TYPE',
    table: {
      defaultValue: { summary: 'filled' },
    },
    control: {
      type: 'inline-radio',
      options: ['filled', 'outline'],
    },
  },
  size: {
    name: 'SIZE',
    table: {
      defaultValue: { summary: 'md' },
    },
    control: {
      type: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  variant: {
    name: 'VARIANT',
    table: {
      defaultValue: { summary: 'primary' },
    },
    control: {
      type: 'inline-radio',
      options: ['primary', 'secondary'],
    },
  },
}

export const OutlinePrimary = Template.bind({})

OutlinePrimary.args = {
  intent: 'outline',
  variant: 'primary',
  size: 'md',
  disabled: false,
}

OutlinePrimary.argTypes = {
  disabled: {
    name: 'DISABLED',
    control: {
      type: 'boolean',
    },
  },
  children: {
    // @ts-ignore
    type: { required: true },
    name: 'CHILDREN',
  },
  intent: {
    name: 'INTENT',
    description: 'BUTTON TYPE',
    table: {
      defaultValue: { summary: 'filled' },
    },
    control: {
      type: 'inline-radio',
      options: ['filled', 'outline'],
    },
  },
  size: {
    name: 'SIZE',
    table: {
      defaultValue: { summary: 'md' },
    },
    control: {
      type: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  variant: {
    name: 'VARIANT',
    table: {
      defaultValue: { summary: 'primary' },
    },
    control: {
      type: 'inline-radio',
      options: ['primary', 'secondary'],
    },
  },
}

export const OutlineSecondary = Template.bind({})

OutlineSecondary.args = {
  intent: 'outline',
  variant: 'secondary',
  size: 'md',
  disabled: false,
}

OutlineSecondary.argTypes = {
  disabled: {
    name: 'DISABLED',
    control: {
      type: 'boolean',
    },
  },
  children: {
    // @ts-ignore
    type: { required: true },
    name: 'CHILDREN',
  },
  intent: {
    name: 'INTENT',

    description: 'BUTTON TYPE',
    table: {
      defaultValue: { summary: 'filled' },
    },
    control: {
      type: 'inline-radio',
      options: ['filled', 'outline'],
    },
  },
  size: {
    name: 'SIZE',
    table: {
      defaultValue: { summary: 'md' },
    },
    control: {
      type: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  variant: {
    name: 'VARIANT',
    table: {
      defaultValue: { summary: 'primary' },
    },
    control: {
      type: 'inline-radio',
      options: ['primary', 'secondary'],
    },
  },
}

export const WithIconLeft = Template.bind({})

WithIconLeft.args = {
  intent: 'filled',
  variant: 'primary',
  size: 'md',
  disabled: false,
  children: 'ADICIONAR',
  iconLeft: <AddIcon />,
}

WithIconLeft.argTypes = {
  iconLeft: {
    table: { disable: true },
  },
  disabled: {
    name: 'DISABLED',
    control: {
      type: 'boolean',
    },
  },
  children: {
    description: 'CHANGE THE TEXT INSIDE THE BUTTON',
    // @ts-ignore
    type: { required: true },
    name: 'CHILDREN',
  },
  intent: {
    name: 'INTENT',
    description: 'ALTERNATE BETWEEN BUTTON FILLING TYPES',
    table: {
      defaultValue: { summary: 'filled' },
    },
    control: {
      type: 'inline-radio',
      options: ['filled', 'outline'],
    },
  },
  size: {
    name: 'SIZE',
    description: 'ALTERNATE BETWEEN BUTTON SIZES',
    table: {
      defaultValue: { summary: 'md' },
    },
    control: {
      type: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  variant: {
    name: 'VARIANT',
    description: 'ALTERNATE BETWEEN BUTTON COLORS',
    table: {
      defaultValue: { summary: 'primary' },
    },
    control: {
      type: 'inline-radio',
      options: ['primary', 'secondary'],
    },
  },
}

export const WithIconRight = Template.bind({})

WithIconRight.args = {
  intent: 'filled',
  variant: 'primary',
  size: 'md',
  disabled: false,
  children: 'CONFIRMAR',
  iconRight: <CheckIcon />,
}

WithIconRight.argTypes = {
  iconRight: {
    table: { disable: true },
  },
  disabled: {
    name: 'DISABLED',
    control: {
      type: 'boolean',
    },
  },
  children: {
    description: 'CHANGE THE TEXT INSIDE THE BUTTON',
    // @ts-ignore
    type: { required: true },
    name: 'CHILDREN',
  },
  intent: {
    name: 'INTENT',
    description: 'ALTERNATE BETWEEN BUTTON FILLING TYPES',
    table: {
      defaultValue: { summary: 'filled' },
    },
    control: {
      type: 'inline-radio',
      options: ['filled', 'outline'],
    },
  },
  size: {
    name: 'SIZE',
    description: 'ALTERNATE BETWEEN BUTTON SIZES',
    table: {
      defaultValue: { summary: 'md' },
    },
    control: {
      type: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  variant: {
    name: 'VARIANT',
    description: 'ALTERNATE BETWEEN BUTTON COLORS',
    table: {
      defaultValue: { summary: 'primary' },
    },
    control: {
      type: 'inline-radio',
      options: ['primary', 'secondary'],
    },
  },
}

export const OutlineWithIconLeft = Template.bind({})

OutlineWithIconLeft.args = {
  intent: 'outline',
  variant: 'primary',
  size: 'md',
  disabled: false,
  children: 'ADICIONAR',
  iconLeft: <AddIcon />,
}

OutlineWithIconLeft.argTypes = {
  iconLeft: {
    table: { disable: true },
  },
  disabled: {
    name: 'DISABLED',
    control: {
      type: 'boolean',
    },
  },
  children: {
    description: 'CHANGE THE TEXT INSIDE THE BUTTON',
    // @ts-ignore
    type: { required: true },
    name: 'CHILDREN',
  },
  intent: {
    name: 'INTENT',
    description: 'ALTERNATE BETWEEN BUTTON FILLING TYPES',
    table: {
      defaultValue: { summary: 'filled' },
    },
    control: {
      type: 'inline-radio',
      options: ['filled', 'outline'],
    },
  },
  size: {
    name: 'SIZE',
    description: 'ALTERNATE BETWEEN BUTTON SIZES',
    table: {
      defaultValue: { summary: 'md' },
    },
    control: {
      type: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  variant: {
    name: 'VARIANT',
    description: 'ALTERNATE BETWEEN BUTTON COLORS',
    table: {
      defaultValue: { summary: 'primary' },
    },
    control: {
      type: 'inline-radio',
      options: ['primary', 'secondary'],
    },
  },
}

export const OutlineWithIconRight = Template.bind({})

OutlineWithIconRight.args = {
  intent: 'outline',
  variant: 'primary',
  size: 'md',
  disabled: false,
  children: 'CONFIRMAR',
  iconRight: <CheckIcon />,
}

OutlineWithIconRight.argTypes = {
  iconRight: {
    table: { disable: true },
  },
  disabled: {
    name: 'DISABLED',
    control: {
      type: 'boolean',
    },
  },
  children: {
    description: 'CHANGE THE TEXT INSIDE THE BUTTON',
    // @ts-ignore
    type: { required: true },
    name: 'CHILDREN',
  },
  intent: {
    name: 'INTENT',
    description: 'ALTERNATE BETWEEN BUTTON FILLING TYPES',
    table: {
      defaultValue: { summary: 'filled' },
    },
    control: {
      type: 'inline-radio',
      options: ['filled', 'outline'],
    },
  },
  size: {
    name: 'SIZE',
    description: 'ALTERNATE BETWEEN BUTTON SIZES',
    table: {
      defaultValue: { summary: 'md' },
    },
    control: {
      type: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  variant: {
    name: 'VARIANT',
    description: 'ALTERNATE BETWEEN BUTTON COLORS',
    table: {
      defaultValue: { summary: 'primary' },
    },
    control: {
      type: 'inline-radio',
      options: ['primary', 'secondary'],
    },
  },
}

export const Disabled = Template.bind({})

Disabled.args = {
  disabled: true,
}

Disabled.argTypes = {
  children: {
    // @ts-ignore
    type: { required: true },
    name: 'CHILDREN',
  },
  disabled: {
    name: 'DISABLED',
    control: {
      type: 'boolean',
    },
  },
}

export const DisabledOutline = Template.bind({})

DisabledOutline.args = {
  intent: 'outline',
  disabled: true,
}

DisabledOutline.argTypes = {
  children: {
    // @ts-ignore
    type: { required: true },
    name: 'CHILDREN',
  },
  disabled: {
    name: 'DISABLED',
    control: {
      type: 'boolean',
    },
  },
}

export const DisabledWithIcon = Template.bind({})

DisabledWithIcon.args = {
  intent: 'filled',
  variant: 'primary',
  size: 'md',
  disabled: true,
  children: 'ADICIONAR',
  iconLeft: <AddIcon />,
}

DisabledWithIcon.argTypes = {
  iconLeft: {
    table: { disable: true },
  },
  disabled: {
    name: 'DISABLED',
    control: {
      type: 'boolean',
    },
  },
  children: {
    description: 'CHANGE THE TEXT INSIDE THE BUTTON',
    // @ts-ignore
    type: { required: true },
    name: 'CHILDREN',
  },
  intent: {
    name: 'INTENT',
    description: 'ALTERNATE BETWEEN BUTTON FILLING TYPES',
    table: {
      defaultValue: { summary: 'filled' },
    },
    control: {
      type: 'inline-radio',
      options: ['filled', 'outline'],
    },
  },
  size: {
    name: 'SIZE',
    description: 'ALTERNATE BETWEEN BUTTON SIZES',
    table: {
      defaultValue: { summary: 'md' },
    },
    control: {
      type: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  variant: {
    name: 'VARIANT',
    description: 'ALTERNATE BETWEEN BUTTON COLORS',
    table: {
      defaultValue: { summary: 'primary' },
    },
    control: {
      type: 'inline-radio',
      options: ['primary', 'secondary'],
    },
  },
}

export const DisabledOutlineWithIcon = Template.bind({})

DisabledOutlineWithIcon.args = {
  intent: 'outline',
  variant: 'primary',
  size: 'md',
  disabled: true,
  children: 'ADICIONAR',
  iconLeft: <AddIcon />,
}

DisabledOutlineWithIcon.argTypes = {
  iconLeft: {
    table: { disable: true },
  },
  disabled: {
    name: 'DISABLED',
    control: {
      type: 'boolean',
    },
  },
  children: {
    description: 'CHANGE THE TEXT INSIDE THE BUTTON',
    // @ts-ignore
    type: { required: true },
    name: 'CHILDREN',
  },
  intent: {
    name: 'INTENT',
    description: 'ALTERNATE BETWEEN BUTTON FILLING TYPES',
    table: {
      defaultValue: { summary: 'filled' },
    },
    control: {
      type: 'inline-radio',
      options: ['filled', 'outline'],
    },
  },
  size: {
    name: 'SIZE',
    description: 'ALTERNATE BETWEEN BUTTON SIZES',
    table: {
      defaultValue: { summary: 'md' },
    },
    control: {
      type: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
  variant: {
    name: 'VARIANT',
    description: 'ALTERNATE BETWEEN BUTTON COLORS',
    table: {
      defaultValue: { summary: 'primary' },
    },
    control: {
      type: 'inline-radio',
      options: ['primary', 'secondary'],
    },
  },
}
