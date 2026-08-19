import { useEffect, useState } from 'react'
import { useScrollReveal } from './useScrollReveal'

export function useCounter(target, { duration = 1600 } = {}) {
  const { ref, inView } = useScrollReveal({ threshold: 0.4 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(target * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])

  return { ref, value }
}