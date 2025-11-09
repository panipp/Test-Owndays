import ArrowButton from '@/components/buttons/ArrowButton'
import { Option } from '@/lib/types'

interface OptionCardProps {
  option: Option
  className?: string
}

export default function OptionCard({ option, className = '' }: OptionCardProps) {
  return (
    <div 
      className={`group bg-white rounded-lg px-6 py-2 flex items-stretch justify-between gap-4 border-t-2 border-l-2 border-r-2 border-b-[4px] border-black hover:shadow-lg transition-shadow font-mizolet lg:flex-1 ${className}`}
    >
      <div className="flex-1 text-left my-2 leading-[2rem]">
        <p className="font-bold text-md mb-1">{option.title}</p>
        <p className="text-xs mb-1 leading-relaxed">{option.description}</p>
        <p className="font-bold">
          <span className="text-xl">{option.price}</span>
          <span className="text-sm ml-1">{option.tax}</span>
        </p>
      </div>
      <div className="flex items-center gap-4 self-stretch">
        <div className="w-[2px] h-full bg-black" aria-hidden="true" />
        <ArrowButton direction="right" size="sm" asDiv />
      </div>
    </div>
  )
}

