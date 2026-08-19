import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import TechTag from '../components/TechTag'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { experience } from '../data/experience'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Experience() {
  const { ref, inView } = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        <motion.div variants={item}>
          <SectionLabel index="05">the journey</SectionLabel>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-bone sm:text-4xl">
            Years in, <span className="text-mint">still shipping.</span>
          </h2>
        </motion.div>

        <div className="relative mt-14">
          <div className="absolute bottom-2 left-3 top-2 w-px bg-line-bright" />

          <div className="space-y-12">
            {experience.map((role) => (
              <motion.div key={role.role} variants={item} className="relative pl-12">
                <span className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-mint/60 bg-panel">
                  <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_12px_rgba(61,220,132,0.8)]" />
                </span>
                <p className="font-mono text-xs text-mint">{role.period}</p>
                <h3 className="mt-1.5 font-sans text-xl font-bold tracking-tight text-bone">
                  {role.role}
                </h3>
                <p className="mt-0.5 font-mono text-sm text-moss">{role.org}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-moss">
                  {role.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {role.tech.map((t) => (
                    <TechTag key={t}>{t}</TechTag>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}