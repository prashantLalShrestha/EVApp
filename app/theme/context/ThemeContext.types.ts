import type { Dispatch, SetStateAction } from 'react'
import type { StatusBarStyle } from 'react-native'

import { Theme, ThemeName } from '@/theme'

export type ThemeContextType = {
  theme: Theme
  setTheme: Dispatch<SetStateAction<ThemeName>>
  setBarStyle: Dispatch<SetStateAction<StatusBarStyle>>
}
