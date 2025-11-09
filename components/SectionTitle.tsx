
interface SectionTitleProps {
  title: string
  subtitle: string
  variant?: 'desktop' | 'mobile'
  className?: string
}

const TEXT_SHADOW_CLASS = '[text-shadow:-2px_-2px_0_black,2px_-2px_0_black,-2px_2px_0_black,2px_2px_0_black,-2px_0_0_black,2px_0_0_black,0_-2px_0_black,0_2px_0_black]'

export default function SectionTitle({
  title,
  subtitle,
  variant = 'mobile',
  className = ''
}: SectionTitleProps) {
  if (variant === 'desktop') {
    return (
      <div className={`flex-shrink-0 text-center lg:text-left self-center ${className}`}>
        <h2 
          className={`text-4xl lg:text-6xl text-owndays-red font-outfit mb-2 font-bold tracking-[0.15em] lg:tracking-[0.1em] ${TEXT_SHADOW_CLASS}`}
        >
          {title}
        </h2>
        <p className="text-xl font-mizolet">{subtitle}</p>
      </div>
    )
  }

  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 
        className={`text-4xl text-owndays-red font-outfit mb-2 font-bold tracking-[0.15em] ${TEXT_SHADOW_CLASS}`}
      >
        {title}
      </h2>
      <p className="text-sm font-mizolet">{subtitle}</p>
    </div>
  )
}

