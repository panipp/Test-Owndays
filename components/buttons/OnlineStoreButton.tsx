
interface OnlineStoreButtonProps {
  productName?: string
  variant?: 'rounded' | 'square'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const VARIANT_CLASSES = {
  rounded: 'bg-white border-t-2 border-l-2 border-r-2 border-b-[4px] border-black rounded-full hover:shadow-lg transition-shadow font-bold',
  square: 'bg-white border-2 border-black rounded-lg hover:bg-gray-50 transition-colors'
}

const SIZE_CLASSES = {
  sm: 'py-2 px-4 text-xs',
  md: 'py-4 px-10 text-sm',
  lg: 'py-3 px-6 text-base'
}

export default function OnlineStoreButton({
  productName,
  variant = 'rounded',
  size = 'md',
  className = ''
}: OnlineStoreButtonProps) {
  const baseClasses = `${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`
  
  return (
    <button
      className={baseClasses}
      aria-label={productName ? `${productName}をオンラインストアで購入` : 'オンラインストアで購入'}
    >
      ONLINE STORE
    </button>
  )
}

