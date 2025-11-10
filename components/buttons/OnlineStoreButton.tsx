interface OnlineStoreButtonProps {
  productName?: string
  variant?: 'rounded' | 'square'
  className?: string
}

const variantClasses = {
  rounded: 'bg-white border-t-2 border-l-2 border-r-2 border-b-[4px] border-black rounded-full hover:shadow-lg transition-shadow font-bold',
  square: 'bg-white border-2 border-black rounded-lg hover:bg-gray-50 transition-colors'
}

export default function OnlineStoreButton({
  productName,
  variant = 'rounded',
  className = ''
}: OnlineStoreButtonProps) {
  return (
    <button
      className={`${variantClasses[variant]} py-4 px-2 text-sm w-48 ${className}`}
      aria-label={productName ? `${productName}をオンラインストアで購入` : 'オンラインストアで購入'}
    >
      ONLINE STORE
    </button>
  )
}

