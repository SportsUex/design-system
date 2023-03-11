import { ComponentProps } from '@stitches/react'
import React from 'react'
import { css, styled } from '../../styles'
export const ButtonCSS = css({
  fontFamily: '$raj',
  paddingTop: '0.813rem',
  paddingBottom: '0.813rem',
  paddingRight: '1.25rem',
  paddingLeft: '1.25rem',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderRadius: '0.5rem',
  fontWeight: '$600',
  transition: '.1s ease-in-out',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',
  '& > svg > path': {
    transition: '.1s ease-in-out',
  },
  // '& > img , span': {
  //   background: 'red',
  // },
  '&:not(:disabled):hover': {
    cursor: 'pointer',
  },

  '&:disabled:hover': {
    cursor: 'no-drop',
  },
  variants: {
    variant: {
      primary: {
        '&:not(:disabled)': {
          borderColor: '$primary',
        },

        '&:not(:disabled):hover': {
          background: '$button_bg',
          borderColor: '$primary',
          color: '$light_bg',
          '& > svg > path': {
            fill: '$light_bg',
          },
        },
      },
      secondary: {
        '&:not(:disabled)': {
          borderColor: '$secondary',
        },

        '&:not(:disabled):hover': {
          background: '$button_secondary_hover_bg',
          borderColor: '$secondary',
          color: '$light_bg',
        },
      },
    },
    intent: {
      filled: {},
      outline: {
        '&:not(:disabled)': {
          background: '#ffffff00',
          backgroundClip: 'unset',
        },
      },
    },
    size: {
      sm: {
        fontSize: '$sm',
        '&>img': {
          width: '18px',
          height: '18px',
        },
      },
      md: {
        fontSize: '$md',
        '&>img': {
          width: '24px',
          height: '24px',
        },
      },
      lg: {
        fontSize: '$lg',
        '&>img': {
          width: '24px',
          height: '24px',
        },
      },
    },
  },
  compoundVariants: [
    {
      intent: 'filled',
      variant: 'primary',

      css: {
        '&:disabled': {
          background: '$disabled',
          color: '$disabled_1',
          borderColor: '$disabled',
        },
        '&:disabled > svg > path': {
          fill: '$disabled_1',
        },
        '&:not(:disabled)': {
          color: '$button',
          background: '$primary',
          '& > svg > path': { fill: '$button' },
        },
      },
    },
    {
      intent: 'outline',
      variant: 'primary',

      css: {
        '&:disabled': {
          background: 'transparent',
          color: '$disabled_1',
          borderColor: '$disabled',
          '& > svg > path': { fill: '$disabled_1' },
        },
        '&:not(:disabled)': {
          color: '$primary',
          '& > svg > path': { fill: '$primary' },
        },
      },
    },
    {
      intent: 'outline',
      variant: 'secondary',

      css: {
        '&:disabled': {
          background: 'transparent',
          color: '$disabled_1',
          borderColor: '$disabled',
          '& > svg > path': { fill: '$disabled_1' },
        },
        '&:not(:disabled)': {
          color: '$secondary',
          '& > svg > path': { fill: '$secondary' },
          '&:hover': {
            '& > svg > path': {
              fill: '$light_bg',
            },
          },
        },
      },
    },
    {
      intent: 'filled',
      variant: 'secondary',

      css: {
        '&:disabled': {
          background: '$disabled',
          color: '$disabled_1',
          borderColor: '$disabled',
        },
        '&:disabled > svg > path': {
          fill: '$disabled_1',
        },
        '&:not(:disabled)': {
          color: '$button_text_secondary',
          background: '$secondary',
          '& > svg > path': {
            fill: '$button_text_secondary',
          },
          '&:hover': {
            '& > svg > path': {
              fill: '$light_bg',
            },
          },
        },
      },
    },
  ],
  defaultVariants: {
    variant: 'primary',
    intent: 'filled',
    size: 'md',
  },
})
export const ButtonStyled = styled('button', ButtonCSS)
ButtonStyled.displayName = 'Button'

export interface ButtonProps extends ComponentProps<typeof ButtonStyled> {
  iconLeft: React.ReactNode
  iconRight: React.ReactNode
}

export const Button = (args: ButtonProps) => {
  return (
    <ButtonStyled {...args}>
      {args.iconLeft}
      <span>{args.children}</span>
      {args.iconRight}
    </ButtonStyled>
  )
}
