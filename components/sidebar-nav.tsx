"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Contact', href: '/contact' },
]

export function SidebarNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 md:hidden p-2 hover:bg-card rounded-lg transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={cn(
        "fixed left-0 top-0 h-full w-64 bg-card border-r border-foreground transition-all duration-300 z-40",
        "md:translate-x-0 flex flex-col justify-between p-8",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      )}>
        <div className="space-y-12">
          {/* Logo */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-foreground">Fikri</h1>
            <p className="text-sm text-muted-foreground">Full-stack Programmer</p>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-2 rounded-lg transition-all duration-200",
                  pathname === item.href
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div className="space-y-3 pt-8 border-t border-foreground">
          <a
            href="https://github.com/julian-21"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/fikri-julian-febrianto-69a185253/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jfikri212@gmail.com"
            className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
