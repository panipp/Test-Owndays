'use client'

import React from 'react'

interface ArrowButtonProps {
  direction?: 'left' | 'right' | 'down' | 'up'
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'rounded' | 'circle'
  asDiv?: boolean
}

const SIZE_CLASSES = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
}

const ARROW_PATHS = {
  right: 'M9 5l7 7-7 7',
  left: 'M15 19l-7-7 7-7',
  down: 'M19 9l-7 7-7-7',
  up: 'M5 15l7-7 7 7',
}

function ArrowIcon({ direction }: { direction: 'left' | 'right' | 'down' | 'up' }) {
  return (
    <svg
      className="w-1/2 h-1/2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={ARROW_PATHS[direction]}
      />
    </svg>
  )
}

export default function ArrowButton({
  direction = 'right',
  onClick,
  className = '',
  size = 'md',
  variant = 'circle',
  asDiv = false
}: ArrowButtonProps) {
  const baseClasses = [
    SIZE_CLASSES[size],
    variant === 'circle' ? 'rounded-full' : 'rounded-lg',
    'bg-black text-white flex items-center justify-center',
    'transition-all duration-200',
    asDiv ? 'group-hover:bg-owndays-dark-green' : 'hover:bg-owndays-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-owndays-dark-green active:scale-95',
    className
  ].filter(Boolean).join(' ')

  if (asDiv) {
    return (
      <div className={baseClasses} aria-label={`Arrow ${direction}`}>
        <ArrowIcon direction={direction} />
      </div>
    )
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      aria-label={`Arrow ${direction}`}
    >
      <ArrowIcon direction={direction} />
    </button>
  )
}

