import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { ComponentProps } from '@stitches/react'
import { css } from '../../styles'

export const CheckBoxCSS = css({
  background: 'transparent',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderColor: '$disabled_1',
  appearance: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '25px',
  height: '25px',
  borderRadius: '4px',
  '&:hover': {
    cursor: 'pointer',
  },
  '&[data-state="checked"]': {
    background: '$primary',
    borderColor: '$primary',
    width: '25px',
    height: '25px',
  },
  ':first-child': {
    width: '25px',
    height: '25px',
    color: '$button',
  },
})

export interface CheckBoxProps extends ComponentProps<typeof Checkbox.Root> {}

export const CheckBoxIndicator = () => {
  return (
    <Checkbox.CheckboxIndicator>
      <CheckIcon />
    </Checkbox.CheckboxIndicator>
  )
}

export const CheckBox = Checkbox.Root

CheckBox.defaultProps = {
  className: CheckBoxCSS(),
  defaultChecked: false,
  children: <CheckBoxIndicator />,
}

export interface CheckBoxIndicatorProps
  extends ComponentProps<typeof Checkbox.CheckboxIndicator> {}
