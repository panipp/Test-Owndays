import React from 'react'

interface CategoryBadgeProps {
  category: string
  variant?: 'green' | 'brown'
  size?: 'sm' | 'md'
  className?: string
}

const VARIANT_CLASSES = {
  green: 'bg-owndays-green-2 text-white',
  brown: 'bg-owndays-brown-1 text-white'
}

const SIZE_CLASSES = {
  sm: 'text-xs px-2 py-1',
  md: 'text-xs px-6 py-1.5'
}

export default function CategoryBadge({
  category,
  variant = 'green',
  size = 'sm',
  className = ''
}: CategoryBadgeProps) {
  return (
    <div className={`${VARIANT_CLASSES[variant]} font-bold ${SIZE_CLASSES[size]} rounded-full mb-2 inline-block ${className}`}>
      {category}
    </div>
  )
}

