'use client'

import React, { useEffect, useRef } from 'react'

export function ClickSpark() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    // Disable on touch screens to protect mobile scrolling performance
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    interface Spark {
      x: number
      y: number
      vx: number
      vy: number
      size: number
      alpha: number
      color: string
    }

    let sparks: Spark[] = []

    const createSparks = (x: number, y: number) => {
      const count = 5 + Math.floor(Math.random() * 4) // Reduced count (5-8 sparks)
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = 1.0 + Math.random() * 1.5 // Slower speed
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1.0 + Math.random() * 1.0, // Smaller sparks (1.0 - 2.0px)
          alpha: 1,
          color: '255, 204, 0'
        })
      }
    }

    const handleClick = (e: MouseEvent) => {
      createSparks(e.clientX, e.clientY)
    }

    window.addEventListener('click', handleClick)

    let animationFrameId: number

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      sparks.forEach((s, idx) => {
        s.x += s.vx
        s.y += s.vy
        s.vy += 0.05 // Gravity vector pull
        s.alpha -= 0.045 // Fades out much faster for a snappy feel
        s.size *= 0.95 // Size decay

        if (s.alpha <= 0 || s.size <= 0.2) {
          sparks.splice(idx, 1)
          return
        }

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${s.color}, ${s.alpha})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('click', handleClick)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
