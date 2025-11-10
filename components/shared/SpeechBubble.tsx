import SpeechBubbleArrow from '@/components/shared/SpeechBubbleArrow'
import { joinClasses } from '@/lib/utils'

interface SpeechBubbleProps {
  label: string
  arrowPosition?: 'left' | 'right' | 'center'
  align?: 'left' | 'center' | 'right'
  className?: string
  textColor?: 'red' | 'black'
}

const alignClasses = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end'
}

const borderClasses = 'border-t-2 border-l-2 border-r-2 border-b-4 border-black'
const textColorClasses = {
  red: 'text-owndays-red',
  black: ''
}

export default function SpeechBubble({
  label,
  arrowPosition = 'right',
  align = 'left',
  className = '',
  textColor = 'red'
}: SpeechBubbleProps) {
  return (
    <div className={joinClasses('relative flex', alignClasses[align], className)}>
      <div 
        className={joinClasses(
          'bg-white rounded-lg px-6 py-1 relative',
          borderClasses,
          'mb-3'
        )}
        role="note" 
        aria-label={label}
      >
        <p className={joinClasses(
          textColorClasses[textColor],
          'text-sm font-bold uppercase font-outfit'
        )}>
          {label}
        </p>
        <SpeechBubbleArrow position={arrowPosition} variant="desktop" />
        <SpeechBubbleArrow position={arrowPosition} variant="mobile" />
      </div>
    </div>
  )
}
