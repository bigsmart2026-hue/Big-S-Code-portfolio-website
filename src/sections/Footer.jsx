import { WhatsAppIcon, GitHubIcon, GmailIcon, LinkedInIcon } from '../components/icons'
import { site } from '../data/site'
import { scrollToId } from '../utils/scroll'
import logo from '../assets/logo.png'

const socials = [
  { label: site.socials.whatsapp.label, href: site.socials.whatsapp.href, Icon: WhatsAppIcon },
  { label: site.socials.github.label, href: site.socials.github.href, Icon: GitHubIcon },
  { label: site.socials.email.label, href: site.socials.email.href, Icon: GmailIcon },
  { label: site.socials.linkedin.label, href: site.socials.linkedin.href, Icon: LinkedInIcon },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <button
            onClick={() => scrollToId('home')}
            className="group flex items-center gap-2.5 font-mono text-sm font-semibold text-mint"
            aria-label="Back to top"
          >
            <img src={logo} alt="" className="h-7 w-7 rounded-lg object-cover" />
            Big S-Code<span className="animate-blink">_</span>
          </button>

          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-line-bright text-moss transition-all hover:-translate-y-0.5 hover:border-mint hover:text-mint"
              >
                <s.Icon size={16} aria-hidden />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-line pt-6 font-mono text-xs text-moss sm:flex-row">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>
            built with <span className="text-mint">react</span> ·{' '}
            <span className="text-mint">tailwind</span> ·{' '}
            <span className="text-mint">framer-motion</span> ·{' '}
            <span className="text-mint">mui</span>
          </p>
        </div>
      </div>
    </footer>
  )
}