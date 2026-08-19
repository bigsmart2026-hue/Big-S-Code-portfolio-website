import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import TechTag from '../components/TechTag'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { skillGroups } from '../data/skills'
import { cn } from '../utils/cn'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
  const { ref, inView } = useScrollReveal({ threshold: 0.1 })
  const [selected, setSelected] = useState(null)

  const toggle = (group) => setSelected(selected === group ? null : group)

  return (
    <section id="skills" className="border-y border-line bg-panel/30">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
        >
          <motion.div variants={item}>
            <SectionLabel index="03">skills & expertise</SectionLabel>
            <h2 className="font-sans text-3xl font-bold tracking-tight text-bone sm:text-4xl">
              A stack that ships, <span className="text-mint">not just shines.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-moss">
              Tap a group to focus it. Every tag earns its place — used on real
              projects, tuned for performance, measured against the budget.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group, gi) => {
              const active = selected === group.group
              return (
                <motion.div
                  key={group.group}
                  variants={item}
                  className={cn(
                    'group rounded-2xl border p-6 transition-all duration-300',
                    active
                      ? 'border-mint/50 bg-panel shadow-[0_0_40px_-16px_color-mix(in_srgb,var(--mint)_50%,transparent)]'
                      : 'border-line bg-panel hover:border-mint/30',
                  )}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-sm text-mint">
                      <span className="text-moss">0{gi + 1}.</span> {group.group}
                    </p>
                    <button
                      onClick={() => toggle(group.group)}
                      className="font-mono text-xs text-moss transition-colors hover:text-mint"
                    >
                      {active ? '− clear' : '+ focus'}
                    </button>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <TechTag key={skill} active={active}>
                        {skill}
                      </TechTag>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}