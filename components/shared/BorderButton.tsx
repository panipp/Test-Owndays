import { ReactNode } from 'react'
import ArrowButton from '@/components/buttons/ArrowButton'
import { joinClasses } from '@/lib/utils'

interface BorderButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'rounded' | 'square'
  size?: 'sm' | 'md' | 'lg'
  arrowDirection?: 'right' | 'down' | 'left' | 'up'
  showArrow?: boolean
  className?: string
}

const variantClasses = {
  rounded: 'rounded-full',
  square: 'rounded-lg'
}

const sizeClasses = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base'
}

const borderClasses = 'border-t-2 border-l-2 border-r-2 border-b-[4px] border-black'

export default function BorderButton({
  children,
  onClick,
  variant = 'rounded',
  size = 'md',
  arrowDirection = 'right',
  showArrow = true,
  className = ''
}: BorderButtonProps) {
  const baseClasses = joinClasses(
    'group bg-white',
    borderClasses,
    variantClasses[variant],
    sizeClasses[size],
    'flex items-center gap-3',
    'hover:shadow-lg transition-shadow font-bold',
    className
  )

  if (onClick) {
    return (
      <button onClick={onClick} className={baseClasses}>
        <span className="whitespace-nowrap">{children}</span>
        {showArrow && <ArrowButton direction={arrowDirection} size="sm" asDiv />}
      </button>
    )
  }

  return (
    <div className={baseClasses}>
      <span className="whitespace-nowrap">{children}</span>
      {showArrow && <ArrowButton direction={arrowDirection} size="sm" asDiv />}
    </div>
  )
}

