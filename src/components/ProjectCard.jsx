import Button from './Button'
import TechTag from './TechTag'
import MagneticButton from './MagneticButton'

export default function ProjectCard({ project, onOpen }) {
  return (
    <div className="flex h-full flex-col">
      <p className="font-mono text-xs tracking-wider text-mint">
        <span className="text-moss">//</span> {project.index} — {project.year}
      </p>
      <h3 className="mt-3 font-sans text-2xl font-bold tracking-tight text-bone sm:text-3xl">
        {project.title}
      </h3>
      <p className="mt-2 font-mono text-sm text-mint">{project.tagline}</p>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-moss">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-line pt-5">
        <MagneticButton>
          <Button as="button" onClick={() => onOpen(project)}>
            View Case Study <span aria-hidden>↗</span>
          </Button>
        </MagneticButton>
        <a
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-sm text-moss transition-colors hover:text-mint"
        >
          ./source ↗
        </a>
        <a
          href={project.links.live}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-sm text-moss transition-colors hover:text-mint"
        >
          ./live ↗
        </a>
      </div>
    </div>
  )
}