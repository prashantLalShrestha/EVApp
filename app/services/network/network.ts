import axios from 'axios'

import {
  defaultRequestInterceptor,
  defaultResponseInterceptor,
} from './interceptors'
import type { ApiConfigType } from './network.types'

export const createNetworkInstance = (
  config: ApiConfigType,
  responseInterceptor = defaultResponseInterceptor,
  requestInterceptor = defaultRequestInterceptor,
) => {
  const axiosInstance = axios.create({
    baseURL: config.baseUrl,
    timeout: config.timeout,
    headers: {
      ...config.headers,
    },
  })

  axiosInstance.interceptors.response.use(
    response => responseInterceptor.onSuccess(response),
    error => responseInterceptor.onError(error),
  )

  axiosInstance.interceptors.request.use(
    request => requestInterceptor.onSuccess(request),
    error => requestInterceptor.onError(error),
  )

  const setHeader = (key: string, value: string) => {
    axiosInstance.defaults.headers[key] = value
  }

  const removeHeader = (key: string) => {
    delete axiosInstance.defaults.headers[key]
  }
  return {
    apiInstance: axiosInstance,
    setHeader,
    removeHeader,
  }
}
