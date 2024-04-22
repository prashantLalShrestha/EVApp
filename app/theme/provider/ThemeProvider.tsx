import React, { memo, useEffect, useMemo, useState } from 'react'
import { StatusBar, StatusBarStyle, useColorScheme } from 'react-native'

import {
  Theme,
  themeContext as ThemeContext,
  ThemeName,
  createTheme,
} from '@/theme'

import type { ThemeProviderProps } from './ThemeProvider.types'

const ThemeProviderComponent = ({
  themeName: _providedThemeName,
  theme = createTheme(),
  children,
}: ThemeProviderProps) => {
  const colorScheme = useColorScheme()
  const systemTheme: ThemeName = colorScheme === 'dark' ? 'dark' : 'light'
  const [themeName, setThemeName] = useState<ThemeName>(
    _providedThemeName ?? systemTheme,
  )
  const [barStyle, setBarStyle] = useState<StatusBarStyle>(
    themeName === 'dark' ? 'light-content' : 'dark-content',
  )

  const lightTheme: Theme = useMemo(
    () => ({
      borderRaduis: theme.borderRaduis,
      colors: theme.lightColorPalette,
      sizings: theme.sizings,
      typography: theme.typography,
    }),
    [theme],
  )

  const darkTheme: Theme = useMemo(
    () => ({
      borderRaduis: theme.borderRaduis,
      colors: theme.darkColorPalette,
      sizings: theme.sizings,
      typography: theme.typography,
    }),
    [theme],
  )

  const themeValue = useMemo(
    () => ({
      theme: themeName === 'dark' ? darkTheme : lightTheme,
      setTheme: setThemeName,
      setBarStyle,
    }),
    [darkTheme, lightTheme, themeName],
  )

  useEffect(() => {
    setBarStyle(themeName === 'dark' ? 'light-content' : 'dark-content')
  }, [themeName])

  useEffect(() => {
    _providedThemeName && setThemeName(_providedThemeName)
  }, [_providedThemeName])

  return (
    <ThemeContext.Provider value={themeValue}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor="transparent"
        translucent
        animated={true}
      />
      {children}
    </ThemeContext.Provider>
  )
}

export const ThemeProvider = memo(ThemeProviderComponent)
