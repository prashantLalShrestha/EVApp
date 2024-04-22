import { StyleSheet } from 'react-native'

import { Theme } from '@/theme'

import { defaultLightColorPalette } from './color-utils'
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

export const createTheme = (theme: Partial<Theme> = {}): Theme => {
  return {
    ...defaultTheme,
    ...theme,
  }
}

export const defaultTheme: Theme = {
  borderRaduis: defaultBorderRadius,
  colors: defaultLightColorPalette,
  sizings: defaultSizings,
  typography: createTypography('Roboto'),
}
