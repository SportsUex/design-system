import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { css } from '../../styles'

export const ToggleRootCSS = css({
  borderRadius: '$basic',
  boxSizing: 'border-box',
  border: '2px',
  borderStyle: 'solid',
  width: '21.688rem',
  height: '3rem',
  display: 'flex',
  justifyContent: 'center',
  '&:not([data-disabled="true"])': {
    borderColor: '$primary',
  },
  '&[data-disabled="true"]': {
    borderColor: '$disabled',
    'button[data-state="on"]': {
      background: '$disabled',
    },
    'button[data-state="off"]:hover': {
      background: 'transparent',
      color: '$disabled',
    },
    'button:hover': {
      cursor: 'not-allowed',
    },
  },
  ':not([data-state="on"])': {
    background: 'transparent',
    color: '$disabled',
    appearance: 'none',
    borderStyle: 'none',
    transition: '.15s ease-in-out',
    '&:hover': {
      background: '$button_bg',
      color: '$white',
      cursor: 'pointer',
    },
  },
  '& > [data-state="on"]': {
    color: '$button',
    appearance: 'none',
    borderStyle: 'none',
    background: '$primary',
    cursor: 'pointer',
  },
  ':first-child': {
    borderRadius: '5px',
    borderStartEndRadius: '0px',
    borderEndEndRadius: '0px',
  },
  ':last-child': {
    borderRadius: '5px',
    borderStartStartRadius: '0px',
    borderEndStartRadius: '0px',
  },
})
export interface ToggleRootProps extends ToggleGroup.ToggleGroupMultipleProps {
  'data-disabled': boolean
}
export const ToggleRoot = ToggleGroup.Root
ToggleRoot.defaultProps = {
  // @ts-ignore
  'data-disabled': false,
  type: 'single',
  defaultChecked: true,
  className: ToggleRootCSS(),
}

ToggleRoot.displayName = 'ToggleRoot'

export const ToggleItemCSS = css({
  width: '100%',
  '&[data-disabled]': {
    background: '$alert',
  },
})
export const ToggleItem = ToggleGroup.Item

ToggleItem.defaultProps = {
  className: ToggleItemCSS(),
}

ToggleItem.displayName = 'ToggleItem'

export interface ToggleItemProps extends ToggleGroup.ToggleGroupItemProps {}
