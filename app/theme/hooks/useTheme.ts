import { useContext } from 'react'

import { themeContext } from '@/theme'

export const useTheme = () => {
  const contextVariable = useContext(themeContext)

  if (contextVariable === null) {
    throw new Error(
      "Theme cannot be null, please add 'ThemeProvider' to the root component.",
    )
  }

  return contextVariable
}
