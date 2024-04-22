import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { FC, PropsWithChildren } from 'react'

import { ThemeProvider } from './theme'
import { AppTheme } from './res'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={AppTheme()}>{children}</ThemeProvider>
    </QueryClientProvider>
  )
}
