import { ReactNode } from 'react'
import { joinClasses } from '@/lib/utils'

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
      className={joinClasses(
        'w-screen',
        '-ml-[calc(50vw-50%)] -mr-[calc(50vw-50%)]',
        backgroundColor,
        py,
        className
      )}
    >
      {children}
    </div>
  )
}

