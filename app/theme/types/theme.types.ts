import { BorderRadius } from './borderRadius.types'
import { Colors } from './colors.types'
import { Sizings } from './sizings.types'
import { Typography } from './typography.types'

export interface Theme {
  borderRaduis: BorderRadius
  colors: Colors
  sizings: Sizings
  typography: Typography
}

export interface ThemeType {
  borderRaduis: BorderRadius
  lightColorPalette: Colors
  darkColorPalette: Colors
  sizings: Sizings
  typography: Typography
}

export type ThemeName = 'dark' | 'light'
