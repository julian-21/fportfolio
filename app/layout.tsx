import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fikri Julian | Fullstack Developer',
  description: 'Bold, creative fullstack web developer specializing in Laravel & MySQL.',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  )
}
