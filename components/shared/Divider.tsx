interface DividerProps {
  orientation?: 'vertical' | 'horizontal'
  className?: string
}

export default function Divider({ orientation = 'vertical', className = '' }: DividerProps) {
  if (orientation === 'horizontal') {
    return <div className={`w-full h-[2px] bg-black ${className}`} aria-hidden="true" />
  }
  
  return <div className={`w-[2px] h-full bg-black ${className}`} aria-hidden="true" />
}

