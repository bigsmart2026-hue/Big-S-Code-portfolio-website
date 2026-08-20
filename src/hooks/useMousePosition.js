import { useEffect, useRef } from 'react'

export function useMousePosition() {
  const ref = useRef({ x: 0, y: 0 })

  useEffect(() => {
    let raf = 0
    const set = (x, y) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        ref.current = { x, y }
      })
    }
    const onMove = (e) => set(e.clientX, e.clientY)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return ref
}