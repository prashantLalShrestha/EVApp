const fs = require('fs')
const { resolve } = require('path')

const supportedFormats = ['.ttf', '.otf']

const ROOT_DIR = resolve(__dirname, '../..')
const resPath = `${ROOT_DIR}/app/res`
const fontPath = `${resPath}/assets/fonts`
const filePath = `${resPath}/src/fonts.ts`

const createFontFile = async () => {
  try {
    // Check if the file exists
    await fs.promises.access(filePath, fs.constants.F_OK)
    console.log('fonts.ts already exists.')
  } catch (err) {
    // File doesn't exist, create a new file
    console.log(
      `[Design] fonts.ts not found in ${filePath}\n Creating fonts.ts`,
    )
    try {
      await fs.promises.writeFile(filePath, '')
      console.log('fonts.ts created successfully!')
    } catch (err2) {
      console.error('Error creating file:', err2)
    }
  }
}

const fontFileNames = () => {
  const array = fs
    .readdirSync(fontPath)
    .map(file => {
      return {
        name: file,
        extension: file.substring(file.lastIndexOf('.'), file.length) || file,
      }
    })
    .filter(({ extension }) => {
      return supportedFormats.includes(extension)
    })

  return Array.from(new Set(array))
}

const generateFonts = () => {
  const properties = fontFileNames()
    .sort()
    .map(({ name, extension }) => {
      const key =
        name.charAt(0).toLocaleLowerCase() +
        name
          .slice(1)
          .replace(/\s/g, '')
          .replace('-', '')
          .replace('Regular', '')
          .replace(extension, '')
      return `${key}: {
    name: '${name.replace(extension, '')}',
    source: require('../assets/fonts/${name}'),
  }`
    })
    .join(',\n  ')

  const hashMap = fontFileNames()
    .sort()
    .map(({ name, extension }) => {
      const key = name.replace(/\s/g, '').replace(extension, '')
      if (key.split('-').length > 1) {
        return `'${key}': require('../assets/fonts/${name}'),`
      } else {
        return `${key}: require('../assets/fonts/${name}'),`
      }
    })
    .join('\n    ')

  const string =
    properties.length === 0
      ? `const fonts = {
  all: {},
}`
      : `const fonts = {
  ${properties},
  all: {
    ${hashMap}
  },
}

export default fonts
`

  fs.writeFileSync(filePath, string, 'utf8')
}

const generate = async () => {
  console.log('Generating fonts started')
  await createFontFile()
  generateFonts()
  console.log('Generating fonts completed')
}

module.exports.generateFonts = generate

generate()
