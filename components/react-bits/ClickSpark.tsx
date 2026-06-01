'use client'

import React, { useEffect, useRef } from 'react'

export function ClickSpark() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(() => {
    // Disable on touch devices to avoid interference with mobile behaviors
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

    interface Ripple {
      x: number
      y: number
      radius: number
      maxRadius: number
      alpha: number
      color: string
      speed: number
    }

    let ripples: Ripple[] = []

    const createRipple = (x: number, y: number) => {
      // Spawn two concentric ripples for a more premium effect
      ripples.push({
        x,
        y,
        radius: 2,
        maxRadius: 36,
        alpha: 0.6,
        color: '255, 204, 0', // Gold color to match theme
        speed: 1.8
      })
      ripples.push({
        x,
        y,
        radius: 0,
        maxRadius: 24,
        alpha: 0.3,
        color: '255, 204, 0',
        speed: 1.4
      })
    }

    const handleClick = (e: MouseEvent) => {
      createRipple(e.clientX, e.clientY)
    }

    window.addEventListener('click', handleClick)

    let animationFrameId: number

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i]
        r.radius += r.speed
        
        // Progress from 0 to 1
        const progress = r.radius / r.maxRadius
        r.alpha = (progress < 0.1 ? progress * 10 : 1 - progress) * (r.alpha) // smooth ease in and fade out

        if (r.radius >= r.maxRadius || r.alpha <= 0) {
          ripples.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${r.color}, ${r.alpha})`
        ctx.lineWidth = 1.5 * (1 - progress)
        ctx.stroke()
      }

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
