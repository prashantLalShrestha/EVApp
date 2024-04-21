const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')
const defaultMetroConfig = require('metro-config/src/defaults/defaults.js')

const { resolve } = require('path')

const { ENV_VARS } = require('./scripts/constants')

const devExtensions = process.env[ENV_VARS.IS_DEVELOPMENT]
  ? ['dev.js', 'dev.ts', 'dev.tsx']
  : []

const sourceExts = ['svg', ...devExtensions, ...defaultMetroConfig.sourceExts]
const assetExts = defaultMetroConfig.assetExts.filter(ext => ext !== 'svg')

const config = {
  projectRoot: resolve(__dirname),

  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },

  resolver: {
    resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
    sourceExts,
    assetExts,
  },
}

module.exports = mergeConfig(getDefaultConfig(__dirname), config)
