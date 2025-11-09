import { ReactNode } from 'react'

interface CircularBadgeProps {
  children: string
}

function CircularBadge({ children }: CircularBadgeProps) {
  return (
    <span className="inline-flex items-center justify-center bg-black text-white rounded-full w-6 h-6 text-xl font-light">
      {children}
    </span>
  )
}

interface SectionHeaderProps {
  text: string | string[]
  badges?: string[]
  className?: string
  align?: 'left' | 'center'
  variant?: 'single' | 'multi'
}

export default function SectionHeader({
  text,
  badges = [],
  className = '',
  align = 'left',
  variant = 'single'
}: SectionHeaderProps) {
  const textArray = Array.isArray(text) ? text : [text]
  const alignClass = align === 'center' ? 'justify-center md:justify-start' : 'justify-start'
  
  // For multi-line variant (used in FamilySection mobile)
  if (variant === 'multi' && textArray.length > 1) {
    return (
      <div className={className}>
        <div className="mb-4 font-mizolet font-bold">
          <p className={`text-black text-xl ${align === 'center' ? 'text-center md:text-left' : 'text-left'}`}>
            {textArray[0]}
          </p>
          <div className={`flex items-center gap-1 ${alignClass}`}>
            {textArray.slice(1).map((t, index) => (
              <p key={index} className="text-black text-xl">{t}</p>
            ))}
            {badges.map((badge, index) => (
              <CircularBadge key={index}>{badge}</CircularBadge>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className={className}>
      <div className="mb-4 font-mizolet font-bold">
        <div className={`flex items-center gap-1 flex-wrap ${alignClass}`}>
          {textArray.map((t, index) => (
            <p key={index} className="text-black text-xl">{t}</p>
          ))}
          {badges.map((badge, index) => (
            <CircularBadge key={index}>{badge}</CircularBadge>
          ))}
        </div>
      </div>
    </div>
  )
}

