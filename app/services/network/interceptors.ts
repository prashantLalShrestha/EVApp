import type { AxiosError, InternalAxiosRequestConfig } from 'axios'

import type { ResponseInterceptor } from './network.types'

export const defaultRequestInterceptor = {
  onSuccess: (config: InternalAxiosRequestConfig) => {
    return config
  },
  onError: (error: any) => {
    throw error
  },
}

export const defaultResponseInterceptor: ResponseInterceptor = {
  onSuccess: response => {
    return response
  },
  onError: async (error: AxiosError) => {
    if (error.response?.status === 403) {
      // Handling 403 Errors
    }

    if (error.response?.status === 401) {
      // Handling 401 Errors
    }

    throw error
  },
}
