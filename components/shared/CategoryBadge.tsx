
interface CategoryBadgeProps {
  category: string
  variant?: 'green' | 'brown'
  size?: 'sm' | 'md'
  className?: string
}

const variantClasses = {
  green: 'bg-owndays-green-2 text-white',
  brown: 'bg-owndays-brown-2 text-white'
}

const sizeClasses = {
  sm: 'text-xs px-2 py-1',
  md: 'text-xs px-6 py-1.5'
}

export default function CategoryBadge({
  category,
  variant = 'green',
  size = 'sm',
  className = ''
}: CategoryBadgeProps) {
  return (
    <div className={`${variantClasses[variant]} font-bold ${sizeClasses[size]} rounded-full mb-2 inline-block ${className}`}>
      {category}
    </div>
  )
}

