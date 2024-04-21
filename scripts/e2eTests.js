const kexec = require('@jcoreio/kexec')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
  .usage('Usage: yarn test:e2e [options]')
  .example('yarn test:e2e -f flow', 'test flow.yaml')
  .example('yarn test:e2e ', 'test all files defined in flows folder')

  .alias('f', 'flow')
  .describe('target flow to test')
  .default('f', '').argv

const testE2e = async () => {
  const flowString = argv.f ? `${argv.f}.yaml` : ''

  return kexec(`maestro test __tests__/flows/${flowString}`)
}

testE2e()
