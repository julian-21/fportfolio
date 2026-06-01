'use client'

import React, { useEffect, useRef } from 'react'

interface ParticlesProps {
  className?: string
  quantity?: number
}

export function Particles({
  className = '',
  quantity = 60,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1

  useEffect(() => {
    if (!canvasRef.current) return
    initCanvas()
    window.addEventListener('resize', initCanvas)

    return () => {
      window.removeEventListener('resize', initCanvas)
    }
  }, [])

  const initCanvas = () => {
    if (!canvasRef.current || !canvasContainerRef.current) return
    const canvas = canvasRef.current
    const rect = canvasContainerRef.current.getBoundingClientRect()
    canvasSize.current.w = rect.width
    canvasSize.current.h = rect.height
    canvas.width = canvasSize.current.w * dpr
    canvas.height = canvasSize.current.h * dpr
    canvas.style.width = `${canvasSize.current.w}px`
    canvas.style.height = `${canvasSize.current.h}px`
    const ctx = canvas.getContext('2d')
    if (ctx) ctx.scale(dpr, dpr)
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return
      const rect = canvasRef.current.getBoundingClientRect()
      mouse.current.x = e.clientX - rect.left
      mouse.current.y = e.clientY - rect.top
    }
    
    // Check if touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (!isTouchDevice) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (!isTouchDevice) {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    // Optimize particles quantity for mobile
    const isMobile = window.innerWidth < 768
    const actualQuantity = isMobile ? Math.floor(quantity * 0.4) : quantity

    interface Particle {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      alpha: number
      targetAlpha: number
      dx: number
      dy: number
      magnet: number
    }

    const particles: Particle[] = []

    const createParticle = (i: number): Particle => {
      return {
        x: Math.random() * canvasSize.current.w,
        y: Math.random() * canvasSize.current.h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        size: Math.random() * 2 + 0.5,
        alpha: 0,
        targetAlpha: Math.random() * 0.35 + 0.1,
        dx: 0,
        dy: 0,
        magnet: Math.random() * 0.015 + 0.005,
      }
    }

    for (let i = 0; i < actualQuantity; i++) {
      particles.push(createParticle(i))
    }

    const drawCircle = (x: number, y: number, size: number, alpha: number) => {
      ctx.beginPath()
      ctx.arc(x, y, size, 0, 2 * Math.PI)
      // Particle color matches Julian's gold accent color #ffcc00
      ctx.fillStyle = `rgba(255, 204, 0, ${alpha})`
      ctx.fill()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)

      particles.forEach((p, idx) => {
        // Handle alpha fade in
        if (p.alpha < p.targetAlpha) {
          p.alpha += 0.01
        }

        // Horizontal and vertical movement
        p.x += p.vx
        p.y += p.vy

        // Interactivity with mouse
        const dx = mouse.current.x - p.x
        const dy = mouse.current.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 150) {
          // Pull particles gently towards mouse
          p.x += (dx / dist) * p.magnet * 2
          p.y += (dy / dist) * p.magnet * 2
        }

        // Boundary checks
        if (p.x < 0 || p.x > canvasSize.current.w) p.vx *= -1
        if (p.y < 0 || p.y > canvasSize.current.h) p.vy *= -1

        // Clamp to screen boundaries
        if (p.x < -10) p.x = canvasSize.current.w + 10
        if (p.x > canvasSize.current.w + 10) p.x = -10
        if (p.y < -10) p.y = canvasSize.current.h + 10
        if (p.y > canvasSize.current.h + 10) p.y = -10

        drawCircle(p.x, p.y, p.size, p.alpha)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [quantity])

  return (
    <div
      ref={canvasContainerRef}
      className={`absolute inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  )
}
