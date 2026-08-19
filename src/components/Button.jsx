import { cn } from '../utils/cn'

const variants = {
  primary:
    'bg-mint text-ink hover:bg-mint-bright hover:shadow-[0_0_36px_-8px_color-mix(in_srgb,var(--mint)_70%,transparent)]',
  outline: 'border border-line-bright text-bone hover:border-mint hover:text-mint',
  ghost: 'text-moss hover:text-mint',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  as: Tag = 'a',
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-mono font-semibold tracking-wide transition-all duration-300',
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}