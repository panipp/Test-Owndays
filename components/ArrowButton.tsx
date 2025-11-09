'use client'

import { FaArrowRight, FaArrowLeft, FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { joinClasses } from '@/lib/utils'

interface ArrowButtonProps {
  direction?: 'left' | 'right' | 'down' | 'up'
  onClick?: () => void
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'rounded' | 'circle'
  asDiv?: boolean
  colorVariant?: 'black' | 'white'
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
  asDiv = false,
  colorVariant = 'black'
}: ArrowButtonProps) {
  const colorClasses = colorVariant === 'white' 
    ? 'bg-white border-2 border-black hover:bg-gray-100'
    : 'bg-black text-white'
  
  const baseClasses = joinClasses(
    SIZE_CLASSES[size],
    variant === 'circle' ? 'rounded-full' : 'rounded-lg',
    colorClasses,
    'flex items-center justify-center',
    'transition-all duration-200',
    'cursor-pointer',
    asDiv ? 'group-hover:bg-owndays-dark-green' : colorVariant === 'black' ? 'hover:bg-owndays-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-owndays-dark-green active:scale-95' : 'focus:outline-none active:scale-95',
    className
  )

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

