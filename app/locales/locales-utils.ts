import { I18n, Scope, TranslateOptions } from 'i18n-js'
import * as RNLocalize from 'react-native-localize'

const i18n = new I18n()

export const localeSetup = async (
  translations: { [locale: string]: object },
  defaultLocale: string,
) => {
  const availableLanguages = Object.keys(translations)
  const systemLanguage =
    RNLocalize.findBestLanguageTag(availableLanguages)?.languageTag

  i18n.store(translations)
  i18n.defaultLocale = defaultLocale
  i18n.locale = systemLanguage ?? defaultLocale
}

/**
 * Translates text.
 *
 * @param key The i18n key.
 */
export const translate = (key: Scope, options?: TranslateOptions) => {
  return i18n.t(key, options)
}

export const getTxKeyPathObj = <T extends object>(
  obj: T,
  parentPath: string = '',
): T => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const path = parentPath ? `${parentPath}.${key}` : key
    acc[key as keyof T] =
      typeof value === 'object' ? getTxKeyPathObj(value, path) : path
    return acc
  }, {} as T)
}
