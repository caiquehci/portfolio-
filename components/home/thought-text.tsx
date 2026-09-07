// components/thought-text.tsx
'use client'

import { useState, useRef, ReactNode } from 'react'

interface ThoughtTextProps {
  children: ReactNode
  thought: string
  widthClass?: string // Optional custom width prop
}

export function ThoughtText({ children, thought, widthClass = 'w-80' }: ThoughtTextProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [alignment, setAlignment] = useState<'center' | 'left' | 'right'>('center')
  const containerRef = useRef<HTMLSpanElement>(null)

  const updatePosition = () => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const screenWidth = window.innerWidth

    // Dynamically calculate half width based on class or default to 160 (for w-80)
    let tooltipHalfWidth = 160
    if (widthClass.includes('w-96')) tooltipHalfWidth = 192
    else if (widthClass.includes('w-[420px]')) tooltipHalfWidth = 210

    if (rect.left + rect.width / 2 - tooltipHalfWidth < 16) {
      setAlignment('left')
    } else if (rect.left + rect.width / 2 + tooltipHalfWidth > screenWidth - 16) {
      setAlignment('right')
    } else {
      setAlignment('center')
    }
  }

  const handleMouseEnter = () => {
    updatePosition()
    setIsOpen(true)
  }

  let positionStyles = 'left-1/2 -translate-x-1/2'
  if (alignment === 'left') {
    positionStyles = 'left-0 translate-x-0'
  } else if (alignment === 'right') {
    positionStyles = 'right-0 left-auto translate-x-0'
  }

  return (
    <span
      ref={containerRef}
      className="md:relative md:inline-block md:cursor-help md:px-1 md:py-0.5 md:underline md:decoration-dotted md:decoration-muted-foreground/60 md:underline-offset-4 md:transition-colors md:hover:decoration-[#FFC000]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children}
      {isOpen && (
        <span
          className={`absolute bottom-full mb-3 z-50 ${widthClass} rounded-2xl bg-zinc-800 px-4 py-5 text-base leading-relaxed text-zinc-100 shadow-[10px_16px_35px_-8px_rgba(0,0,0,0.85)] border border-zinc-700/80 text-left pointer-events-none hidden md:block ${positionStyles}`}
        >
          <span className="block text-xs font-semibold uppercase tracking-wider text-[#FFC000] mb-1.5">
            Writer&apos;s Note
          </span>
          <span>{thought}</span>
        </span>
      )}
    </span>
  )
}