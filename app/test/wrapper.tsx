import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NavigationContainer } from '@react-navigation/native'

import { ThemeProvider } from '@/theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

type Props = {
  children?: React.ReactNode
}

export const Wrapper: FC<Props> = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  </QueryClientProvider>
)
