import {ToggleItem, ToggleRoot} from '@sportsuex/react';
import {ComponentStory, Meta} from '@storybook/react';
import React from 'react';

export default {
  title: 'Forms/Toggle',
  component: ToggleRoot,
  args: {
    type: 'multiple',
  },
} as Meta<typeof ToggleRoot>;

const Template: ComponentStory<typeof ToggleRoot> = args => (
  <ToggleRoot {...args} />
);
export const Single = Template.bind({});
Single.args = {
  type: 'single',
  defaultChecked: true,
  defaultValue: 'CPF',
  children: (
    <React.Fragment key={'Only in StoryBook'}>
      <ToggleItem value='CPF' aria-label='CPF'>
        CPF
      </ToggleItem>
      <ToggleItem value='CNPJ' aria-label='CNPJ'>
        CNPJ
      </ToggleItem>
    </React.Fragment>
  ),
};

Single.argTypes = {
  type: {
    name: 'TYPE',

    control: false,
    description: 'DETERMINES IF IS POSSIBLE TO SELECT MORE THAN ONE OPTION',
    table: {
      defaultValue: {
        summary: 'single',
      },
    },
  },
  children: {
    name: 'CHILDREN',
    control: false,
    //@ts-ignore
    type: {required: true},
    description:
      " `<ToggleItem value=' VALUE ' aria-label=' WHAT THIS REPRESENTS ' > LABE L</ToggleItem>`",
    table: {
      defaultValue: {
        summary: 'EMPTY',
      },
    },
  },
  defaultValue: {
    name: 'DEFAULT VALUE',
    //@ts-ignore
    type: {required: true},
    control: false,
    description: 'DETERMINES WHICH OPTION WILL START IN THE VALUE CONTEXT',
    table: {
      defaultValue: {
        summary: 'EMPTY',
      },
    },
  },
  defaultChecked: {
    name: 'DEFAULT CHECKED',
    control: false,
    //@ts-ignore
    type: {required: true},
    description: 'DETERMINES WHICH OPTION WILL START CHECKED',
    table: {
      defaultValue: {
        summary: 'EMPTY',
      },
    },
  },
};

export const Multiple = Template.bind({});
Multiple.args = {
  type: 'multiple',
  defaultChecked: true,
  defaultValue: ['CPF', 'CNPJ'],
  children: (
    <>
      <ToggleItem value='CPF'>CPF</ToggleItem>
      <ToggleItem value='RG'>RG</ToggleItem>
      <ToggleItem value='CNPJ'>CNPJ</ToggleItem>
    </>
  ),
};

Multiple.argTypes = {
  type: {
    name: 'TYPE',
    control: false,
  },
  children: {
    name: 'CHILDREN',
    control: false,
  },
  defaultValue: {
    name: 'DEFAULT VALUE',
    control: false,
  },
  defaultChecked: {
    name: 'DEFAULT CHECKED',
    control: false,
  },
};
