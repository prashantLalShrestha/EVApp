import { TextStyle } from 'react-native'

import { FontWeight, Typography, TypographyTextStyle } from '@/theme'

export const createTextStyle = (
  style: Partial<TypographyTextStyle>,
): TextStyle => {
  const { fontFamily = 'Roboto', weight = 'normal', ...otherStyles } = style
  const newFontFamily = fontName(fontFamily, weight)

  const newStyle = {
    ...otherStyles,
    fontFamily: newFontFamily,
    fontWeight: withWeight(weight),
  }

  return newStyle
}

export function withWeight(weight: FontWeight): TextStyle['fontWeight'] {
  let fontWeight: TextStyle['fontWeight'] = 'normal'
  switch (weight) {
    case 'black':
      fontWeight = '900'
      break
    case 'bold':
      fontWeight = 'bold'
      break
    case 'extra_bold':
      fontWeight = '800'
      break
    case 'extra_light':
      fontWeight = '200'
      break
    case 'light':
      fontWeight = '300'
      break
    case 'medium':
      fontWeight = '500'
      break
    case 'normal':
      fontWeight = 'normal'
      break
    case 'semibold':
      fontWeight = '600'
      break
    case 'thin':
      fontWeight = '100'
      break
  }
  return fontWeight
}

export function fontName(fontFamily: string, weight: FontWeight): string {
  let suffix = ''
  switch (weight) {
    case 'black':
      suffix = '-Black'
      break
    case 'bold':
      suffix = '-Bold'
      break
    case 'extra_bold':
      suffix = '-ExtraBold'
      break
    case 'extra_light':
      suffix = '-ExtraLight'
      break
    case 'light':
      suffix = '-Light'
      break
    case 'medium':
      suffix = '-Medium'
      break
    case 'normal':
      suffix = ''
      break
    case 'semibold':
      suffix = '-SemiBold'
      break
    case 'thin':
      suffix = '-Thin'
      break
  }

  return fontFamily.concat(suffix)
}

export const createTypography = (defaultFontFamily: string): Typography => ({
  h1: createTextStyle({
    fontFamily: defaultFontFamily,
    fontSize: 96,
    weight: 'light',
    letterSpacing: -1.5,
  }),
  h2: createTextStyle({
    fontFamily: defaultFontFamily,
    fontSize: 60,
    weight: 'light',
    letterSpacing: -0.5,
  }),
  h3: createTextStyle({
    fontFamily: defaultFontFamily,
    fontSize: 48,
    weight: 'normal',
    letterSpacing: 0,
  }),
  h4: createTextStyle({
    fontFamily: defaultFontFamily,
    fontSize: 34,
    weight: 'normal',
    letterSpacing: 0.25,
  }),
  h5: createTextStyle({
    fontFamily: defaultFontFamily,
    fontSize: 24,
    weight: 'normal',
    letterSpacing: 0,
  }),
  h6: createTextStyle({
    fontFamily: defaultFontFamily,
    fontSize: 20,
    weight: 'medium',
    letterSpacing: 0.15,
  }),
  subtitle1: createTextStyle({
    fontFamily: defaultFontFamily,
    fontSize: 16,
    weight: 'normal',
    letterSpacing: 0.15,
  }),
  subtitle2: createTextStyle({
    fontFamily: defaultFontFamily,
    fontSize: 14,
    weight: 'medium',
    letterSpacing: 0.1,
  }),
  body1: createTextStyle({
    fontFamily: defaultFontFamily,
    fontSize: 16,
    weight: 'normal',
    letterSpacing: 0.5,
  }),
  body2: createTextStyle({
    fontFamily: defaultFontFamily,
    fontSize: 14,
    weight: 'normal',
    letterSpacing: 0.25,
  }),
  button: createTextStyle({
    fontFamily: defaultFontFamily,
    fontSize: 14,
    weight: 'medium',
    letterSpacing: 1.25,
  }),
  caption: createTextStyle({
    fontFamily: defaultFontFamily,
    fontSize: 12,
    weight: 'normal',
    letterSpacing: 0.4,
  }),
  overline: createTextStyle({
    fontFamily: defaultFontFamily,
    fontSize: 10,
    weight: 'normal',
    letterSpacing: 1.5,
  }),
})
