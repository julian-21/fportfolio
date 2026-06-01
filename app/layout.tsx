import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { ClickSpark } from '@/components/react-bits/ClickSpark'

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
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${geist.className} relative min-h-screen overflow-x-hidden`}>
        {/* Click Spark Particles Layer */}
        <ClickSpark />

        {/* Ambient Glowing Orbs Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] left-[5%] w-[45vw] h-[45vw] rounded-full bg-accent/5 blur-[120px] animate-float-orb-1"></div>
          <div className="absolute bottom-[15%] right-[5%] w-[50vw] h-[50vw] rounded-full bg-foreground/3 blur-[140px] animate-float-orb-2"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}
