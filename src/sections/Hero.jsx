import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { site } from '../data/site'
import Terminal from '../components/Terminal'
import Button from '../components/Button'
import MagneticButton from '../components/MagneticButton'
import { scrollToId } from '../utils/scroll'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
}

const word = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const floatingTags = [
  { label: 'React', className: '-left-4 top-8 lg:-left-8', delay: '0s' },
  { label: 'Firebase', className: '-right-3 top-24 lg:-right-8', delay: '0.8s' },
  { label: 'Tailwind', className: '-bottom-5 -left-2 lg:-left-6', delay: '1.4s' },
  { label: 'UI/UX', className: 'right-0 bottom-16 lg:-right-5', delay: '0.4s' },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yTerminal = useTransform(scrollYProgress, [0, 1], [0, 90])
  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, 45])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const words = site.headline.split(' ')

  return (
    <section
      id="home"
      ref={ref}
      className="relative overflow-hidden bg-grid"
      style={{ scrollMarginTop: 0 }}
    >
      <motion.div
        aria-hidden
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute inset-x-0 top-0 h-[42rem]"
      >
        <div className="absolute left-1/2 top-[-18rem] h-[30rem] w-[44rem] -translate-x-1/2 rounded-full bg-mint/10 blur-3xl" />
      </motion.div>

      <div className="mx-auto grid min-h-svh max-w-6xl items-center gap-14 px-5 pb-16 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:pt-24">
        <motion.div variants={container} initial="hidden" animate="show" style={{ y: yHeadline }}>
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-mint/30 bg-mint/5 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            <span className="font-mono text-xs text-mint">{site.status}</span>
          </div>

          <h1 className="font-sans text-[2.6rem] font-bold leading-[1.04] tracking-[-0.03em] text-bone sm:text-6xl lg:text-[4.2rem]">
            {words.map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className={`mr-[0.28em] inline-block ${
                  w === 'REMEMBER.' ? 'text-mint text-glow' : ''
                }`}
              >
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={word}
            className="mt-7 max-w-xl text-base leading-relaxed text-moss sm:text-lg"
          >
            {site.sub}
          </motion.p>

          <motion.p
            variants={word}
            className="mt-4 font-mono text-sm text-moss"
          >
            <span className="text-mint">{site.role}</span> · {site.roleAlt} ·{' '}
            {site.tagline}
          </motion.p>

          <motion.div variants={word} className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton>
              <Button size="lg" onClick={(e) => { e.preventDefault(); scrollToId('work') }}>
                Explore Work <span aria-hidden>↓</span>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                size="lg"
                variant="outline"
                onClick={(e) => { e.preventDefault(); scrollToId('contact') }}
              >
                Contact Me
              </Button>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: yTerminal }}
          className="relative"
        >
          <Terminal />
          {floatingTags.map((tag) => (
            <span
              key={tag.label}
              className={`absolute animate-float rounded-full border border-line bg-panel px-3.5 py-1.5 font-mono text-xs text-moss shadow-[0_12px_32px_-12px_rgba(0,0,0,0.45)] ${tag.className}`}
              style={{ animationDelay: tag.delay }}
            >
              <span className="text-mint">#</span> {tag.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}