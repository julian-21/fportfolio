'use client'

interface ShinyTextProps {
  text: string
  className?: string
  color?: 'gold' | 'white'
}

export function ShinyText({
  text,
  className = '',
  color = 'gold'
}: ShinyTextProps) {
  const shineClass = color === 'gold' ? 'shiny-text-gold' : 'shiny-text-white'
  
  return (
    <span className={`${shineClass} inline-block ${className}`}>
      {text}
    </span>
  )
}
