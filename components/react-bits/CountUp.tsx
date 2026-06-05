'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface CountUpProps {
  to: number
  from?: number
  direction?: 'up' | 'down'
  delay?: number
  duration?: number
  className?: string
  startOnView?: boolean
  format?: (value: number) => string
}

export function CountUp({
  to,
  from = 0,
  direction = 'up',
  delay = 0,
  duration = 2,
  className = '',
  startOnView = true,
  format,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === 'down' ? to : from)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 120,
  })
  const isInView = useInView(ref, { once: true, margin: '0px' })

  useEffect(() => {
    if (ref.current) {
      const initialVal = direction === 'down' ? to : from
      ref.current.textContent = format ? format(initialVal) : String(initialVal)
    }
  }, [from, to, direction, format])

  useEffect(() => {
    if (startOnView && !isInView) return

    const timeoutId = setTimeout(() => {
      motionValue.set(direction === 'down' ? from : to)
    }, delay * 1000)

    return () => clearTimeout(timeoutId)
  }, [isInView, startOnView, motionValue, delay, to, from, direction])

  useEffect(() => {
    return springValue.on('change', (latest) => {
      if (ref.current) {
        const rounded = Math.round(latest)
        ref.current.textContent = format ? format(rounded) : rounded.toLocaleString()
      }
    })
  }, [springValue, format])

  return <span ref={ref} className={className} />
}
