'use client'

import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface DecryptedTextProps {
  text: string
  className?: string
  delay?: number
  scrambleSpeed?: number
  animateOn?: 'view' | 'hover'
  chars?: string
}

export function DecryptedText({
  text,
  className = '',
  delay = 0,
  scrambleSpeed = 30,
  animateOn = 'view',
  chars = 'ABCDEF1234567890!@#$%^&*()_+{}[]|;:<>?',
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState('')
  const [isAnimating, setIsAnimating] = useState(false)
  const containerRef = useRef<HTMLSpanElement>(null)
  const intervalRef = useRef<any>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-10%' })
  const hasAnimated = useRef(false)

  const triggerAnimation = () => {
    if (isAnimating) return
    setIsAnimating(true)
    
    let currentIteration = 0
    const targetLength = text.length
    
    if (intervalRef.current) clearInterval(intervalRef.current)
    
    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' '
            if (index < currentIteration) {
              return text[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )
      
      if (currentIteration >= targetLength) {
        if (intervalRef.current) clearInterval(intervalRef.current)
        setIsAnimating(false)
      }
      
      currentIteration += 0.5 // Decrypt 1 character every 2 frames
    }, scrambleSpeed)
  }

  useEffect(() => {
    if (animateOn === 'view' && isInView && !hasAnimated.current) {
      hasAnimated.current = true
      const timeout = setTimeout(triggerAnimation, delay)
      return () => clearTimeout(timeout)
    }
  }, [isInView, animateOn, delay])

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handleMouseEnter = () => {
    if (animateOn === 'hover' && !isAnimating) {
      triggerAnimation()
    }
  }

  // Set initial text
  useEffect(() => {
    if (!isAnimating && !hasAnimated.current) {
      setDisplayText(text)
    }
  }, [text, isAnimating])

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={`inline-block ${className}`}
    >
      {displayText}
    </span>
  )
}
