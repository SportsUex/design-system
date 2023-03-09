import {lightMode, theme} from '@sportsuex/react';
import {darkTheme} from './theme.js';
export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    expanded: false,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: darkTheme,
  },
  layout: 'centered',
  multipleThemesStitches: {
    values: [
      {
        name: 'Light',
        theme: lightMode,
      },
      {
        name: 'Dark',
        theme: theme,
      },
    ],
  },
};
