import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import { useScrollReveal } from '../hooks/useScrollReveal'

const principles = [
  {
    index: '01',
    title: 'Clarity',
    text: 'Interfaces should explain themselves. If a user has to think about how something works, the design is still in progress.',
  },
  {
    index: '02',
    title: 'Performance',
    text: 'Speed is a feature. Every millisecond saved is respect paid to the person on the other side of the screen.',
  },
  {
    index: '03',
    title: 'Craft',
    text: 'The details are not the details. Typography, motion, spacing — they decide whether something feels made or manufactured.',
  },
]

const statement = 'Design without engineering is a picture. Engineering without design is noise.'

export default function Philosophy() {
  const { ref, inView } = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="philosophy" className="border-y border-line bg-panel/30">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <div ref={ref}>
          <SectionLabel index="04">design × engineering</SectionLabel>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl font-sans text-2xl font-bold leading-snug tracking-tight text-bone sm:text-4xl"
          >
            {statement.split(' ').map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                className={w === 'picture.' || w === 'noise.' ? 'text-mint' : ''}
              >
                {w}{' '}
              </motion.span>
            ))}
          </motion.p>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {principles.map((p, i) => (
              <motion.div
                key={p.index}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-2xl border border-line bg-panel p-6 transition-colors duration-300 hover:border-mint/40"
              >
                <p className="font-mono text-sm text-mint">{p.index}</p>
                <h3 className="mt-3 font-sans text-xl font-bold tracking-tight text-bone">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-moss">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}