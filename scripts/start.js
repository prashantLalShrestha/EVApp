const kexec = require('@jcoreio/kexec')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const { ENV_VARS } = require('./constants')

const argv = yargs(hideBin(process.argv))
  .usage('Usage: yarn start [options]')
  .example('yarn start -m', 'launch the app with mock server worker.')

  .alias('m', 'mock')
  .describe('m', 'Use mock server')

  .version(false).argv

const start = async () => {
  const devVar = argv.m ? `${ENV_VARS.IS_DEVELOPMENT}=${true}` : ''

  return kexec(`${devVar} react-native start`)
}

start()
