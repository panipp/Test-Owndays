import ArrowButton from './ArrowButton'

interface OptionBoxProps {
  text: string
  onClick?: () => void
  variant?: 'desktop' | 'mobile'
  textWrap?: 'nowrap' | 'pre-line'
  className?: string
}

const BORDER_CLASSES = 'border-t-2 border-l-2 border-r-2 border-b-[4px] border-black'
const BASE_BUTTON_CLASSES = 'bg-white rounded-lg hover:shadow-lg transition-shadow font-mizolet'

export default function OptionBox({
  text,
  onClick,
  variant = 'mobile',
  textWrap = 'pre-line',
  className = ''
}: OptionBoxProps) {
  const textWrapClass = textWrap === 'nowrap' ? 'whitespace-nowrap' : 'whitespace-pre-line'

  if (variant === 'desktop') {
    return (
      <button
        onClick={onClick}
        className={`group flex-1 h-full ${BASE_BUTTON_CLASSES} px-6 py-2 flex items-center justify-between gap-4 ${BORDER_CLASSES} text-left ${className}`}
        aria-label={`${text}を選択`}
      >
        <span className="text-black text-base flex-1 text-center">{text}</span>
        <div className="flex items-center gap-4 h-full">
          <div className="w-[2px] h-full bg-black" aria-hidden="true"></div>
          <ArrowButton direction="down" size="sm" asDiv />
        </div>
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`${BASE_BUTTON_CLASSES} p-4 flex flex-col items-center justify-center ${BORDER_CLASSES} ${className}`}
      aria-label={`${text}を選択`}
    >
      <span className={`text-black text-sm text-center mb-3 ${textWrapClass}`}>{text}</span>
      <ArrowButton direction="down" size="sm" asDiv />
    </button>
  )
}