
interface PriceDisplayProps {
  price: string
  tax: string
  className?: string
}

export default function PriceDisplay({
  price,
  tax,
  className = ''
}: PriceDisplayProps) {
  return (
    <p className={`mb-4 ${className}`}>
      <span className="font-bold text-xl">{price}</span>
      <span className="text-sm ml-1">{tax}</span>
    </p>
  )
}

