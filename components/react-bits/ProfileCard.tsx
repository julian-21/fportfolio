'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface ProfileCardProps {
  name: string
  title: string
  handle: string
  status?: string
  contactText?: string
  avatarUrl: string
  showUserInfo?: boolean
  enableTilt?: boolean
  enableMobileTilt?: boolean
  onContactClick?: () => void
  behindGlowColor?: string
  iconUrl?: string
  behindGlowEnabled?: boolean
  innerGradient?: string
}

export function ProfileCard({
  name,
  title,
  handle,
  status = 'Available',
  contactText = 'Contact Me',
  avatarUrl,
  showUserInfo = false,
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick,
  behindGlowColor = 'rgba(255, 204, 0, 0.45)', // Gold glow matching theme
  iconUrl = '/placeholder-logo.svg',
  behindGlowEnabled = true,
  innerGradient = 'linear-gradient(145deg, #a0002a 0%, #ffcc0033 100%)', // Burgundy to transparent gold
}: ProfileCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Motion values for tilt
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)
  const springScale = useSpring(1, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !ref.current) return
    
    // Disable on mobile/touch screen bypass
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice && !enableMobileTilt) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    const mouseX = (e.clientX - rect.left) / width - 0.5
    const mouseY = (e.clientY - rect.top) / height - 0.5
    
    rotateX.set(-mouseY * 10) // 10 degrees max rotation (subtle & professional)
    rotateY.set(mouseX * 10)
  }

  const handleMouseEnter = () => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice && !enableMobileTilt) return
    springScale.set(1.02)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    springScale.set(1)
  }

  return (
    <div className="relative group perspective-[1000px] w-full max-w-[340px]">
      {/* Behind Card Glow Aura */}
      {behindGlowEnabled && (
        <div
          className="absolute -inset-3 rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none -z-10"
          style={{
            background: `radial-gradient(circle, ${behindGlowColor} 0%, transparent 70%)`
          }}
        />
      )}

      {/* Main Card Body */}
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          scale: springScale,
          transformStyle: 'preserve-3d',
        }}
        className="relative overflow-hidden rounded-2xl border-2 border-foreground/20 p-6 shadow-2xl flex flex-col items-center justify-between text-center select-none"
      >
        {/* Card Background Gradient */}
        <div 
          className="absolute inset-0 -z-20"
          style={{ background: innerGradient }}
        />
        
        {/* Subtle Icon Background Pattern */}
        {iconUrl && (
          <div 
            className="absolute inset-0 -z-10 opacity-[0.02] pointer-events-none"
            style={{ 
              backgroundImage: `url(${iconUrl})`,
              backgroundSize: '30px 30px',
              backgroundRepeat: 'repeat'
            }}
          />
        )}

        {/* Status Badge */}
        <div className="w-full flex justify-between items-center mb-6" style={{ transform: 'translateZ(20px)' }}>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-accent/25 bg-background/50">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-accent">{status}</span>
          </div>
          {showUserInfo && (
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">@{handle}</span>
          )}
        </div>

        {/* Avatar Area */}
        <div 
          className="relative w-36 h-36 rounded-full border-4 border-foreground/35 bg-foreground/5 overflow-hidden mb-6 group-hover:border-accent/40 transition-colors duration-500"
          style={{ transform: 'translateZ(30px)' }}
        >
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* User Details */}
        <div className="space-y-1 mb-6" style={{ transform: 'translateZ(20px)' }}>
          <h3 className="text-xl font-black uppercase tracking-tight text-foreground">{name}</h3>
          <p className="text-xs uppercase font-bold tracking-widest text-muted-foreground">{title}</p>
        </div>

        {/* Call to Action Button */}
        <div className="w-full" style={{ transform: 'translateZ(25px)' }}>
          <button
            onClick={onContactClick}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-foreground text-background font-black uppercase text-xs tracking-widest rounded hover:bg-accent hover:text-foreground transition-all duration-300 transform active:scale-95 cursor-pointer border border-transparent hover:border-foreground/20"
          >
            {contactText}
            <ArrowUpRight size={14} />
          </button>
        </div>
      </motion.div>
    </div>
  )
}
