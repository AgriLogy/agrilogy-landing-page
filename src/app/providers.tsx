// app/providers.tsx
'use client'

import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react'


const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}
const theme = extendTheme({
  config,
  colors: {
    green: {
      50: "#f0fff4",
      100: "#c6f6d5",
      200: "#9ae6b4",
      300: "#68d391",
      400: "#48bb78",
      500: "#38a169",
      600: "#2f855a",
      700: "#276749",
      800: "#22543d",
      900: "#1a202c",
    },
  },
  fonts: {
    heading: "system-ui, sans-serif",
    body: "system-ui, sans-serif",
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme} >{children}</ChakraProvider>
}