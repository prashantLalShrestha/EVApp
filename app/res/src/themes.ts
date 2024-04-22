import { createTheme, createTypography } from '@/theme'

import fonts from './fonts'

const AppTheme = () => {
  return createTheme({
    typography: createTypography(fonts.poppins.name),
  })
}

export default AppTheme
