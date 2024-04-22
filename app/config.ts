declare module 'react-native-config' {
  type ENVIRONMENT = 'production' | 'staging' | 'development'

  export interface NativeConfig {
    readonly ENVIRONMENT: ENVIRONMENT
  }

  const Config: NativeConfig
  export default Config
}
