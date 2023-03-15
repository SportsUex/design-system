var c=Object.defineProperty;var n=(e,d)=>c(e,"name",{value:d,configurable:!0});import{j as t,a as m}from"./jsx-runtime-c71db4a0.js";import{S as a,t as p}from"./index-37f27b55.js";import"./index-7639abd9.js";import"./iframe-da7242cf.js";import"./index-2945c131.js";const C={parameters:{storySource:{source:`import { Switch, SwitchProps, theme } from '@sportsuex/react'
import { ComponentStory, Meta } from '@storybook/react'

export default {
  title: 'Forms/Switch',
  component: Switch,
} as Meta<SwitchProps>

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />

const TemplateWithLabel: ComponentStory<typeof Switch> = (args) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
    <Switch {...args} id="teste" />
    <label
      style={{ color: theme.colors.button_text_secondary.toString() }}
      htmlFor="teste"
    >
      Accept terms and conditions
    </label>
  </div>
)

export const Checked = Template.bind({})
Checked.args = {
  defaultChecked: true,
}

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
    table: { defaultValue: { summary: 'normal' } },
    control: {
      type: 'inline-radio',
      options: ['sm', 'normal'],
    },
  },
}

export const Unchecked = Template.bind({})
Unchecked.args = {
  defaultChecked: false,
}

Unchecked.argTypes = {
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
    table: { defaultValue: { summary: 'normal' } },
    control: {
      type: 'inline-radio',
      options: ['sm', 'normal'],
    },
  },
}

export const WithLabel = TemplateWithLabel.bind({})
WithLabel.args = {
  defaultChecked: true,
}

WithLabel.argTypes = {
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
    table: { defaultValue: { summary: 'normal' } },
    control: {
      type: 'inline-radio',
      options: ['sm', 'normal'],
    },
  },
}

export const Disabled = Template.bind({})
Disabled.args = {
  defaultChecked: false,
  disabled: true,
}

Disabled.argTypes = {
  defaultChecked: {
    table: {
      disable: true,
    },
  },
  disabled: { name: 'DISABLED' },
  size: {
    name: 'SIZE',
    type: 'boolean',
    defaultValue: 'normal',
    description: 'SWITCH BETWEEN SIZES',
    table: { defaultValue: { summary: 'normal' } },
    control: {
      type: 'inline-radio',
      options: ['sm', 'normal'],
    },
  },
}
`,locationsMap:{checked:{startLoc:{col:48,line:9},endLoc:{col:78,line:9},startBody:{col:48,line:9},endBody:{col:78,line:9}},unchecked:{startLoc:{col:48,line:9},endLoc:{col:78,line:9},startBody:{col:48,line:9},endBody:{col:78,line:9}},"with-label":{startLoc:{col:57,line:11},endLoc:{col:1,line:21},startBody:{col:57,line:11},endBody:{col:1,line:21}},disabled:{startLoc:{col:48,line:9},endLoc:{col:78,line:9},startBody:{col:48,line:9},endBody:{col:78,line:9}}}}},title:"Forms/Switch",component:a},l=n(e=>t(a,{...e}),"Template"),u=n(e=>m("div",{style:{display:"flex",alignItems:"center",gap:".5rem"},children:[t(a,{...e,id:"teste"}),t("label",{style:{color:p.colors.button_text_secondary.toString()},htmlFor:"teste",children:"Accept terms and conditions"})]}),"TemplateWithLabel"),o=l.bind({});o.args={defaultChecked:!0};o.argTypes={defaultChecked:{table:{disable:!0}},size:{name:"SIZE",type:"boolean",defaultValue:"normal",description:"SWITCH BETWEEN SIZES",table:{defaultValue:{summary:"normal"}},control:{type:"inline-radio",options:["sm","normal"]}}};const r=l.bind({});r.args={defaultChecked:!1};r.argTypes={defaultChecked:{table:{disable:!0}},size:{name:"SIZE",type:"boolean",defaultValue:"normal",description:"SWITCH BETWEEN SIZES",table:{defaultValue:{summary:"normal"}},control:{type:"inline-radio",options:["sm","normal"]}}};const s=u.bind({});s.args={defaultChecked:!0};s.argTypes={defaultChecked:{table:{disable:!0}},size:{name:"SIZE",type:"boolean",defaultValue:"normal",description:"SWITCH BETWEEN SIZES",table:{defaultValue:{summary:"normal"}},control:{type:"inline-radio",options:["sm","normal"]}}};const i=l.bind({});i.args={defaultChecked:!1,disabled:!0};i.argTypes={defaultChecked:{table:{disable:!0}},disabled:{name:"DISABLED"},size:{name:"SIZE",type:"boolean",defaultValue:"normal",description:"SWITCH BETWEEN SIZES",table:{defaultValue:{summary:"normal"}},control:{type:"inline-radio",options:["sm","normal"]}}};const T=["Checked","Unchecked","WithLabel","Disabled"];export{o as Checked,i as Disabled,r as Unchecked,s as WithLabel,T as __namedExportsOrder,C as default};
//# sourceMappingURL=switch.stories-3bfd65da.js.map
