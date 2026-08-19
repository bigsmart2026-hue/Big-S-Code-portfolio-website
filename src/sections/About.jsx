import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCounter } from '../hooks/useCounter'
import { site } from '../data/site'
import photo1 from '../assets/photo-1.jpg'
import photo2 from '../assets/photo-2.jpg'

const metadata = [
  { label: 'Role', value: 'Front-End Engineer' },
  { label: 'Focus', value: 'React · Tailwind · Firebase' },
  { label: 'Based', value: 'Remote · Worldwide' },
  { label: 'Status', value: 'Available' },
]

function Stat({ stat }) {
  const { ref, value } = useCounter(stat.value)
  return (
    <div ref={ref}>
      <p className="font-sans text-3xl font-bold tracking-tight text-bone sm:text-4xl">
        <span className="text-mint">{value}</span>
        {stat.suffix}
      </p>
      <p className="mt-1 font-mono text-xs text-moss">{stat.label}</p>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30])
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -60])
  const { ref: revealRef, inView } = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div ref={revealRef} className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mb-12 w-full max-w-sm lg:max-w-none"
        >
          <div ref={ref} className="relative">
            <div
              aria-hidden
              className="absolute -left-4 -top-4 h-[88%] w-[86%] rounded-2xl border border-mint/30"
            />
            <motion.img
              style={{ y: y1 }}
              src={photo1}
              alt="Big S-Code portrait"
              loading="lazy"
              className="aspect-[3/4] w-full rounded-2xl border border-line object-cover"
            />
            <motion.div
              style={{ y: y2 }}
              className="absolute -bottom-10 -right-4 w-36 rounded-2xl border border-line bg-panel p-2 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] sm:-right-6 sm:w-44"
            >
              <img
                src={photo2}
                alt="Big S-Code working"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-xl object-cover"
              />
              <p className="px-1 pb-0.5 pt-2 font-mono text-[10px] text-moss">
                ~/photos/big-s-code.jpg
              </p>
            </motion.div>
          </div>
          <div className="absolute -right-3 -top-3 rounded-xl border border-mint/40 bg-panel px-4 py-2 font-mono text-xs text-mint shadow-[0_12px_36px_-12px_rgba(0,0,0,0.45)]">
            <span className="text-moss">$</span> whoami
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel index="01">about me</SectionLabel>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-bone sm:text-4xl lg:text-5xl">
            Engineering is how I build.
            <br />
            <span className="text-mint">Design</span> is why it matters.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-moss">
            <p>
              I'm {site.name} — a Front-End Engineer who treats the browser like a
              compiler. Every millisecond, every repaint, every line of CSS counts.
            </p>
            <p>
              I build interfaces that feel instant and look intentional. From real-time
              dashboards to social products, I ship the whole frontend: architecture,
              interactions, performance and polish.
            </p>
            <p>
              Firebase is my accelerator — authentication, Firestore, real-time sync —
              so products go from idea to deployed in weeks, not quarters.
            </p>
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 sm:grid-cols-4">
            {metadata.map((m) => (
              <div key={m.label}>
                <dt className="font-mono text-xs text-moss">{m.label}</dt>
                <dd className="mt-1 font-mono text-sm text-bone">{m.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-4">
            {site.stats.map((stat) => (
              <Stat key={stat.label} stat={stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}