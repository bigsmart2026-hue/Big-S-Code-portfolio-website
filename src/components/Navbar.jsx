import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useUiStore } from '../store/uiStore'
import ThemeToggle from './ThemeToggle'
import Button from './Button'
import { scrollToId } from '../utils/scroll'
import { cn } from '../utils/cn'
import logo from '../assets/logo.png'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Journey' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const mobileMenuOpen = useUiStore((s) => s.mobileMenuOpen)
  const openMenu = useUiStore((s) => s.openMenu)
  const closeMenu = useUiStore((s) => s.closeMenu)
  const activeSection = useUiStore((s) => s.activeSection)
  const setActiveSection = useUiStore((s) => s.setActiveSection)

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [setActiveSection])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const go = (id) => {
    closeMenu()
    scrollToId(id)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <button
          onClick={() => go('home')}
          className="group flex items-center gap-2.5 font-mono text-sm font-semibold text-mint"
          aria-label="Back to top"
        >
          <img src={logo} alt="" className="h-7 w-7 rounded-lg object-cover" />
          <span className="hidden sm:inline">Big S-Code</span>
          <span className="hidden animate-blink sm:inline">_</span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = activeSection === link.id
            return (
              <li key={link.id} className="relative">
                <button
                  onClick={() => go(link.id)}
                  className={cn(
                    'rounded-lg px-3.5 py-2 font-mono text-sm transition-colors duration-300',
                    active ? 'text-mint' : 'text-moss hover:text-bone',
                  )}
                >
                  {link.label}
                </button>
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-mint"
                  />
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button href="/resume.pdf" download variant="outline" size="sm" className="hidden md:inline-flex">
            resume.pdf
          </Button>
          <button
            onClick={openMenu}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-bright text-bone lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-0 flex flex-col bg-ink/95 backdrop-blur-xl"
          >
            <div className="flex h-16 items-center justify-end px-5">
              <button
                onClick={closeMenu}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-bright text-bone"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-1 flex-col items-center justify-center gap-2 px-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => go(link.id)}
                    className={cn(
                      'py-2 font-mono text-3xl font-semibold tracking-tight transition-colors',
                      activeSection === link.id ? 'text-mint' : 'text-bone hover:text-mint',
                    )}
                  >
                    <span className="mr-3 text-mint">0{i + 1}</span>
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-6"
              >
                <Button href="/resume.pdf" download>
                  download resume.pdf
                </Button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}