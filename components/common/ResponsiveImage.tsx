import Image from 'next/image'

interface ResponsiveImageProps {
  desktopSrc: string
  mobileSrc?: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  imageClassName?: string
  sizes?: string
}

export default function ResponsiveImage({
  desktopSrc,
  mobileSrc,
  alt,
  width,
  height,
  priority = false,
  className = '',
  imageClassName = '',
  sizes
}: ResponsiveImageProps) {
  return (
    <div className={`relative w-full h-auto ${className}`}>
      <div className="hidden md:block">
        <Image
          src={desktopSrc}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-auto object-contain ${imageClassName}`}
          priority={priority}
          loading={priority ? undefined : 'lazy'}
          sizes={sizes}
        />
      </div>
      {(mobileSrc || desktopSrc) && (
        <div className="md:hidden">
          <Image
            src={mobileSrc || desktopSrc}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-auto object-contain ${imageClassName}`}
            priority={priority}
            loading={priority ? undefined : 'lazy'}
            sizes={sizes}
          />
        </div>
      )}
    </div>
  )
}

