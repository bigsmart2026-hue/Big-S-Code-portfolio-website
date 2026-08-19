export default function Marquee({ items }) {
  const doubled = [...items, ...items]

  return (
    <div className="marquee overflow-hidden border-y border-line bg-panel/40 py-5">
      <div className="marquee-track flex w-max items-center">
        {doubled.map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center gap-8 pr-8 font-mono text-sm tracking-wide text-moss"
          >
            {item}
            <span className="text-mint" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}