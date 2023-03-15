var h=Object.defineProperty;var t=(e,b)=>h(e,"name",{value:b,configurable:!0});import{j as n,a as p}from"./jsx-runtime-c71db4a0.js";import{C as l,t as k}from"./index-37f27b55.js";import"./index-7639abd9.js";import"./iframe-da7242cf.js";import"./index-2945c131.js";const x={parameters:{storySource:{source:`import { CheckBox, theme } from '@sportsuex/react'
import { ComponentStory, Meta } from '@storybook/react'

export default {
  title: 'Forms/CheckBox',
  component: CheckBox,
} as Meta

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
)

const TemplateWithLabel: ComponentStory<typeof CheckBox> = (args) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
    <CheckBox {...args} id="teste" />
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
  defaultChecked: { table: { disable: true } },
}

export const Unchecked = Template.bind({})
Unchecked.args = {
  defaultChecked: false,
}

Unchecked.argTypes = {
  defaultChecked: { table: { disable: true } },
}

export const WithLabel = TemplateWithLabel.bind({})
WithLabel.args = {
  defaultChecked: true,
}

WithLabel.argTypes = {
  defaultChecked: { table: { disable: true } },
}
export const Disabled = TemplateWithLabel.bind({})
Disabled.args = {
  disabled: true,
}

Disabled.argTypes = {
  defaultChecked: { table: { disable: true } },
  disabled: {
    name: 'DISABLED',
  },
}

export const DisabledChecked = TemplateWithLabel.bind({})
DisabledChecked.args = {
  defaultChecked: true,
  disabled: true,
}

DisabledChecked.argTypes = {
  defaultChecked: { table: { disable: true } },
  disabled: {
    name: 'DISABLED',
  },
}
`,locationsMap:{checked:{startLoc:{col:50,line:9},endLoc:{col:1,line:11},startBody:{col:50,line:9},endBody:{col:1,line:11}},unchecked:{startLoc:{col:50,line:9},endLoc:{col:1,line:11},startBody:{col:50,line:9},endBody:{col:1,line:11}},"with-label":{startLoc:{col:59,line:13},endLoc:{col:1,line:23},startBody:{col:59,line:13},endBody:{col:1,line:23}},disabled:{startLoc:{col:59,line:13},endLoc:{col:1,line:23},startBody:{col:59,line:13},endBody:{col:1,line:23}},"disabled-checked":{startLoc:{col:59,line:13},endLoc:{col:1,line:23},startBody:{col:59,line:13},endBody:{col:1,line:23}}}}},title:"Forms/CheckBox",component:l},d=t(e=>n(l,{...e}),"Template"),a=t(e=>p("div",{style:{display:"flex",alignItems:"center",gap:".5rem"},children:[n(l,{...e,id:"teste"}),n("label",{style:{color:k.colors.button_text_secondary.toString()},htmlFor:"teste",children:"Accept terms and conditions"})]}),"TemplateWithLabel"),o=d.bind({});o.args={defaultChecked:!0};o.argTypes={defaultChecked:{table:{disable:!0}}};const c=d.bind({});c.args={defaultChecked:!1};c.argTypes={defaultChecked:{table:{disable:!0}}};const s=a.bind({});s.args={defaultChecked:!0};s.argTypes={defaultChecked:{table:{disable:!0}}};const r=a.bind({});r.args={disabled:!0};r.argTypes={defaultChecked:{table:{disable:!0}},disabled:{name:"DISABLED"}};const i=a.bind({});i.args={defaultChecked:!0,disabled:!0};i.argTypes={defaultChecked:{table:{disable:!0}},disabled:{name:"DISABLED"}};const L=["Checked","Unchecked","WithLabel","Disabled","DisabledChecked"];export{o as Checked,r as Disabled,i as DisabledChecked,c as Unchecked,s as WithLabel,L as __namedExportsOrder,x as default};
//# sourceMappingURL=checkbox.stories-23fe133b.js.map
