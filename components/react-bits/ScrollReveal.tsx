'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import React from 'react'

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  yOffset?: number
  xOffset?: number
  scale?: number
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  yOffset = 25,
  xOffset = 0,
  scale = 1,
  ...rest
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: yOffset,
        x: xOffset,
        scale: scale
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        x: 0,
        scale: 1
      }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1] // Deceleration curve (Ease-out Cubic)
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
