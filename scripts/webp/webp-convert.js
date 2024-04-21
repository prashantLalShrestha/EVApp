const { exec } = require('child_process')
const util = require('util')
const { resolve } = require('path')

const execPromise = util.promisify(exec)

const convert = async () => {
  const ROOT_DIR = resolve(__dirname, '../..')
  const path = `${ROOT_DIR}/app/res/assets/images`
  const scriptPath = `${ROOT_DIR}/scripts/webp/webp-converter.sh`

  console.log('[Design] Converting png images to webp started')

  await execPromise(`${scriptPath} ${path}`)

  console.log('[Design] Converting png images to webp completed')
}

convert()
