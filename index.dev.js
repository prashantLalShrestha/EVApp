import { AppRegistry } from 'react-native'

import App from './app/App'
import { name as appName } from './app.json'

if (__DEV__) {
  require('react-native-url-polyfill/auto')

  const { native } = require('./app/test/mocks/native')

  native.listen({ onUnhandledRequest: 'bypass' })
}

AppRegistry.registerComponent(appName, () => App)
