'use client'

import { FaArrowRight, FaArrowLeft, FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { joinClasses } from '@/lib/utils'

interface ArrowButtonProps {
  direction?: 'left' | 'right' | 'down' | 'up'
  onClick?: () => void
  size?: 'sm' | 'md' | 'lg'
  variant?: 'rounded' | 'circle'
  asDiv?: boolean
  colorVariant?: 'black' | 'white'
  ariaLabel?: string
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
}

const iconSizes = {
  sm: 12,
  md: 16,
  lg: 20,
}

const arrowIcons = {
  right: FaArrowRight,
  left: FaArrowLeft,
  down: FaArrowDown,
  up: FaArrowUp,
}

function ArrowIcon({ direction, size = 'md' }: { direction: 'left' | 'right' | 'down' | 'up', size?: 'sm' | 'md' | 'lg' }) {
  const iconSizeValue = iconSizes[size]
  const IconComponent = arrowIcons[direction]
  return <IconComponent size={iconSizeValue} />
}

export default function ArrowButton({
  direction = 'right',
  onClick,
  size = 'md',
  variant = 'circle',
  asDiv = false,
  colorVariant = 'black',
  ariaLabel
}: ArrowButtonProps) {
  const colorClasses = colorVariant === 'white' 
    ? 'bg-white border-2 border-black hover:bg-gray-100'
    : 'bg-black text-white'
  
  const baseClasses = joinClasses(
    sizeClasses[size],
    variant === 'circle' ? 'rounded-full' : 'rounded-lg',
    colorClasses,
    'flex items-center justify-center',
    'transition-all duration-200',
    'cursor-pointer',
    asDiv ? 'hover:bg-owndays-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-owndays-dark-green active:scale-95' : colorVariant === 'black' ? 'hover:bg-owndays-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-owndays-dark-green active:scale-95' : 'focus:outline-none active:scale-95'
  )

  const directionLabels = {
    left: '左',
    right: '右',
    up: '上',
    down: '下',
  }

  const finalAriaLabel = ariaLabel || `${directionLabels[direction]}へ移動`

  if (asDiv) {
    return (
      <div className={baseClasses} aria-label={finalAriaLabel} role="button" tabIndex={0}>
        <ArrowIcon direction={direction} size={size} aria-hidden="true" />
      </div>
    )
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      aria-label={finalAriaLabel}
    >
      <ArrowIcon direction={direction} size={size} aria-hidden="true" />
    </button>
  )
}

