module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {},
  },
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        root: './',
        alias: {
          '^@/(.+)': ([, name]) => `./app/${name}`,
        },
      },
    ],
  ],
}
