'use client'

import React from 'react'
import { MantineProvider } from '@mantine/core'

export default function ThemerProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  )
}
