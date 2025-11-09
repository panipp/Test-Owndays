import { ReactNode } from 'react'
import { fullWidthStyles, joinClasses } from '@/lib/utils'

interface FullWidthSectionProps {
  children: ReactNode
  backgroundColor?: string
  className?: string
  py?: string
}

export default function FullWidthSection({
  children,
  backgroundColor = 'bg-white',
  className = '',
  py = 'py-8 lg:py-16'
}: FullWidthSectionProps) {
  return (
    <div 
      className={joinClasses('w-screen', backgroundColor, py, className)}
      style={fullWidthStyles}
    >
      {children}
    </div>
  )
}

