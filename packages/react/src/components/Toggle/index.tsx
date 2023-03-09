import * as ToggleGroup from '@radix-ui/react-toggle-group';
import {css} from '../../styles';

export const ToggleRootCSS = css({
  borderRadius: '$basic',
  boxSizing: 'border-box',
  border: '2px',
  borderStyle: 'solid',
  borderColor: '$primary',
  width: '21.688rem',
  height: '3rem',
  display: 'flex',
  justifyContent: 'center',
  ':not([data-state="on"])': {
    background: 'transparent',
    color: '$disabled',
    appearance: 'none',
    borderStyle: 'none',
    transition: '.15s ease-in-out',
    '&:hover': {
      background: '$button_bg',
      color: '$white',
    },
  },
  '& > [data-state="on"]': {
    color: '$button',
    appearance: 'none',
    borderStyle: 'none',
    background: '$primary',
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
});
export const ToggleRoot = ToggleGroup.Root;
ToggleRoot.defaultProps = {
  type: 'single',
  defaultChecked: true,
  className: ToggleRootCSS(),
};

ToggleRoot.displayName = 'ToggleRoot';
export interface ToggleRootProps extends ToggleGroup.ToggleGroupMultipleProps {}

export const ToggleItemCSS = css({
  width: '100%',
});
export const ToggleItem = ToggleGroup.Item;

ToggleItem.defaultProps = {
  className: ToggleItemCSS(),
};

ToggleItem.displayName = 'ToggleItem';

export interface ToggleRootProps extends ToggleGroup.ToggleGroupMultipleProps {}
