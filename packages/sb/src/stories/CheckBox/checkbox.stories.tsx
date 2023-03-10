import { CheckBox, theme } from '@sportsuex/react'
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
