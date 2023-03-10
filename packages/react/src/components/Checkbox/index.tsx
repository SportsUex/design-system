import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { ComponentProps } from '@stitches/react'
import { css } from '../../styles'

export const CheckBoxCSS = css({
  background: 'transparent',
  borderWidth: '2px',
  appearance: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderStyle: 'solid',
  width: '25px',
  height: '25px',
  borderRadius: '4px',
  borderColor: '$disabled_1',
  ':first-child': {
    width: '25px',
    height: '25px',
    color: '$button',
  },
  '&[data-state="checked"]': {
    background: '$primary',
    borderColor: '$primary',
    width: '25px',
    height: '25px',
  },
  '&:hover': {
    cursor: 'pointer',
  },
  '&:disabled': {
    '&[data-state="checked"]': {
      background: '$disabled_1',
      borderColor: '$disabled_1',
      width: '25px',
      height: '25px',
    },
    '&:hover': {
      cursor: 'not-allowed',
    },
  },

  // compoundVariants: [
  //   {
  //     disabled: true,
  //     css: {
  //       '&[data-state="checked"]': {
  //         background: '$disabled_1',
  //         borderColor: '$disabled_1',
  //         width: '25px',
  //         height: '25px',
  //       },
  //       '&:hover': {
  //         cursor: 'not-allowed',
  //       },
  //     },
  //   },
  //   {
  //     disabled: false,
  //     css: {
  //       '&[data-state="checked"]': {
  //         background: '$primary',
  //         borderColor: '$primary',
  //         width: '25px',
  //         height: '25px',
  //       },
  //       '&:hover': {
  //         cursor: 'pointer',
  //       },
  //     },
  //   },
  // ],
  // variants: {
  //   disabled: {
  //     true: {},
  //     false: {},
  //   },
  // },
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
  disabled: false,
  children: <CheckBoxIndicator />,
}

export interface CheckBoxIndicatorProps
  extends ComponentProps<typeof Checkbox.CheckboxIndicator> {}
