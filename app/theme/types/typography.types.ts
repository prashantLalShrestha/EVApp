import { TextStyle } from 'react-native'

export interface Typography {
  h1: TextStyle
  h2: TextStyle
  h3: TextStyle
  h4: TextStyle
  h5: TextStyle
  h6: TextStyle
  subtitle1: TextStyle
  subtitle2: TextStyle
  body1: TextStyle
  body2: TextStyle
  button: TextStyle
  caption: TextStyle
  overline: TextStyle
}

export interface TypographyTextStyle extends TextStyle {
  weight: FontWeight
}

export type FontWeight =
  | 'black'
  | 'bold'
  | 'extra_bold'
  | 'extra_light'
  | 'light'
  | 'medium'
  | 'normal'
  | 'semibold'
  | 'thin'
