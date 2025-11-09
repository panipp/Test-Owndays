'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import ArrowButton from './ArrowButton'
import OnlineStoreButton from './OnlineStoreButton'
import PriceDisplay from './PriceDisplay'
import { Product } from '@/lib/types'

interface ProductCarouselProps {
  products: Product[]
}

export default function ProductCarousel({ products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMdScreen, setIsMdScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdScreen(window.innerWidth >= 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const itemsPerSlide = isMdScreen ? 2 : 1
  const totalSlides = Math.ceil(products.length / itemsPerSlide)
  const maxIndex = Math.max(0, totalSlides - 1)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1))
  }

  // Calculate transform: on md, each slide shows 2 products (50% each), so move by 100% per slide (2 products)
  // On mobile, each slide shows 1 product (100%), so move by 100% per slide
  // The transform moves by the width of itemsPerSlide products
  const translatePercentage = 100

  return (
    <div className="relative">
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * translatePercentage}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-full md:w-1/2 px-2 md:px-4">
              <div className="bg-white rounded-lg p-4 relative font-outfit text-center">
                <div className="relative w-full h-48 mb-4">
                  <Image 
                    src={product.imageMobile || product.image} 
                    alt={`${product.name} ${product.model} - OWNDAYS メガネ`} 
                    fill 
                    className="object-contain" 
                    loading="lazy" 
                    sizes="(max-width: 768px) 100vw, 50vw" 
                  />
                </div>
                <p className="font-bold text-base mb-1">{product.name}</p>
                <p className="text-xs mb-3">{product.model}</p>
                <PriceDisplay price={product.price} tax={product.tax} />
                <div className="flex justify-center">
                  <OnlineStoreButton productName={product.name} variant="rounded" size="md" className="w-auto" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalSlides > 1 && (
          <>
            <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10">
              <ArrowButton 
                direction="left" 
                onClick={goToPrevious}
                size="md"
                colorVariant="white"
              />
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10">
              <ArrowButton 
                direction="right" 
                onClick={goToNext}
                size="md"
                colorVariant="white"
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

