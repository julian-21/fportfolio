'use client'

import React, { useRef, useState } from 'react'

interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
  borderColor?: string
}

export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(255, 204, 0, 0.15)', // Default gold glow matching theme
  borderColor = 'rgba(255, 204, 0, 0.5)',
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [isFocused, setIsFocused] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => {
    // Disable hover glows on touch screens to avoid sticky states
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return
    setIsFocused(true)
  }
  
  const handleMouseLeave = () => setIsFocused(false)

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden border-2 border-foreground/20 bg-card transition-all duration-500 ${className}`}
      style={{
        borderColor: isFocused ? borderColor : undefined,
      }}
    >
      {/* Interactive Glow Backing */}
      {isFocused && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  )
}
