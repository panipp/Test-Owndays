
interface PriceDisplayProps {
  price: string
  tax: string
  priceSize?: 'lg' | 'xl'
  className?: string
}

const PRICE_SIZE_CLASSES = {
  lg: 'text-lg',
  xl: 'text-xl'
}

export default function PriceDisplay({
  price,
  tax,
  priceSize = 'xl',
  className = ''
}: PriceDisplayProps) {
  return (
    <p className={`mb-4 ${className}`}>
      <span className={`text-black font-bold ${PRICE_SIZE_CLASSES[priceSize]}`}>{price}</span>
      <span className="text-black text-sm ml-1">{tax}</span>
    </p>
  )
}

