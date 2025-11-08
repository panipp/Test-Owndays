import React from 'react'
import SpeechBubble from './SpeechBubble'
import ArrowButton from './ArrowButton'

interface Option {
  id: number | string
  title: string
  description: string
  price: string
  tax: string
}

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
    <div className={`mb-16 md:mb-20 w-screen ${backgroundColor} py-16 lg:py-24 ${className}`} style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:items-center">
          <div className="md:w-1/3 flex-shrink-0 md:justify-items-center">
            <SpeechBubble label={speechBubbleLabel} arrowPosition="right" align="left" className="mb-1" textColor="black" />
            <p className="text-black text-2xl lg:text-3xl font-bold mb-12 md:mb-0 font-mizolet">{title}</p>
          </div>
          
          <div className="flex-1">
            <div className="space-y-4 lg:flex lg:flex-row lg:space-y-0 lg:gap-4">
              {options.map((option) => (
                <div key={option.id} className="group bg-white rounded-lg px-6 py-2 flex items-stretch justify-between gap-4 border-t-2 border-l-2 border-r-2 border-b-[4px] border-black hover:shadow-lg transition-shadow font-mizolet lg:flex-1">
                  <div className="flex-1 text-left my-2 leading-[2rem]">
                    <p className="text-black font-bold text-md mb-1">{option.title}</p>
                    <p className="text-black text-xs mb-1 leading-relaxed">{option.description}</p>
                    <p className="text-black font-bold">
                      <span className="text-xl">{option.price}</span>
                      <span className="text-sm ml-1">{option.tax}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-4 self-stretch">
                    <div className="w-[2px] h-full bg-black" aria-hidden="true"></div>
                    <ArrowButton direction="right" size="sm" asDiv />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
