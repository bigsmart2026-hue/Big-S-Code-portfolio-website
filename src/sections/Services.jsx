import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import MagneticButton from '../components/MagneticButton'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { scrollToId } from '../utils/scroll'

const services = [
  {
    index: '01',
    title: 'Front-End Engineering',
    description:
      'Architecting scalable React applications with clean component boundaries, typed data flows and zero regression debt.',
  },
  {
    index: '02',
    title: 'UI Implementation',
    description:
      'Turning designs into pixel-accurate, responsive interfaces with motion that feels intentional — not decorative.',
  },
  {
    index: '03',
    title: 'JavaScript Development',
    description:
      'Deep, modern JavaScript — from browser APIs to build tooling. Code that reads well and runs fast.',
  },
  {
    index: '04',
    title: 'Firebase Integration',
    description:
      'Authentication, Firestore, real-time sync and serverless functions — wired so your product ships in weeks, not quarters.',
  },
  {
    index: '05',
    title: 'Performance Optimization',
    description:
      'Audits, bundle surgery and render profiling. I treat Lighthouse like a contract, not a suggestion.',
  },
]

export default function Services() {
  const { ref, inView } = useScrollReveal({ threshold: 0.1 })

  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div ref={ref}>
        <SectionLabel index="06">services</SectionLabel>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-bone sm:text-4xl">
            What I can <span className="text-mint">build for you.</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-moss">
            Five ways I add value to a product — engaged individually, or as a
            full-stack-frontend package.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-5">
          {services.map((service, i) => (
            <motion.div
              key={service.index}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col bg-panel p-6 transition-colors duration-300 hover:bg-raised"
            >
              <p className="font-mono text-sm text-moss transition-colors duration-300 group-hover:text-mint">
                {service.index}
              </p>
              <h3 className="mt-4 font-sans text-lg font-bold leading-snug tracking-tight text-bone">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-moss">
                {service.description}
              </p>
              <MagneticButton className="mt-6 w-fit">
                <button
                  onClick={() => scrollToId('contact')}
                  className="font-mono text-xs text-moss transition-colors group-hover:text-mint"
                >
                  start a project →
                </button>
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}