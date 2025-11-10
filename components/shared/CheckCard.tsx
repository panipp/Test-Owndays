import Image from 'next/image'
import SpeechBubble from '@/components/shared/SpeechBubble'
import ArrowButton from '@/components/buttons/ArrowButton'

interface CheckCardProps {
  imageSrc: string
  imageMobileSrc?: string
  imageAlt: string
  title: string
  subtitle: string
  highlightText?: string
  variant?: 'desktop' | 'mobile'
}

export default function CheckCard({
  imageSrc,
  imageMobileSrc,
  imageAlt,
  title,
  subtitle,
  highlightText,
  variant = 'desktop'
}: CheckCardProps) {
  if (variant === 'mobile') {
    return (
      <div className="bg-white rounded-3xl p-2 relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 -translate-x-1/4 z-10">
          <SpeechBubble label="CHECK!" arrowPosition="right" align="right" textColor="black" />
        </div>
        <div className="px-10 pt-10 text-center">
          <div className="relative w-full h-32 mb-4">
            <Image 
              src={imageMobileSrc || imageSrc} 
              alt={imageAlt} 
              fill 
              className="object-contain" 
              loading="lazy" 
              sizes="100vw" 
            />
          </div>
          <p className="font-bold text-sm mb-2">
            {title}
            {highlightText && <span className="bg-owndays-yellow px-1">{highlightText}</span>}
          </p>
          <p className="text-xl font-bold mb-4">{subtitle}</p>
        </div>
        <div className="group flex justify-end">
          <div className="rotate-45">
            <ArrowButton direction="right" size="sm" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl p-2 relative lg:max-w-3xl lg:mx-auto">
      <div className="absolute top-0 right-0 -translate-y-1/2 -translate-x-1/4 z-10">
        <SpeechBubble label="CHECK!" arrowPosition="right" align="right" textColor="black" />
      </div>
      <div className="flex flex-row items-center gap-6 p-6 lg:py-2">
        <div className="relative w-1/3 h-52 flex-shrink-0">
          <Image 
            src={imageSrc} 
            alt={imageAlt} 
            fill 
            className="object-contain" 
            loading="lazy" 
            sizes="100vw" 
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-bold text-sm md:text-lg lg:text-xl mb-2 text-left">
                {title}
                {highlightText && <span className="bg-owndays-yellow px-1">{highlightText}</span>}
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-left">{subtitle}</p>
            </div>
            <div className="group flex-shrink-0">
              <ArrowButton direction="right" size="sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

