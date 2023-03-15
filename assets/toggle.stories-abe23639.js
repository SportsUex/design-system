var s=Object.defineProperty;var r=(l,d)=>s(l,"name",{value:d,configurable:!0});import{a,j as e,F as m}from"./jsx-runtime-c71db4a0.js";import{T as o,a as n}from"./index-37f27b55.js";import{R as i}from"./index-7639abd9.js";import"./index-2945c131.js";import"./iframe-da7242cf.js";const f={parameters:{storySource:{source:`import { ToggleItem, ToggleRoot } from '@sportsuex/react'
import { ComponentStory, Meta } from '@storybook/react'
import React from 'react'

export default {
  title: 'Forms/Toggle',
  component: ToggleRoot,
  args: {
    type: 'multiple',
  },
} as Meta<typeof ToggleRoot>

const Template: ComponentStory<typeof ToggleRoot> = (args) => (
  <ToggleRoot {...args} />
)
export const Single = Template.bind({})
Single.args = {
  type: 'single',
  defaultChecked: true,
  defaultValue: 'CPF',
  children: (
    <React.Fragment key={'Only in StoryBook'}>
      <ToggleItem value="CPF" aria-label="CPF">
        CPF
      </ToggleItem>
      <ToggleItem value="CNPJ" aria-label="CNPJ">
        CNPJ
      </ToggleItem>
    </React.Fragment>
  ),
}

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
    // @ts-ignore
    type: { required: true },
    description:
      " \`<ToggleItem value=' VALUE ' aria-label=' WHAT THIS REPRESENTS ' > LABE L</ToggleItem>\`",
    table: {
      defaultValue: {
        summary: 'EMPTY',
      },
    },
  },
  defaultValue: {
    name: 'DEFAULT VALUE',
    // @ts-ignore
    type: { required: true },
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
    // @ts-ignore
    type: { required: true },
    description: 'DETERMINES WHICH OPTION WILL START CHECKED',
    table: {
      defaultValue: {
        summary: 'EMPTY',
      },
    },
  },
}

export const Multiple = Template.bind({})
Multiple.args = {
  type: 'multiple',
  defaultChecked: true,
  defaultValue: ['CPF', 'CNPJ'],
  children: (
    <>
      <ToggleItem value="CPF">CPF</ToggleItem>
      <ToggleItem value="RG">RG</ToggleItem>
      <ToggleItem value="CNPJ">CNPJ</ToggleItem>
    </>
  ),
}

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
}

export const Disabled = Template.bind({})

Disabled.args = {
  // @ts-ignore
  'data-disabled': true,
  type: 'single',
  defaultChecked: true,
  defaultValue: 'CPF',
  children: (
    <React.Fragment key={'Only in StoryBook'}>
      <ToggleItem value="CPF" aria-label="CPF">
        CPF
      </ToggleItem>
      <ToggleItem value="CNPJ" aria-label="CNPJ">
        CNPJ
      </ToggleItem>
    </React.Fragment>
  ),
}

Disabled.argTypes = {
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
    // @ts-ignore
    type: { required: true },
    description:
      " \`<ToggleItem value=' VALUE ' aria-label=' WHAT THIS REPRESENTS ' > LABE L</ToggleItem>\`",
    table: {
      defaultValue: {
        summary: 'EMPTY',
      },
    },
  },
  defaultValue: {
    name: 'DEFAULT VALUE',
    // @ts-ignore
    type: { required: true },
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
    // @ts-ignore
    type: { required: true },
    description: 'DETERMINES WHICH OPTION WILL START CHECKED',
    table: {
      defaultValue: {
        summary: 'EMPTY',
      },
    },
  },
}
`,locationsMap:{single:{startLoc:{col:52,line:13},endLoc:{col:1,line:15},startBody:{col:52,line:13},endBody:{col:1,line:15}},multiple:{startLoc:{col:52,line:13},endLoc:{col:1,line:15},startBody:{col:52,line:13},endBody:{col:1,line:15}},disabled:{startLoc:{col:52,line:13},endLoc:{col:1,line:15},startBody:{col:52,line:13},endBody:{col:1,line:15}}}}},title:"Forms/Toggle",component:o,args:{type:"multiple"}},t=r(l=>e(o,{...l}),"Template"),E=t.bind({});E.args={type:"single",defaultChecked:!0,defaultValue:"CPF",children:a(i.Fragment,{children:[e(n,{value:"CPF","aria-label":"CPF",children:"CPF"}),e(n,{value:"CNPJ","aria-label":"CNPJ",children:"CNPJ"})]},"Only in StoryBook")};E.argTypes={type:{name:"TYPE",control:!1,description:"DETERMINES IF IS POSSIBLE TO SELECT MORE THAN ONE OPTION",table:{defaultValue:{summary:"single"}}},children:{name:"CHILDREN",control:!1,type:{required:!0},description:" `<ToggleItem value=' VALUE ' aria-label=' WHAT THIS REPRESENTS ' > LABE L</ToggleItem>`",table:{defaultValue:{summary:"EMPTY"}}},defaultValue:{name:"DEFAULT VALUE",type:{required:!0},control:!1,description:"DETERMINES WHICH OPTION WILL START IN THE VALUE CONTEXT",table:{defaultValue:{summary:"EMPTY"}}},defaultChecked:{name:"DEFAULT CHECKED",control:!1,type:{required:!0},description:"DETERMINES WHICH OPTION WILL START CHECKED",table:{defaultValue:{summary:"EMPTY"}}}};const u=t.bind({});u.args={type:"multiple",defaultChecked:!0,defaultValue:["CPF","CNPJ"],children:a(m,{children:[e(n,{value:"CPF",children:"CPF"}),e(n,{value:"RG",children:"RG"}),e(n,{value:"CNPJ",children:"CNPJ"})]})};u.argTypes={type:{name:"TYPE",control:!1},children:{name:"CHILDREN",control:!1},defaultValue:{name:"DEFAULT VALUE",control:!1},defaultChecked:{name:"DEFAULT CHECKED",control:!1}};const T=t.bind({});T.args={"data-disabled":!0,type:"single",defaultChecked:!0,defaultValue:"CPF",children:a(i.Fragment,{children:[e(n,{value:"CPF","aria-label":"CPF",children:"CPF"}),e(n,{value:"CNPJ","aria-label":"CNPJ",children:"CNPJ"})]},"Only in StoryBook")};T.argTypes={type:{name:"TYPE",control:!1,description:"DETERMINES IF IS POSSIBLE TO SELECT MORE THAN ONE OPTION",table:{defaultValue:{summary:"single"}}},children:{name:"CHILDREN",control:!1,type:{required:!0},description:" `<ToggleItem value=' VALUE ' aria-label=' WHAT THIS REPRESENTS ' > LABE L</ToggleItem>`",table:{defaultValue:{summary:"EMPTY"}}},defaultValue:{name:"DEFAULT VALUE",type:{required:!0},control:!1,description:"DETERMINES WHICH OPTION WILL START IN THE VALUE CONTEXT",table:{defaultValue:{summary:"EMPTY"}}},defaultChecked:{name:"DEFAULT CHECKED",control:!1,type:{required:!0},description:"DETERMINES WHICH OPTION WILL START CHECKED",table:{defaultValue:{summary:"EMPTY"}}}};const y=["Single","Multiple","Disabled"];export{T as Disabled,u as Multiple,E as Single,y as __namedExportsOrder,f as default};
//# sourceMappingURL=toggle.stories-abe23639.js.map
