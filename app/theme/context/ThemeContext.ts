import { createContext } from 'react'

import type { ThemeContextType } from './ThemeContext.types'

export const themeContext = createContext<ThemeContextType | null>(null)
