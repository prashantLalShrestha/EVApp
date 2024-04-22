import type { ReactNode } from 'react'

import { ThemeName, ThemeType } from '@/theme'

export interface ThemeProviderProps {
  themeName?: ThemeName
  theme?: ThemeType
  children: ReactNode
}
