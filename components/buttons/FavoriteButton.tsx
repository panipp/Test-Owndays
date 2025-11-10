'use client'

import React, { useState } from 'react'

interface FavoriteButtonProps {
  className?: string
}

export default function FavoriteButton({ 
  className = ''
}: FavoriteButtonProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorited(!isFavorited)
  }

  return (
    <button
      onClick={handleClick}
      className={`
        w-8 h-8
        transition-all
        duration-200
        outline-none
        focus:outline-none
        focus:ring-0
        focus:ring-offset-0
        active:scale-95
        active:outline-none
        p-0
        group
        ${className}
      `}
      aria-label={isFavorited ? 'お気に入りから削除' : 'お気に入りに追加'}
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

