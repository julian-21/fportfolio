'use client'

import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  direction?: 'top' | 'bottom' | 'left' | 'right'
  animateBy?: 'words' | 'letters'
}

export function BlurText({ 
  text, 
  className = '', 
  delay = 0.08,
  direction = 'bottom',
  animateBy = 'words'
}: BlurTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const elements = animateBy === 'words' 
    ? text.split(' ') 
    : text.split('')

  const directionOffset = {
    top: { y: -20, x: 0 },
    bottom: { y: 20, x: 0 },
    left: { x: -20, y: 0 },
    right: { x: 20, y: 0 },
  }

  const { x: offsetX, y: offsetY } = directionOffset[direction]

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={{ 
            opacity: 0, 
            filter: 'blur(12px)',
            y: offsetY,
            x: offsetX,
          }}
          animate={isInView ? { 
            opacity: 1, 
            filter: 'blur(0px)',
            y: 0,
            x: 0,
          } : {}}
          transition={{
            duration: 0.5,
            delay: index * delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className={animateBy === 'words' ? 'inline-block mr-[0.25em]' : 'inline-block'}
        >
          {element === ' ' ? '\u00A0' : element}
        </motion.span>
      ))}
    </span>
  )
}
