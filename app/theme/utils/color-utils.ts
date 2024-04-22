import { Colors } from '@/theme'

export const lightColorPalette = (colors: Partial<Colors> = {}): Colors => {
  return {
    ...defaultLightColorPalette,
    ...colors,
  }
}

export const darkColorPalette = (colors: Partial<Colors> = {}): Colors => {
  return {
    ...defaultDarkColorPalette,
    ...colors,
  }
}

export const applyAlpha = (color: string, alpha: number) => {
  const alpha256 = (alpha * 255).toFixed()
  const alphaBase16 = Number(alpha256).toString(16) // we're ensuring this is a number then converting
  const paddedAlpha =
    alphaBase16.length === 1 ? alphaBase16.padStart(1) : alphaBase16
  return color.concat('', paddedAlpha)
}

export const defaultLightColorPalette: Colors = {
  primary: '#000000',
  primaryVariant: '#1C1F23',
  secondary: '#D0AE6C',
  secondaryVariant: '#C09E6C',
  background: '#ffffff',
  surface: '#C2C9D1',
  error: '#F4D3D6',
  onPrimary: '#D0AE6C',
  onSecondary: '#1C1F23',
  onBackground: '#D0AE6C',
  onSurface: '#1C1F23',
  onError: '#DD4A20',
}

export const defaultDarkColorPalette: Colors = {
  primary: '#000000',
  primaryVariant: '#1C1F23',
  secondary: '#D0AE6C',
  secondaryVariant: '#C09E6C',
  background: '#000000',
  surface: '#1C1F23',
  error: '#F4D3D6',
  onPrimary: '#D0AE6C',
  onSecondary: '#1C1F23',
  onBackground: '#D0AE6C',
  onSurface: '#C2C9D1',
  onError: '#DD4A20',
}
