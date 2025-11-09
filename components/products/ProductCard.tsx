import Image from 'next/image'
import FavoriteButton from '@/components/buttons/FavoriteButton'
import CategoryBadge from '@/components/common/CategoryBadge'
import PriceDisplay from '@/components/common/PriceDisplay'
import OnlineStoreButton from '@/components/buttons/OnlineStoreButton'
import { Product, BadgeVariant, ButtonVariant, Variant } from '@/lib/types'

interface ProductCardProps {
  product: Product
  variant?: Variant
  showFavorite?: boolean
  buttonVariant?: ButtonVariant
  badgeVariant?: BadgeVariant
  className?: string
}

export default function ProductCard({
  product,
  variant = 'desktop',
  showFavorite = true,
  buttonVariant = 'rounded',
  badgeVariant = 'green',
  className = ''
}: ProductCardProps) {
  const imageSrc = variant === 'mobile' && product.imageMobile ? product.imageMobile : product.image
  const imageHeight = variant === 'mobile' ? 'h-40' : 'h-32'
  const gapClass = variant === 'mobile' ? 'gap-8 md:gap-3' : 'gap-2'

  return (
    <div className={`p-4 ${className} md:text-center`}>
      <CategoryBadge
        category={product.category}
        variant={badgeVariant}
        size={variant === 'mobile' ? 'md' : 'sm'}
      />
      <p className="font-bold text-base mb-1">{product.name}</p>
      <p className="text-xs mb-3">{product.model}</p>
      <div className={`relative w-full ${imageHeight} mb-3`}>
        <Image
          src={imageSrc}
          alt={`${product.name} ${product.model} - ${product.category} - ${product.price}`}
          fill
          className="object-contain"
          loading="lazy"
          sizes={variant === 'mobile' ? '(max-width: 768px) 50vw, 384px' : '(max-width: 1024px) 100vw, 384px'}
        />
      </div>
      <PriceDisplay price={product.price} tax={product.tax} />
      <div className={`flex items-center justify-center ${gapClass}`}>
        <OnlineStoreButton
          productName={product.name}
          variant={buttonVariant}
          size="md"
          className="w-auto"
        />
        {showFavorite && <FavoriteButton productId={product.id} size="sm" />}
      </div>
    </div>
  )
}

