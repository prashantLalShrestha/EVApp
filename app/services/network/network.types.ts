import type {
  AxiosRequestHeaders,
  AxiosResponse,
  AxiosRequestConfig,
} from 'axios'

export type ApiConfigType = {
  baseUrl: string
  timeout?: number
  headers?: AxiosRequestHeaders
}

export type AxiosFunction = <T>(
  url: string,
  config?: AxiosRequestConfig,
) => Promise<AxiosResponse<T>>

export type AxiosMutableFunction = <T>(
  url: string,
  payload?: unknown,
  config?: AxiosRequestConfig,
) => Promise<AxiosResponse<T>>

export type RequestInterceptor = {
  onSuccess: (config: AxiosRequestConfig) => AxiosRequestConfig
  onError: (error: any) => void
}

export type ResponseInterceptor = {
  onSuccess: (response: AxiosResponse) => AxiosResponse
  onError: (error: any) => void
}

export type NetworkInstanceType = {
  get: AxiosFunction
  put: AxiosMutableFunction
  post: AxiosMutableFunction
  delete: AxiosFunction
  setHeader: (key: string, value?: string) => void
  removeHeader: (key: string) => void
}
