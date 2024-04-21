import { StyleSheet } from 'react-native'

import { Theme } from '@/theme'

import { defaultLightColorPalette } from './colorUtils'
import { createTypography } from './typographyUtils'
import { defaultBorderRadius } from './borderRadiusUtils'
import { defaultSizings } from './sizingsUtils'

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
