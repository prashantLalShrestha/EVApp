import React, { memo, useEffect, useMemo, useState } from 'react'
import { StatusBar, StatusBarStyle, useColorScheme } from 'react-native'

import {
  themeContext as ThemeContext,
  ThemeName,
  createTheme,
  defaultDarkColorPalette,
  defaultLightColorPalette,
} from '@/theme'

import type { ThemeProviderProps } from './ThemeProvider.types'

const ThemeProviderComponent = ({
  themeName: _providedThemeName,
  lightTheme = createTheme({ colors: defaultLightColorPalette }),
  darkTheme = createTheme({ colors: defaultDarkColorPalette }),
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
