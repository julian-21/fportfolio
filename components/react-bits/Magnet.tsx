'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

interface MagnetProps {
  children: React.ReactNode
  className?: string
  range?: number
  actionArea?: 'self' | 'parent'
  strength?: number
}

export function Magnet({
  children,
  className = '',
  range = 80,
  actionArea = 'self',
  strength = 0.35,
}: MagnetProps) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  
  // Motion values for tracking cursor offset
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Springs for buttery smoothing
  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  useEffect(() => {
    // Disable on mobile/touch devices to prevent jerky scrolling
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
      
      if (distance < range) {
        setIsHovered(true)
        x.set(distanceX * strength)
        y.set(distanceY * strength)
      } else {
        setIsHovered(false)
        x.set(0)
        y.set(0)
      }
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
      x.set(0)
      y.set(0)
    }

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener('mousemove', handleMouseMove)
      currentRef.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mousemove', handleMouseMove)
        currentRef.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [x, y, range, strength])

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}
