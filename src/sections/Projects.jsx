import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import ProjectShowcase from '../components/ProjectShowcase'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useProjectStore } from '../store/projectStore'
import { projects } from '../data/projects'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Projects() {
  const openProject = useProjectStore((s) => s.openProject)
  const { ref, inView } = useScrollReveal({ threshold: 0.05 })

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        <motion.div variants={item}>
          <SectionLabel index="02">selected work</SectionLabel>
          <h2 className="font-sans text-3xl font-bold tracking-tight text-bone sm:text-4xl">
            Products I've designed, built <span className="text-mint">and shipped.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-moss">
            Six builds, one standard. Each project below is a complete frontend —
            architecture, interactions, performance and polish. Open a case study
            for the full engineering story.
          </p>
        </motion.div>
      </motion.div>

      <div className="mt-16 space-y-20 sm:space-y-28">
        {projects.map((project, i) => (
          <ProjectShowcase key={project.id} project={project} index={i} onOpen={openProject} />
        ))}
      </div>
    </section>
  )
}