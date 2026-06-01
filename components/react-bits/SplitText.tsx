'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  stagger?: number
  animateBy?: 'words' | 'chars'
}

export function SplitText({
  text,
  className = '',
  delay = 0,
  duration = 0.4,
  stagger = 0.02,
  animateBy = 'chars',
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  const items = animateBy === 'words' ? text.split(' ') : text.split('')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: '20%',
      filter: 'blur(4px)',
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: '0%',
      filter: 'blur(0px)',
      scale: 1,
      transition: { type: 'spring', damping: 20, stiffness: 180, duration }
    },
  } as const

  return (
    <motion.span
      ref={ref}
      className={`inline-block whitespace-pre-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {items.map((item, idx) => (
        <motion.span
          key={idx}
          className="inline-block"
          variants={itemVariants}
        >
          {item === ' ' ? '\u00A0' : item}
          {animateBy === 'words' && idx < items.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.span>
  )
}
