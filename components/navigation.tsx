'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navItems = [
    { path: '/', label: 'Home', number: '01' },
    { path: '/about', label: 'About', number: '02' },
    { path: '/projects', label: 'Works', number: '03' },
    { path: '/contact', label: 'Contact', number: '04' },
  ]

  return (
    <>
      {/* DESKTOP LAYOUT (XL and above - 1280px+) */}
      <div className="hidden xl:block fixed inset-0 pointer-events-none z-40">
        {/* Top Left - Logo */}
        <div className="absolute left-8 top-8 pointer-events-auto">
          <Link href="/" className="group block">
            <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-black leading-tight transition-opacity duration-300 group-hover:opacity-60">
              FIKRI<br />JULIAN<br />CO.
            </h1>
          </Link>
        </div>

        {/* Bottom Left - Info */}
        <div className="absolute left-8 bottom-8 space-y-4 text-xs xl:text-sm pointer-events-auto max-w-xs">
          <div className="space-y-2">
            <p className="font-bold">Studio of Fikri Julian</p>
            <p className="text-muted-foreground">Fullstack Developer</p>
          </div>
          <div className="space-y-1">
            <p className="text-muted-foreground">Yogyakarta, Indonesia</p>
            <a href="mailto:jfikri212@gmail.com" className="hover:text-accent transition-colors block">
              jfikri212@gmail.com
            </a>
          </div>
        </div>

        {/* Top Center - Main Navigation */}
        <nav className="absolute left-1/2 top-8 -translate-x-1/2 flex gap-8 xl:gap-12 2xl:gap-16 pointer-events-auto">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-xs xl:text-sm font-black uppercase tracking-wider transition-colors duration-300 ${
                isActive(item.path) ? 'text-accent' : 'hover:text-accent'
              }`}
            >
              <span className="text-muted-foreground">{item.number}</span> {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Middle - Social Links */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 space-y-6 xl:space-y-8 pointer-events-auto">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs xl:text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors text-right"
          >
            <span className="text-muted-foreground text-[10px]">03</span><br />
            Twitter
          </a>
          <a
            href="https://github.com/julian-21"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs xl:text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors text-right"
          >
            <span className="text-muted-foreground text-[10px]">04</span><br />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/fikri-julian-febrianto-69a185253/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs xl:text-sm font-bold uppercase tracking-wider hover:text-accent transition-colors text-right"
          >
            <span className="text-muted-foreground text-[10px]">05</span><br />
            LinkedIn
          </a>
        </div>

        {/* Bottom Right - Credit */}
        <div className="absolute right-8 bottom-8 text-right pointer-events-auto">
          <div className="space-y-1 text-xs xl:text-sm">
            <p className="font-bold uppercase tracking-wider">Design</p>
            <p className="font-bold uppercase tracking-wider">Femt</p>
          </div>
        </div>
      </div>

      {/* TABLET LAYOUT (MD to LG - 768px to 1279px) */}
      <div className="hidden md:block xl:hidden fixed inset-0 pointer-events-none z-40">
        {/* Top Bar - Transparent */}
        <div className="absolute top-0 left-0 right-0 h-24 pointer-events-auto">
          <div className="h-full px-6 lg:px-8 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group block">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-black leading-[0.9] transition-opacity duration-300 group-hover:opacity-60">
                FIKRI<br />JULIAN<br />CO.
              </h1>
            </Link>

            {/* Navigation */}
            <nav className="flex gap-6 lg:gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-xs lg:text-sm font-black uppercase tracking-wider transition-all duration-300 hover:scale-110 ${
                    isActive(item.path) ? 'text-accent' : 'hover:text-accent'
                  }`}
                >
                  <span className="text-muted-foreground hidden lg:inline">{item.number} </span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Info Bar - Transparent */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-auto">
          <div className="px-6 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-4 text-xs lg:text-sm">
            {/* Left Side - Info */}
            <div className="flex gap-6 lg:gap-8 items-center">
              <div className="flex gap-2 items-center">
                <span className="text-muted-foreground">—</span>
                <p className="font-bold">Fikri Julian</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-muted-foreground">—</span>
                <p className="text-muted-foreground">Fullstack Developer</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-muted-foreground">—</span>
                <a href="mailto:jfikri212@gmail.com" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </div>
            </div>

            {/* Right Side - Social Links */}
            <div className="flex gap-5 lg:gap-7 items-center">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold uppercase tracking-wider hover:text-accent transition-all duration-300 hover:scale-110"
              >
                TW
              </a>
              <a
                href="https://github.com/julian-21"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold uppercase tracking-wider hover:text-accent transition-all duration-300 hover:scale-110"
              >
                GH
              </a>
              <a
                href="https://www.linkedin.com/in/fikri-julian-febrianto-69a185253/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold uppercase tracking-wider hover:text-accent transition-all duration-300 hover:scale-110"
              >
                LI
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT (SM and below - under 768px) */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-20 sm:h-24 z-50 flex items-center justify-between px-5 sm:px-6">
        {/* Logo */}
        <Link href="/" className="text-base sm:text-lg font-black leading-[0.9] hover:text-accent transition-colors">
          FIKRI<br />JULIAN
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 transition-transform duration-300 hover:scale-110 active:scale-95 relative z-50"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={28} className="sm:w-8 sm:h-8" /> : <Menu size={28} className="sm:w-8 sm:h-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-background z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="md:hidden fixed inset-0 z-40 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-8">
              <div className="w-full max-w-lg space-y-10 sm:space-y-16">
                {/* Nav Links */}
                <nav className="space-y-2 sm:space-y-3">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group block text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none transition-all duration-500 ${
                        isActive(item.path) 
                          ? 'text-accent' 
                          : 'hover:text-accent'
                      }`}
                      style={{
                        transitionDelay: `${index * 50}ms`
                      }}
                    >
                      <div className="flex items-baseline gap-3 sm:gap-4 group-hover:translate-x-4 transition-transform duration-300">
                        <span className="text-xs sm:text-sm text-muted-foreground font-bold">
                          {item.number}
                        </span>
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  ))}
                </nav>

                {/* Divider */}
                <div className="w-full h-px bg-foreground/20"></div>

                {/* Info Section */}
                <div className="space-y-3 text-sm sm:text-base">
                  <div className="flex items-center gap-3 opacity-60">
                    <span className="text-muted-foreground">—</span>
                    <p className="font-bold uppercase tracking-wider">Fikri Julian</p>
                  </div>
                  <div className="flex items-center gap-3 opacity-60">
                    <span className="text-muted-foreground">—</span>
                    <p className="text-muted-foreground">Fullstack Developer</p>
                  </div>
                  <div className="flex items-center gap-3 opacity-60">
                    <span className="text-muted-foreground">—</span>
                    <p className="text-muted-foreground">Yogyakarta, Indonesia</p>
                  </div>
                </div>

                {/* Contact & Social */}
                <div className="space-y-4">
                  <a 
                    href="mailto:jfikri212@gmail.com" 
                    className="block text-sm sm:text-base font-bold uppercase tracking-wider hover:text-accent transition-all duration-300 hover:translate-x-2"
                  >
                    → Email Me
                  </a>
                  
                  <div className="flex gap-5 sm:gap-6 text-sm sm:text-base">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent font-bold uppercase tracking-wider transition-all duration-300 hover:scale-110"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://github.com/julian-21"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent font-bold uppercase tracking-wider transition-all duration-300 hover:scale-110"
                    >
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/fikri-julian-febrianto-69a185253/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent font-bold uppercase tracking-wider transition-all duration-300 hover:scale-110"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Credit */}
              <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 text-center">
                <p className="text-xs sm:text-sm text-muted-foreground">Design by Femt</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}