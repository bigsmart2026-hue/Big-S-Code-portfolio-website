export default function SectionLabel({ index, children }) {
  return (
    <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-wider text-mint">
      <span className="text-moss">//</span>
      <span>{children}</span>
      {index && <span className="text-moss">{index}</span>}
      <span className="h-px w-12 bg-mint/40" />
    </p>
  )
}