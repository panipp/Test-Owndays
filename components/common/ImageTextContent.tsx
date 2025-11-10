import Image from 'next/image'
import { ReactNode } from 'react'

interface ImageTextContentProps {
  imageSrc: string
  imageAlt: string
  imageMobileSrc?: string
  variant?: 'desktop' | 'mobile'
  children: ReactNode
  imageClassName?: string
  contentClassName?: string
  unoptimized?: boolean
}

export default function ImageTextContent({
  imageSrc,
  imageAlt,
  imageMobileSrc,
  variant = 'desktop',
  children,
  imageClassName = '',
  contentClassName = '',
  unoptimized = false
}: ImageTextContentProps) {
  const isMobile = variant === 'mobile'
  const imageWidth = isMobile ? 800 : undefined
  const imageHeight = isMobile ? 192 : undefined
  
  return (
    <div className={`flex ${isMobile ? 'flex-col md:flex-row md:items-start' : 'flex-row items-center'} gap-6 ${isMobile ? 'mt-12' : 'mt-12 lg:my-24'}`}>
      <div className={`relative ${isMobile ? 'w-full md:w-1/2 h-48' : 'w-1/2 h-64'} flex-shrink-0 ${imageClassName}`}>
        {isMobile && imageMobileSrc ? (
          <Image
            src={imageMobileSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="w-full h-full object-contain"
            loading="lazy"
            unoptimized={unoptimized}
          />
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-contain"
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 512px"
            unoptimized={unoptimized}
          />
        )}
      </div>
      <div className={`flex-1 ${contentClassName}`}>
        {children}
      </div>
    </div>
  )
}

