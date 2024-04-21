/* eslint-disable no-extra-boolean-cast */
const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      { babelConfig: true, tsconfig: 'tsconfig.test.json' },
    ],
    /**
     * `assetTransformer` should be used to transform assets that are not
     * importable outside of bundled js context. Feel free to add more file
     * extensions as needed.
     */
    '\\.svg': '<rootDir>/transformers/assetTransformer.js',
  },
  setupFiles: ['<rootDir>/app/test/setup.ts'],
  setupFilesAfterEnv: ['<rootDir>/app/test/setupTests.ts'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: [
    ...(!!tsjPreset.moduleFileExtensions ? tsjPreset.moduleFileExtensions : []),
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation))',
  ],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/app/**/*.ts'],
  coveragePathIgnorePatterns: ['.styles.ts', '.styles.*.ts', 'index.ts'],
  coverageReporters: ['text-summary', 'lcov'],
  testMatch: [
    '**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
}
