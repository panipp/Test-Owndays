import SpeechBubbleArrow from '@/components/common/SpeechBubbleArrow'

interface SpeechBubbleProps {
  label: string
  arrowPosition?: 'left' | 'center' | 'right'
  align?: 'left' | 'center' | 'right'
  className?: string
  textColor?: 'red' | 'black'
}

const ALIGN_CLASSES = {
  left: 'justify-start',
  center: 'justify-center',
  right: 'justify-end'
}

const BORDER_CLASSES = 'border-t-2 border-l-2 border-r-2 border-b-4 border-black'
const TEXT_COLOR_CLASSES = {
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
    <div className={`relative flex ${ALIGN_CLASSES[align]} ${className}`}>
      <div 
        className={`bg-white rounded-lg px-6 py-1 relative ${BORDER_CLASSES} mb-3`}
        role="note" 
        aria-label={label}
      >
        <p className={`${TEXT_COLOR_CLASSES[textColor]} text-sm font-bold uppercase font-outfit`}>{label}</p>
        <SpeechBubbleArrow position={arrowPosition} variant="desktop" />
        <SpeechBubbleArrow position={arrowPosition} variant="mobile" />
      </div>
    </div>
  )
}

