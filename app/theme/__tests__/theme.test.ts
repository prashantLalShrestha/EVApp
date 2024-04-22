import { act, renderHook } from '@testing-library/react-hooks'

import { useTheme } from '@/theme/hooks'
import { ThemeProvider } from '@/theme/provider'
import {
  defaultDarkColorPalette,
  defaultLightColorPalette,
} from '@/theme/utils'

describe('useTheme hook', () => {
  test('Default theme should be light ', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })

    expect(result.current.theme.colors).toBe(defaultLightColorPalette)
  })

  test('Changing Theme ', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider,
    })

    act(() => result.current.setTheme('dark'))

    expect(result.current.theme.colors).toBe(defaultDarkColorPalette)
  })
})
