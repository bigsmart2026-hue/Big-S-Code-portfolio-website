import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useMousePosition } from '../hooks/useMousePosition'
import { useCursorStore } from '../store/cursorStore'

export default function CustomCursor() {
  const finePointer = useMediaQuery('(pointer: fine)')
  const pos = useMousePosition()
  const variant = useCursorStore((s) => s.variant)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 260, damping: 24, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 260, damping: 24, mass: 0.4 })

  useEffect(() => {
    if (!finePointer) return
    let raf = 0
    const loop = () => {
      raf = requestAnimationFrame(loop)
      x.set(pos.current.x)
      y.set(pos.current.y)
    }
    loop()
    return () => cancelAnimationFrame(raf)
  }, [finePointer, pos, x, y])

  useEffect(() => {
    if (!finePointer) return
    const setVariant = useCursorStore.getState().setVariant
    const onOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, [role="button"], [data-hover]')
      if (!target) {
        setVariant('default')
        return
      }
      setVariant(target.closest('input, textarea') ? 'text' : 'hover')
    }
    window.addEventListener('mouseover', onOver, { passive: true })
    return () => window.removeEventListener('mouseover', onOver)
  }, [finePointer])

  useEffect(() => {
    document.body.classList.toggle('cursor-custom', finePointer)
    return () => document.body.classList.remove('cursor-custom')
  }, [finePointer])

  if (!finePointer) return null

  const ringClass =
    variant === 'hover'
      ? 'h-14 w-14 border-mint/80'
      : variant === 'text'
        ? 'h-7 w-7 border-mint'
        : 'h-9 w-9 border-moss/50'

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 rounded-full bg-mint"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        aria-hidden
        className={`pointer-events-none fixed left-0 top-0 z-[99] rounded-full border transition-[width,height,border-color] duration-300 ${ringClass}`}
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  )
}