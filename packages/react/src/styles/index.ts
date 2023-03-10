import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lightModeColors,
  radii,
  shadows,
  space,
} from '@sportsuex/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  css,
  globalCss,
  getCssText,
  theme,
  createTheme,
  config,
  styled,
  keyframes,
} = createStitches({
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    radii,
    shadows,
    space,
  },
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
})

export const lightMode = createTheme({
  colors: lightModeColors,
  fonts,
  fontSizes,
  fontWeights,
  radii,
  shadows,
  space,
})
