import * as Sw from '@radix-ui/react-switch';
import {ComponentProps} from '@stitches/react';
import {styled} from '../../styles';

export const SwitchRoot = styled(Sw.Root, {
  all: 'unset',
  backgroundColor: '$disabled',
  borderRadius: '9999px',
  position: 'relative',
  '&:hover': {cursor: 'pointer'},
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&[data-state="checked"]': {backgroundColor: '$primary'},

  variants: {
    size: {
      sm: {
        width: '2rem',
        height: '1.25rem',
        ':first-child': {
          width: '1.1rem',
          height: '1.1rem',
          willChange: 'transform',
          transform: 'translateX(.09rem)',
          '&[data-state="checked"]': {
            transform: 'translateX(.75rem)',
            background: '$bg',
          },
        },
      },
      normal: {
        width: '3rem',
        height: '1.5rem',
        ':first-child': {
          width: '1.25rem',
          height: '1.25rem',
          willChange: 'transform',
          transform: 'translateX(.16rem)',
          '&[data-state="checked"]': {
            transform: 'translateX(1.56rem)',
            background: '$bg',
          },
        },
      },
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

export const SwitchThumb = styled(Sw.Thumb, {
  display: 'block',
  backgroundColor: '$gray',
  borderRadius: '9999px',
  transition: 'transform 100ms',
});

export const Switch = SwitchRoot;
Switch.displayName = 'Switch';
Switch.defaultProps = {
  size: 'normal',
  children: <SwitchThumb />,
  defaultChecked: false,
};

export interface SwitchProps extends ComponentProps<typeof Switch> {}
