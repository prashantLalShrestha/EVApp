const fs = require('fs')
const { resolve } = require('path')

const { convert } = require('./webp-convert.js')

const supportedFormats = ['.png', '.svg', '.jpg', '.webp', '.jpeg']

const ROOT_DIR = resolve(__dirname, '../..')
const resPath = `${ROOT_DIR}/app/res`
const iconsPath = `${resPath}/assets/icons`
const imagesPath = `${resPath}/assets/images`
const filePath = `${resPath}/src/images.ts`

const createImageFile = async () => {
  try {
    // Check if the file exists
    await fs.promises.access(filePath, fs.constants.F_OK)
    console.log('images.ts already exists.')
  } catch (err) {
    // File doesn't exist, create a new file
    console.log(
      `[Design] fonts.ts not found in ${filePath}\n Creating images.ts`,
    )
    try {
      await fs.promises.writeFile(filePath, '')
      console.log('images.ts created successfully!')
    } catch (err2) {
      console.error('Error creating file:', err2)
    }
  }
}

const iconsFileNames = path => {
  const array = fs
    .readdirSync(path)
    .map(file => {
      return {
        name: file.replace('@2x.png', '').replace('@3x.png', ''),
        extension: file.substring(file.lastIndexOf('.'), file.length) || file,
      }
    })
    .filter(({ extension }) => {
      return supportedFormats.includes(extension)
    })

  return Array.from(new Set(array))
}

const generateImages = async () => {
  await convert()
  console.log('Generating images started')
  await createImageFile()
  const iconsProperties = iconsFileNames(iconsPath)
    .sort()
    .map(({ name, extension }) => {
      return `${name.replace(
        extension,
        '',
      )}: require('../assets/icons/${name}')`
    })
    .join(',\n  ')

  const imagesProperties = iconsFileNames(imagesPath)
    .sort()
    .map(({ name, extension }) => {
      return `${name.replace(
        extension,
        '',
      )}: require('../assets/images/${name}')`
    })
    .join(',\n  ')

  const string =
    iconsProperties.length === 0
      ? `export const icons = {}

export const images = {}
      `
      : `export const icons = {
  ${iconsProperties},
}

export const images = {
  ${imagesProperties},
}
`

  fs.writeFileSync(filePath, string, 'utf8')
  console.log('Generating images completed')
}

module.exports.generateImages = generateImages

generateImages()
