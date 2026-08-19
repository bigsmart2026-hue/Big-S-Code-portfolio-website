import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { CloseRounded } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'
import { useProjectStore } from '../store/projectStore'
import ProjectVisual from './ProjectVisual'
import TechTag from './TechTag'
import Button from './Button'

const Section = ({ title, children }) => (
  <section>
    <h4 className="font-mono text-xs tracking-wider text-mint">{title}</h4>
    <p className="mt-2 text-sm leading-relaxed text-moss">{children}</p>
  </section>
)

export default function CaseStudyModal() {
  const project = useProjectStore((s) => s.activeProject)
  const close = useProjectStore((s) => s.closeProject)

  return (
    <Dialog
      open={Boolean(project)}
      onClose={close}
      fullWidth
      maxWidth="md"
      scroll="body"
      aria-labelledby="case-study-title"
    >
      {project && (
        <DialogContent sx={{ p: { xs: 3, sm: 5 } }}>
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="font-mono text-xs tracking-wider text-mint">
                <span className="text-moss">//</span> case study — {project.index}
              </p>
              <h3
                id="case-study-title"
                className="mt-2 font-sans text-3xl font-bold tracking-tight text-bone sm:text-4xl"
              >
                {project.title}
              </h3>
              <p className="mt-1 font-mono text-sm text-moss">{project.year}</p>
            </div>
            <IconButton
              onClick={close}
              aria-label="Close case study"
              sx={{
                border: '1px solid var(--line)',
                color: 'var(--moss)',
                '&:hover': { color: 'var(--mint)', borderColor: 'var(--mint)' },
              }}
            >
              <CloseRounded />
            </IconButton>
          </div>

          <div className="mt-6">
            <ProjectVisual project={project} />
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Section title="Overview">{project.overview}</Section>
            <Section title="The Problem">{project.problem}</Section>
          </div>

          <div className="mt-6">
            <Section title="The Solution">{project.solution}</Section>
          </div>

          <div className="mt-6">
            <h4 className="font-mono text-xs tracking-wider text-mint">Engineering</h4>
            <ul className="mt-3 space-y-2.5">
              {project.engineering.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-moss">
                  <span className="mt-0.5 font-mono text-mint">›</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <Section title="Outcome">{project.outcome}</Section>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6">
            {project.tech.map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button href={project.links.github} target="_blank" rel="noreferrer">
              ./source ↗
            </Button>
            <Button href={project.links.live} target="_blank" rel="noreferrer" variant="outline">
              ./live ↗
            </Button>
          </div>
        </DialogContent>
      )}
    </Dialog>
  )
}