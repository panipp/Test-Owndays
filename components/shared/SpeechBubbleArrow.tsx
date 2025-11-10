import { joinClasses } from '@/lib/utils'

interface SpeechBubbleArrowProps {
  position: 'left' | 'center' | 'right'
  variant?: 'desktop' | 'mobile'
}

const arrowPositions = {
  desktop: {
    left: 'left-1/4',
    center: 'left-1/2',
    right: 'right-1/4'
  },
  mobile: {
    left: 'left-1/3',
    center: 'left-1/2',
    right: 'right-1/4'
  }
}

const translateClasses = {
  center: '-translate-x-1/2',
  right: 'translate-x-1/2',
  left: '-translate-x-1/2'
}

export default function SpeechBubbleArrow({ position, variant = 'desktop' }: SpeechBubbleArrowProps) {
  const positionClass = arrowPositions[variant][position]
  const translateClass = translateClasses[position]
  const displayClass = variant === 'desktop' ? 'hidden lg:block' : 'lg:hidden'

  return (
    <div className={joinClasses(
      displayClass,
      'absolute bottom-[-10px]',
      positionClass,
      translateClass
    )}>
      <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-black" />
      <div className="absolute top-[-2px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-white" />
    </div>
  )
}

