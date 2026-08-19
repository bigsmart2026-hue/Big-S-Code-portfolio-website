import { useEffect, useRef } from 'react'

export function useMousePosition() {
  const ref = useRef({ x: 0, y: 0 })

  useEffect(() => {
    let raf = 0
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        ref.current = { x: e.clientX, y: e.clientY }
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return ref
}