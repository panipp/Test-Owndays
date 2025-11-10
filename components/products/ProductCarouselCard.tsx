import Image from 'next/image'
import OnlineStoreButton from '@/components/buttons/OnlineStoreButton'
import PriceDisplay from '@/components/shared/PriceDisplay'
import { Product } from '@/lib/types'

interface ProductCarouselCardProps {
  product: Product
}

export default function ProductCarouselCard({ product }: ProductCarouselCardProps) {
  return (
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
        <OnlineStoreButton productName={product.name} />
      </div>
    </div>
  )
}

