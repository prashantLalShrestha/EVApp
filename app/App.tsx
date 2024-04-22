import React, { useEffect, useState } from 'react'
import type { FC } from 'react'
import { SafeAreaView, Switch, Text, View } from 'react-native'

import {
  ThemeProvider,
  createThemedStyles,
  useTheme,
  useThemedStyles,
} from './theme'
import { localeSetup, translate } from './locales'
import R, { translations } from './res'
import AppTheme from './res/src/themes'

const AppView: FC = () => {
  const styles = useThemedStyles(stylesCreator)
  const { theme, setTheme } = useTheme()
  const [isEnabled, setIsEnabled] = useState(false)

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
  }

  useEffect(() => {
    setTheme(isEnabled ? 'dark' : 'light')
  }, [isEnabled, setTheme])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>{translate(R.strings.themeMenu.label)}</Text>
        <Switch
          trackColor={{
            false: theme.colors.primaryVariant,
            true: theme.colors.secondaryVariant,
          }}
          thumbColor={isEnabled ? theme.colors.primary : theme.colors.secondary}
          ios_backgroundColor={theme.colors.background}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </SafeAreaView>
  )
}

const App: FC = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function appSetup() {
      await localeSetup(translations, 'en')

      setIsReady(true)
    }

    appSetup()
  }, [])

  return isReady === true ? (
    <ThemeProvider theme={AppTheme()}>
      <AppView />
    </ThemeProvider>
  ) : null
}

export const stylesCreator = createThemedStyles(
  ({ colors, typography, sizings }) => ({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      justifyContent: 'center',
    },
    row: {
      alignContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.surface,
      flexDirection: 'row',
      paddingHorizontal: sizings.size3,
      paddingVertical: sizings.size2,
    },
    label: {
      ...typography.body1,
      color: colors.onSurface,
      flex: 1,
    },
  }),
)

export default App
