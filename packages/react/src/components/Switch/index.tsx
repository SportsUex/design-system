import * as Sw from '@radix-ui/react-switch'
import { ComponentProps } from '@stitches/react'
import { styled } from '../../styles'

export const SwitchRoot = styled(Sw.Root, {
  all: 'unset',
  borderRadius: '9999px',
  position: 'relative',

  variants: {
    disabled: {
      true: {
        background: '$disabled',
        '&:hover': { cursor: 'not-allowed' },
        ':first-child': {
          background: '$gray',
        },
      },
      false: {
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
        '&[data-state="checked"]': { backgroundColor: '$primary' },
        backgroundColor: '$button_text_secondary',
        '&:hover': { cursor: 'pointer' },

        ':first-child': { background: '$bg' },
      },
    },
    size: {
      sm: {
        width: '2rem',
        height: '1.25rem',
        ':first-child': {
          width: '1.1rem',
          height: '1.1rem',
        },
      },
      normal: {
        width: '3rem',
        height: '1.5rem',
        ':first-child': {
          width: '1.25rem',
          height: '1.25rem',
        },
      },
    },
  },
  compoundVariants: [
    {
      disabled: true,
      size: 'normal',
      css: {
        ':first-child': {
          willChange: 'transform',
          transform: 'translateX(.16rem)',
          '&[data-state="checked"]': {
            transform: 'translateX(1.56rem)',
          },
        },
      },
    },
    {
      disabled: false,
      size: 'normal',
      css: {
        ':first-child': {
          willChange: 'transform',
          transform: 'translateX(.16rem)',
          '&[data-state="checked"]': {
            transform: 'translateX(1.56rem)',
          },
        },
      },
    },
    {
      disabled: false,
      size: 'sm',
      css: {
        ':first-child': {
          transform: 'translateX(.09rem) ',
          '&[data-state="checked"]': {
            transform: 'translateX(.8rem)',
          },
        },
      },
    },
    {
      disabled: true,
      size: 'sm',
      css: {
        ':first-child': {
          transform: 'translateX(.09rem) ',
          '&[data-state="checked"]': {
            transform: 'translateX(.8rem)',
          },
        },
      },
    },
  ],
  defaultVariants: {
    size: 'normal',
    disabled: 'false',
  },
})

export const SwitchThumb = styled(Sw.Thumb, {
  display: 'block',
  borderRadius: '9999px',
  transition: 'transform 100ms',
})

SwitchThumb.displayName = 'SwitchThumb'

export const Switch = SwitchRoot
Switch.displayName = 'Switch'
Switch.defaultProps = {
  size: 'normal',
  children: <SwitchThumb />,
  defaultChecked: false,
}

export interface SwitchProps extends ComponentProps<typeof Switch> {}
