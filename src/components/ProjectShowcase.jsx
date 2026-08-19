import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ProjectVisual from './ProjectVisual'
import ProjectCard from './ProjectCard'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { cn } from '../utils/cn'

export default function ProjectShowcase({ project, index, onOpen }) {
  const wrapRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start end', 'end start'],
  })
  const yImage = useTransform(scrollYProgress, [0, 1], [36, -36])
  const { ref, inView } = useScrollReveal({ threshold: 0.1 })
  const flip = index % 2 === 1

  return (
    <div
      ref={wrapRef}
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 48 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(flip && 'lg:order-2')}
      >
        <ProjectCard project={project} onOpen={onOpen} />
      </motion.div>

      <motion.div
        style={{ y: yImage }}
        className={cn(flip && 'lg:order-1')}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProjectVisual project={project} />
        </motion.div>
      </motion.div>
    </div>
  )
}