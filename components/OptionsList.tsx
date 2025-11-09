import SpeechBubble from './SpeechBubble'
import FullWidthSection from './FullWidthSection'
import OptionCard from './OptionCard'
import { Option } from '@/lib/types'

interface OptionsListProps {
  options: Option[]
  backgroundColor?: string
  speechBubbleLabel?: string
  title?: string
  className?: string
}

export default function OptionsList({
  options,
  backgroundColor = 'bg-owndays-green-2',
  speechBubbleLabel = 'OPTION',
  title = 'おすすめオプション',
  className = ''
}: OptionsListProps) {
  return (
    <FullWidthSection backgroundColor={backgroundColor} className={className} py="py-16 lg:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:items-center">
          <div className="md:w-1/3 flex-shrink-0 justify-items-center">
            <SpeechBubble label={speechBubbleLabel} arrowPosition="right" align="left" className="mb-1" textColor="black" />
            <p className="text-2xl lg:text-3xl font-bold mb-12 md:mb-0 font-mizolet">{title}</p>
          </div>
          
          <div className="flex-1">
            <div className="space-y-4 lg:flex lg:flex-row lg:space-y-0 lg:gap-4">
              {options.map((option) => (
                <OptionCard key={option.id} option={option} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </FullWidthSection>
  )
}
