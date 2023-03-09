import {ComponentProps} from '@stitches/react';
import {css, styled} from '../styles';
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
  '&:hover': {
    cursor: 'pointer',
  },
  variants: {
    intent: {
      filled: {
        background: '$primary',
        borderColor: '$primary',
        color: '$button',
        '&:hover': {
          background: '$button_bg',
          borderColor: '$primary',
          color: '$light_bg',
        },
      },
      outline_primary: {
        background: 'transparent',
        borderColor: '$primary',
        color: '$primary',
        '&:hover': {
          background: '$button_bg',
          borderColor: '$primary',
          color: '$button_out_hover',
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
  defaultVariants: {
    intent: 'filled',
    size: 'md',
  },
});
export const Button = styled('button', ButtonCSS);

export interface ButtonProps extends ComponentProps<typeof Button> {}
