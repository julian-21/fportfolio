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
      {/* Desktop Layout - Hidden below xl */}
      <div className="fixed inset-0 pointer-events-none z-40 hidden xl:block">
        {/* Left Sidebar */}
        <div className="absolute left-0 top-0 w-56 xl:w-64 h-screen bg-background border-r-2 border-foreground pointer-events-auto p-6 xl:p-8 flex flex-col justify-between overflow-y-auto animate-slide-in-left">
          <div className="space-y-6">
            <Link href="/" className="group block">
              <h1 className="text-2xl xl:text-3xl font-black leading-tight transition-all duration-300 group-hover:opacity-60">
                FIKRI<br />JULIAN<br />CO.
              </h1>
            </Link>
            <div className="space-y-2 text-xs">
              <p className="font-bold">Fullstack Developer</p>
              <p className="text-muted-foreground">Yogyakarta, Indonesia</p>
              <p className="text-accent font-bold">Available Now</p>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <a href="mailto:jfikri212@gmail.com" className="link-hover hover:text-accent block break-all">
              jfikri212@gmail.com
            </a>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Creating bold digital experiences with code and design.
            </p>
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="absolute left-1/2 top-12 -translate-x-1/2 flex gap-8 xl:gap-12 pointer-events-auto animate-fade-in-up">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                isActive(item.path)
                  ? 'text-accent'
                  : 'hover:text-accent'
              }`}
            >
              {item.number} <span className="ml-2">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Right Sidebar */}
        <div className="absolute right-0 top-0 w-32 xl:w-40 h-screen bg-background border-l-2 border-foreground pointer-events-auto p-6 xl:p-8 flex flex-col items-center justify-center animate-slide-in-right">
          <div className="space-y-6 text-center">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover text-xs font-bold uppercase tracking-wider hover:text-accent block"
            >
              Twitter
            </a>
            <a
              href="https://github.com/julian-21"
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover text-xs font-bold uppercase tracking-wider hover:text-accent block"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fikri-julian-febrianto-69a185253/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-hover text-xs font-bold uppercase tracking-wider hover:text-accent block"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Tablet/Mobile Header */}
      <div className="xl:hidden fixed top-0 left-0 right-0 h-16 bg-background border-b-2 border-foreground z-50 flex items-center justify-between px-4 sm:px-6 animate-fade-in-up">
        <Link href="/" className="text-sm sm:text-base font-black uppercase tracking-wider hover:text-accent transition-colors">
          FIKRI JULIAN
        </Link>
        
        {/* Desktop-style nav for tablet (lg) */}
        <nav className="hidden lg:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                isActive(item.path)
                  ? 'text-accent'
                  : 'hover:text-accent'
              }`}
            >
              {item.number} {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger menu for mobile/tablet */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 z-50 transition-transform duration-300 hover:scale-110"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-40 animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="lg:hidden fixed top-16 left-0 right-0 bottom-0 bg-background z-40 py-6 px-4 sm:px-6 animate-slide-down overflow-y-auto">
            <nav className="space-y-4 mb-6 pb-6 border-b-2 border-foreground">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base sm:text-lg font-black uppercase tracking-wider transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-accent'
                      : 'hover:text-accent hover:translate-x-2'
                  }`}
                >
                  {item.number} {item.label}
                </Link>
              ))}
            </nav>

            <div className="space-y-4 text-sm sm:text-base pb-6 border-b-2 border-foreground">
              <div className="space-y-1">
                <p className="font-bold">Fikri Julian</p>
                <p className="text-muted-foreground">Fullstack Developer</p>
                <p className="text-muted-foreground">Yogyakarta, Indonesia</p>
                <p className="text-accent font-bold text-sm">Available Now</p>
              </div>
              <a 
                href="mailto:jfikri212@gmail.com" 
                className="link-hover hover:text-accent block break-all"
              >
                jfikri212@gmail.com
              </a>
            </div>

            <div className="space-y-3 text-sm pt-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover hover:text-accent font-bold uppercase tracking-wider block transition-all hover:translate-x-2"
              >
                → Twitter
              </a>
              <a
                href="https://github.com/julian-21"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover hover:text-accent font-bold uppercase tracking-wider block transition-all hover:translate-x-2"
              >
                → GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/fikri-julian-febrianto-69a185253/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-hover hover:text-accent font-bold uppercase tracking-wider block transition-all hover:translate-x-2"
              >
                → LinkedIn
              </a>
            </div>

            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mt-6 pt-6 border-t-2 border-foreground">
              Creating bold digital experiences with code and design.
            </p>
          </div>
        </>
      )}
    </>
  )
}