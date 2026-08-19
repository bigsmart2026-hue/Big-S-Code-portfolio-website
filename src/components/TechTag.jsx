import { cn } from '../utils/cn'

export default function TechTag({ children, active = false, onClick, className = '' }) {
  const Tag = onClick ? 'button' : 'span'

  return (
    <Tag
      onClick={onClick}
      type={onClick ? 'button' : undefined}
      className={cn(
        'rounded-full border px-3.5 py-1.5 font-mono text-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_22px_-6px_color-mix(in_srgb,var(--mint)_55%,transparent)]',
        active
          ? 'border-mint/70 bg-mint/10 text-mint'
          : 'border-line-bright text-moss hover:border-mint/70 hover:text-mint',
        className,
      )}
    >
      {children}
    </Tag>
  )
}