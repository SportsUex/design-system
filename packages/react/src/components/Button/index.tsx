import {ComponentProps} from '@stitches/react';
import {css, styled} from '../../styles';
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
  '&:not(:disabled):hover': {
    cursor: 'pointer',
  },
  '&:disabled': {
    background: '$disabled',
    color: '$disabled_1',
    borderColor: '$disabled',
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
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
    },
  },
  compoundVariants: [
    {
      intent: 'filled',
      variant: 'primary',

      css: {'&:not(:disabled)': {color: '$button', background: '$primary'}},
    },
    {
      intent: 'outline',
      variant: 'primary',

      css: {'&:not(:disabled)': {color: '$primary'}},
    },
    {
      intent: 'outline',
      variant: 'secondary',

      css: {'&:not(:disabled)': {color: '$secondary'}},
    },
    {
      intent: 'filled',
      variant: 'secondary',

      css: {
        '&:not(:disabled)': {
          color: '$button_text_secondary',
          background: '$secondary',
        },
      },
    },
  ],
  defaultVariants: {
    variant: 'primary',
    intent: 'filled',
    size: 'md',
  },
});
export const Button = styled('button', ButtonCSS);
Button.displayName = 'Button';
export interface ButtonProps extends ComponentProps<typeof Button> {}
