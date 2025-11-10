import ArrowButton from '@/components/buttons/ArrowButton'
import Divider from '@/components/shared/Divider'
import { joinClasses } from '@/lib/utils'

interface OptionBoxProps {
  text: string
  onClick?: () => void
  variant?: 'desktop' | 'mobile'
  textWrap?: 'nowrap' | 'pre-line'
  className?: string
}

const borderClasses = 'border-t-2 border-l-2 border-r-2 border-b-[4px] border-black'
const baseButtonClasses = 'bg-white rounded-lg hover:shadow-lg transition-shadow font-mizolet'

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
        className={joinClasses(
          'group flex-1 h-full',
          baseButtonClasses,
          'px-6 py-2 flex items-center justify-between gap-4',
          borderClasses,
          'text-left cursor-default',
          className
        )}
        aria-label={onClick ? `${text}を選択` : text}
      >
        <span className="text-base flex-1 text-center">{text}</span>
        <div className="flex items-center gap-4 h-full">
          <Divider orientation="vertical" />
          <ArrowButton direction="down" size="sm" asDiv />
        </div>
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className={joinClasses(
        baseButtonClasses,
        'p-4 flex flex-col items-center justify-center',
        borderClasses,
        'cursor-default',
        className
      )}
      aria-label={onClick ? `${text}を選択` : text}
    >
      <span className={joinClasses('text-sm text-center mb-3', textWrapClass)}>{text}</span>
      <ArrowButton direction="down" size="sm" asDiv />
    </button>
  )
}