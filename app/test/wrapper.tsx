import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'

import { store } from '@/store'
import { ThemeProvider } from '@/theme'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: 0,
    },
  },
})

type Props = {
  children?: React.ReactNode
}

export const Wrapper: FC<Props> = ({ children }) => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme="light">
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  </Provider>
)
