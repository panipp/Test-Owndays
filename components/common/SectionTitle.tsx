
interface SectionTitleProps {
  title: string
  subtitle: string
  variant?: 'desktop' | 'mobile'
  className?: string
}


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
          className="text-4xl lg:text-6xl text-owndays-red font-outfit mb-2 font-bold tracking-[0.15em] lg:tracking-[0.1em] text-shadow-outline"
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
          className="text-4xl text-owndays-red font-outfit mb-2 font-bold tracking-[0.15em] text-shadow-outline"
      >
        {title}
      </h2>
      <p className="text-sm font-mizolet">{subtitle}</p>
    </div>
  )
}

