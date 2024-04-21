import type { ReactNode } from 'react'

import { Theme, ThemeName } from '@/theme'

export interface ThemeProviderProps {
  themeName?: ThemeName
  lightTheme?: Theme
  darkTheme?: Theme
  children: ReactNode
}
