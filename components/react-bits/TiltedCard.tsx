'use client'

import React, { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface TiltedCardProps {
  children: React.ReactNode
  className?: string
  maxRotation?: number
  scaleOnHover?: number
}

export function TiltedCard({
  children,
  className = '',
  maxRotation = 12,
  scaleOnHover = 1.02,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  // Motion values for x/y mouse coordinate percentage
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  
  // Spring configurations for smooth tilt and return physics
  const springConfig = { damping: 22, stiffness: 180, mass: 0.5 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)
  const springScale = useSpring(1, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    
    const width = rect.width
    const height = rect.height
    
    // Mouse coordinates relative to card center, normalized between -0.5 and 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5
    const mouseY = (e.clientY - rect.top) / height - 0.5
    
    // Set rotation degrees based on mouse position relative to center
    rotateX.set(-mouseY * maxRotation)
    rotateY.set(mouseX * maxRotation)
  }

  const handleMouseEnter = () => {
    // Disable hover tilts on touch screens to avoid sticky states
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    springScale.set(scaleOnHover)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    springScale.set(1)
  }

  return (
    <div className="perspective-[1000px] inline-block w-full">
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
        className={`relative transition-shadow duration-300 w-full ${className}`}
      >
        <div 
          style={{ transform: 'translateZ(15px)' }}
          className="w-full h-full"
        >
          {children}
        </div>
      </motion.div>
    </div>
  )
}
