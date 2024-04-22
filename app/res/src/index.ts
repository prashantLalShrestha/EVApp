import { getTxKeyPathObj } from '@/locales'

import en from './translations/en'
import nl from './translations/nl'
import fonts from './fonts'
import { icons, images } from './images'

const R = {
  fonts,
  icons,
  images,
  strings: getTxKeyPathObj(en),
}

export const translations = { en, nl }

export default R
export { default as AppTheme } from './themes'
