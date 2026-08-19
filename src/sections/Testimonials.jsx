import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const { ref, inView } = useScrollReveal({ threshold: 0.15 })

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 5200)
    return () => clearInterval(timer)
  }, [paused])

  const active = testimonials[index]

  return (
    <section id="testimonials" className="border-y border-line bg-panel/30">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <div ref={ref}>
          <SectionLabel index="07">testimonials</SectionLabel>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-bone sm:text-4xl">
            People I've <span className="text-mint">shipped with.</span>
          </h2>

          <div
            className="mt-12 overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={inView ? { opacity: 0, y: 24 } : false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto max-w-3xl text-center"
              >
                <p className="font-sans text-xl font-semibold leading-relaxed tracking-tight text-bone sm:text-2xl lg:text-[1.7rem]">
                  “{active.quote}”
                </p>
                <footer className="mt-8 flex items-center justify-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-mint/50 bg-mint/10 font-mono text-sm font-semibold text-mint">
                    {active.initials}
                  </span>
                  <span className="text-left">
                    <span className="block font-sans text-sm font-bold text-bone">{active.name}</span>
                    <span className="block font-mono text-xs text-moss">{active.role}</span>
                  </span>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line-bright text-moss transition-all hover:border-mint hover:text-mint"
            >
              ←
            </button>
            <div className="flex gap-2.5">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-7 bg-mint' : 'w-1.5 bg-line-bright hover:bg-moss'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((index + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line-bright text-moss transition-all hover:border-mint hover:text-mint"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}