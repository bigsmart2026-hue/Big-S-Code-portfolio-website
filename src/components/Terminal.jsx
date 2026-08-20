import terminalImg from '../assets/photo-3.jpg'

export default function Terminal() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2 border-b border-line bg-raised/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-danger/70" />
        <span className="h-3 w-3 rounded-full bg-amber/70" />
        <span className="h-3 w-3 rounded-full bg-mint/70" />
        <span className="ml-3 truncate font-mono text-xs text-moss">
          big-s-code@portfolio: ~
        </span>
      </div>

      <div className="relative h-[340px]">
        <img
          src={terminalImg}
          alt="Big S-Code portrait"
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
      </div>
    </div>
  )
}