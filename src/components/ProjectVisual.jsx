const palettes = {
  audio: { glow: '#4f7cff', glyph: '♪' },
  forms: { glow: '#3ddc84', glyph: '▤' },
  farm: { glow: '#7dd33f', glyph: '⛁' },
  repair: { glow: '#f5a623', glyph: '⚒' },
  logistics: { glow: '#5aa2ff', glyph: '➤' },
  crypto: { glow: '#a06bff', glyph: '⛃' },
}

export default function ProjectVisual({ project, className = '' }) {
  const palette = palettes[project.visual] ?? palettes.audio

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-line bg-panel ${className}`}
      style={{
        backgroundImage: `radial-gradient(120% 140% at 20% 0%, color-mix(in srgb, ${palette.glow} 22%, transparent), transparent 60%), radial-gradient(120% 140% at 90% 100%, color-mix(in srgb, ${palette.glow} 12%, transparent), transparent 55%), linear-gradient(160deg, var(--raised), var(--panel))`,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '34px 34px',
          color: palette.glow,
          maskImage: 'radial-gradient(80% 80% at 50% 40%, black, transparent)',
        }}
      />

      <div className="flex items-center justify-between border-b border-line/70 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line-bright" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-bright" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-bright" />
        </div>
        <span className="font-mono text-[11px] text-moss">{project.id}.dev</span>
      </div>

      {project.image ? (
        <div className="flex aspect-[16/10] items-stretch overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center p-6">
          <div
            className="flex h-24 w-24 items-center justify-center rounded-2xl border border-line bg-panel/80 text-5xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
            style={{ color: palette.glow, textShadow: `0 0 28px color-mix(in srgb, ${palette.glow} 70%, transparent)` }}
          >
            {palette.glyph}
          </div>
        </div>
      )}

      {!project.image && (
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5">
          <div>
            <p className="font-mono text-[11px] text-moss">
              <span className="text-mint">{project.index}</span> / {project.title}
            </p>
            <p className="mt-1 font-mono text-xs text-moss">{project.tech.join(' · ')}</p>
          </div>
          <span className="font-mono text-[11px] text-moss">{project.year}</span>
        </div>
      )}
    </div>
  )
}