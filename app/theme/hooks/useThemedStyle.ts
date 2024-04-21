import { useMemo } from 'react'
import { StyleSheet } from 'react-native'

import { Theme } from '@/theme'

import { useTheme } from './useTheme'

export const useThemedStyles = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
>(
  style: (theme: Theme, ...args: any[]) => T,
  ...args: any[]
) => {
  const { theme } = useTheme()

  const themedStyle = useMemo(() => style(theme, ...args), [theme, args, style])

  return themedStyle
}
