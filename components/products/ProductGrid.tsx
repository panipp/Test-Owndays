import ProductCard from '@/components/products/ProductCard'
import { Product } from '@/lib/types'
import { BadgeVariant, ButtonVariant, Variant } from '@/lib/types'

interface ProductGridProps {
  products: Product[]
  variant?: Variant
  buttonVariant?: ButtonVariant
  badgeVariant?: BadgeVariant
  className?: string
  gridClassName?: string
}

export default function ProductGrid({
  products,
  variant = 'desktop',
  buttonVariant = 'rounded',
  badgeVariant = 'green',
  className = '',
  gridClassName = ''
}: ProductGridProps) {
  const containerClass = variant === 'desktop' 
    ? 'bg-white rounded-2xl p-4 mb-8 lg:mb-32'
    : 'mb-16 bg-white rounded-3xl p-4 text-center'
  
  const gridClass = variant === 'desktop'
    ? 'grid grid-cols-3 gap-6'
    : 'grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4'

  return (
    <div className={`${containerClass} ${className}`}>
      <div className={`${gridClass} ${gridClassName}`}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            variant={variant}
            buttonVariant={buttonVariant}
            badgeVariant={badgeVariant}
            className={variant === 'mobile' ? 'font-outfit' : ''}
          />
        ))}
      </div>
    </div>
  )
}

