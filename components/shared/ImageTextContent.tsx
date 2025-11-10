import Image from 'next/image'
import { ReactNode } from 'react'
import { joinClasses } from '@/lib/utils'

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
  
  const containerClasses = joinClasses(
    'flex gap-6',
    isMobile ? 'flex-col md:flex-row md:items-start mt-12' : 'flex-row items-center mt-12 lg:my-24'
  )
  
  const imageContainerClasses = joinClasses(
    'relative flex-shrink-0',
    isMobile ? 'w-full md:w-1/2 h-48' : 'w-1/2 h-64',
    imageClassName
  )
  
  return (
    <div className={containerClasses}>
      <div className={imageContainerClasses}>
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
      <div className={joinClasses('flex-1', contentClassName)}>
        {children}
      </div>
    </div>
  )
}

