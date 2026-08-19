import { useEffect, useRef, useState } from 'react'
import { terminalCommands, terminalIntro } from '../data/terminal'
import terminalImg from '../assets/photo-3.jpg'

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

const introEntries = terminalIntro.flatMap((step) => [
  { type: 'cmd', text: `$ ${step.cmd}` },
  { type: 'out', text: step.out },
])

export default function Terminal() {
  const [entries, setEntries] = useState(() => (reduceMotion ? introEntries : []))
  const [phase, setPhase] = useState(reduceMotion ? 'ready' : 'intro')
  const [input, setInput] = useState('')
  const bodyRef = useRef(null)
  const inputRef = useRef(null)
  const initializedRef = useRef(false)
  const cmdHistoryRef = useRef([])
  const historyIndexRef = useRef(0)

  useEffect(() => {
    if (initializedRef.current || reduceMotion) return
    initializedRef.current = true

    let cancelled = false

    async function runIntro() {
      for (const step of terminalIntro) {
        if (cancelled) return
        setEntries((prev) => [...prev, { type: 'cmd', text: `$ ${step.cmd}` }])
        await sleep(260)
        let shown = ''
        for (const ch of step.out) {
          if (cancelled) return
          shown += ch
          setEntries((prev) => [...prev.slice(0, -1), { type: 'out', text: shown }])
          await sleep(22)
        }
        await sleep(340)
      }
      setPhase('ready')
    }

    runIntro()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    const el = bodyRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [entries, phase])

  const submit = (e) => {
    e.preventDefault()
    const cmd = input.trim()
    if (!cmd) return
    const lower = cmd.toLowerCase()
    setEntries((prev) => [...prev, { type: 'cmd', text: `$ ${cmd}` }])
    cmdHistoryRef.current.push(cmd)
    historyIndexRef.current = cmdHistoryRef.current.length
    if (lower === 'clear') {
      setEntries([])
      setInput('')
      return
    }
    const out = terminalCommands[lower] ?? `command not found: "${cmd}" — try "help"`
    setEntries((prev) => [...prev, { type: 'out', text: out }])
    setInput('')
  }

  const handleKey = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      const history = cmdHistoryRef.current
      if (historyIndexRef.current > 0) {
        historyIndexRef.current -= 1
        setInput(history[historyIndexRef.current] ?? '')
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const history = cmdHistoryRef.current
      if (historyIndexRef.current < history.length) {
        historyIndexRef.current += 1
        setInput(history[historyIndexRef.current] ?? '')
      }
    }
  }

  return (
    <div
      className="overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-2 border-b border-line bg-raised/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-danger/70" />
        <span className="h-3 w-3 rounded-full bg-amber/70" />
        <span className="h-3 w-3 rounded-full bg-mint/70" />
        <span className="ml-3 truncate font-mono text-xs text-moss">
          big-s-code@portfolio: ~
        </span>
      </div>

      <div className="relative flex h-[340px]">
        <img
          src={terminalImg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
        <div
          ref={bodyRef}
          className="relative min-w-0 flex-1 overflow-y-auto p-4 font-mono text-sm leading-7 [text-shadow:0_1px_6px_rgba(10,15,13,0.85)]"
        >
          {entries.map((entry, i) =>
            entry.type === 'cmd' ? (
              <p key={i}>
                <span className="text-mint">$</span>{' '}
                <span className="text-bone">{entry.text.slice(2)}</span>
              </p>
            ) : (
              <p key={i} className="pl-4 text-moss">
                {entry.text}
              </p>
            ),
          )}

          {phase === 'ready' && (
            <form onSubmit={submit} className="flex items-center gap-2">
              <span className="shrink-0 text-mint">$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="type a command — try 'help'"
                aria-label="Terminal input"
                autoComplete="off"
                spellCheck={false}
                className="w-full bg-transparent font-mono text-sm text-bone outline-none placeholder:text-moss/40"
              />
              <span className="animate-blink text-mint" aria-hidden>
                ▊
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}