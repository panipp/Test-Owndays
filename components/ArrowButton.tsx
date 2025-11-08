'use client'

import React from 'react'
import { FaArrowRight, FaArrowLeft, FaArrowDown, FaArrowUp } from 'react-icons/fa'

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

const ICON_SIZE = {
  sm: 12,
  md: 16,
  lg: 20,
}

const ARROW_ICONS = {
  right: FaArrowRight,
  left: FaArrowLeft,
  down: FaArrowDown,
  up: FaArrowUp,
}

function ArrowIcon({ direction, size = 'md' }: { direction: 'left' | 'right' | 'down' | 'up', size?: 'sm' | 'md' | 'lg' }) {
  const iconSize = ICON_SIZE[size]
  const IconComponent = ARROW_ICONS[direction]
  return <IconComponent size={iconSize} />
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
        <ArrowIcon direction={direction} size={size} />
      </div>
    )
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      aria-label={`Arrow ${direction}`}
    >
      <ArrowIcon direction={direction} size={size} />
    </button>
  )
}

