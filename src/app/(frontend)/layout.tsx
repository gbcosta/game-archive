import type { Metadata } from 'next'
import React from 'react'
import './styles.css'

export const metadata: Metadata = {
  title: {
    default: 'Game Archive',
    template: '%s | Game Archive',
  },
  description:
    'A personal archive of gaming knowledge, mechanics, strategies and technical references.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
