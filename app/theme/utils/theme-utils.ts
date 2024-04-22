import { StyleSheet } from 'react-native'

import { Theme, ThemeType } from '@/theme'

import {
  defaultLightColorPalette,
  defaultDarkColorPalette,
} from './color-utils'
import { createTypography } from './typography-utils'
import { defaultBorderRadius } from './borderRadius-utils'
import { defaultSizings } from './sizings-utils'

export const createThemedStyles =
  <T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>>(
    styles: (
      theme: Theme,
      ...args: any[]
    ) => StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
  ) =>
  (theme: Theme, ...args: any[]) =>
    styles(theme, ...args)

export const createTheme = (theme: Partial<ThemeType> = {}): ThemeType => {
  return {
    ...defaultTheme,
    ...theme,
  }
}

export const defaultTheme: ThemeType = {
  borderRaduis: defaultBorderRadius,
  lightColorPalette: defaultLightColorPalette,
  darkColorPalette: defaultDarkColorPalette,
  sizings: defaultSizings,
  typography: createTypography('Roboto'),
}
