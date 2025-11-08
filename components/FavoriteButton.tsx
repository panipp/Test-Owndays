'use client'

import React, { useState } from 'react'

interface FavoriteButtonProps {
  productId: string | number
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function FavoriteButton({ 
  productId, 
  className = '',
  size = 'md'
}: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorited(!isFavorited)
  }

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }

  return (
    <button
      onClick={handleClick}
      className={`
        ${sizeClasses[size]}
        transition-all
        duration-200
        focus:outline-none
        active:scale-95
        p-0
        group
        ${className}
      `}
      aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={isFavorited}
    >
      <svg
        className="w-full h-full"
        fill={isFavorited ? '#B8181E' : 'none'}
        stroke={isFavorited ? '#B8181E' : 'currentColor'}
        strokeWidth={1}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={!isFavorited ? 'group-hover:!fill-white group-hover:!stroke-[#B8181E]' : ''}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  )
}

