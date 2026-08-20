import { WhatsAppIcon, GitHubIcon, GmailIcon, LinkedInIcon } from '../components/icons'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import SectionLabel from '../components/SectionLabel'
import MagneticButton from '../components/MagneticButton'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { site } from '../data/site'
import { db } from '../lib/firebase'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [snack, setSnack] = useState(null)
  const { ref, inView } = useScrollReveal({ threshold: 0.1 })

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!emailPattern.test(form.email)) next.email = 'Enter a valid email'
    if (!form.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setSnack({ severity: 'success', text: 'Email copied to clipboard' })
    } catch {}
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSending(true)

    try {
      await addDoc(collection(db, 'messages'), {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
        createdAt: serverTimestamp(),
      })
      setForm({ name: '', email: '', message: '' })
      setSnack({ severity: 'success', text: 'Message sent — I usually reply within 24h' })
    } catch {
      const message = `${form.message}\n\n— ${form.name} (${form.email})`
      try {
        navigator.clipboard.writeText(message)
      } catch {}

      const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
      const body = encodeURIComponent(message)
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`

      setForm({ name: '', email: '', message: '' })
      setSnack({ severity: 'info', text: 'Firestore unavailable — opened your mail client' })
    } finally {
      setSending(false)
    }
  }

  const socialLinks = [
    { label: site.socials.whatsapp.label, href: site.socials.whatsapp.href, Icon: WhatsAppIcon },
    { label: site.socials.github.label, href: site.socials.github.href, Icon: GitHubIcon },
    { label: site.socials.email.label, href: site.socials.email.href, Icon: GmailIcon },
    { label: site.socials.linkedin.label, href: site.socials.linkedin.href, Icon: LinkedInIcon },
  ]

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <div ref={ref}>
        <SectionLabel index="08">contact</SectionLabel>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-sans text-3xl font-bold leading-tight tracking-tight text-bone sm:text-5xl"
        >
          Let's build something <span className="text-mint text-glow">people remember.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-xl text-sm leading-relaxed text-moss"
        >
          Currently available for freelance projects and full-time roles. Tell me
          what you're building — I usually reply within 24 hours.
        </motion.p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.25fr]">
          <motion.aside
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between rounded-2xl border border-line bg-panel p-7"
          >
            <div>
              <p className="font-mono text-xs text-moss">$ cat ~/.contact</p>
              <dl className="mt-6 space-y-5 font-mono text-sm">
                <div>
                  <dt className="text-xs text-moss">email</dt>
                  <dd className="mt-1 flex items-center gap-3">
                    <a href={`mailto:${site.email}`} className="text-mint hover:text-mint-bright">
                      {site.email}
                    </a>
                    <button
                      onClick={copyEmail}
                      className="rounded-md border border-line-bright px-2 py-0.5 text-[11px] text-moss transition-colors hover:border-mint hover:text-mint"
                    >
                      copy
                    </button>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-moss">location</dt>
                  <dd className="mt-1 text-bone">{site.location}</dd>
                </div>
                <div>
                  <dt className="text-xs text-moss">status</dt>
                  <dd className="mt-1 flex items-center gap-2 text-mint">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-mint" />
                    {site.status}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 flex gap-3">
              {socialLinks.map((s) => (
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
          </motion.aside>

          <motion.form
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                label="Name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                error={Boolean(errors.name)}
                helperText={errors.name ?? ' '}
                required
              />
              <TextField
                label="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                error={Boolean(errors.email)}
                helperText={errors.email ?? ' '}
                required
              />
            </div>
            <TextField
              label="Message"
              multiline
              minRows={6}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              error={Boolean(errors.message)}
              helperText={errors.message ?? ' '}
              required
            />
            <MagneticButton className="w-fit">
              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={sending}
                startIcon={sending ? <CircularProgress size={16} color="inherit" /> : undefined}
                sx={{ px: 5, py: 1.5, fontSize: '0.875rem' }}
              >
                {sending ? 'transmitting…' : 'send message'}
              </Button>
            </MagneticButton>
          </motion.form>
        </div>
      </div>

      <Snackbar
        open={Boolean(snack)}
        autoHideDuration={4000}
        onClose={() => setSnack(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity={snack?.severity ?? 'success'}
          variant="filled"
          onClose={() => setSnack(null)}
          sx={{ fontFamily: 'ui-monospace, monospace' }}
        >
          {snack?.text}
        </Alert>
      </Snackbar>
    </section>
  )
}