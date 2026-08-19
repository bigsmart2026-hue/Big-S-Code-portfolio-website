import { useEffect, useRef, useState } from 'react'

export function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
  const [inView, setInView] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const ref = useRef(null)

  useEffect(() => {
    if (inView) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [inView, threshold, rootMargin])

  return { ref, inView }
}