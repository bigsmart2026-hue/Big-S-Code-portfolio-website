# BIG S-CODE — Portfolio

Premium developer portfolio for Big S-Code, Front-End Engineer & Creative Technologist.

Terminal-branded dark-first design with editorial typography, built on a production-grade architecture.

## Stack

- **React 19 + Vite 8**
- **Tailwind CSS 4** — design tokens via CSS variables (`@theme inline`), full dark/light theming
- **Framer Motion** — entrance staggers, scroll reveals, parallax, magnetic buttons, custom cursor
- **Zustand** — UI store (menu, active section), theme store (persisted), project modal store, cursor store
- **Material UI** — case-study Dialog (lazy-loaded), contact TextFields/Button/Snackbar
- **Firebase** — Firestore contact form (`messages` collection), Google Analytics

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build to dist/
npm run lint     # oxlint
npm run preview  # preview production build
```

## Architecture

```
src/
  components/   Navbar, Terminal, CaseStudyModal, ProjectVisual, Button, MagneticButton,
                CustomCursor, ThemeToggle, Marquee, SectionLabel, TechTag, ProjectCard, ProjectShowcase
  sections/     Hero, About, Projects, Skills, Experience, Philosophy, Services,
                Testimonials, Contact, Footer
  hooks/        useScrollReveal, useCounter, useMousePosition, useMediaQuery
  store/        uiStore, themeStore, projectStore, cursorStore (Zustand)
  context/      ThemeContext — applies data-theme to <html>
  data/         site, projects (6 case studies), skills, experience, testimonials, terminal
  lib/          firebase — app, Firestore, Analytics init
  styles/       muiTheme — MUI palette synced to the site tokens
  utils/        scroll, cn
  assets/       photos, logo
```

## Customizing content

Everything editable lives in `src/data/`:

- `site.js` — name, headline, status, email, socials, stats, marquee items
- `projects.js` — 6 projects with full case-study content (overview, problem, solution, engineering, outcome, tech)
- `skills.js`, `experience.js`, `testimonials.js` — section content
- `terminal.js` — interactive terminal commands

The design tokens (colors, fonts) live in `src/index.css` under `:root` / `[data-theme="light"]`. The brand signature is electric green (`--mint`) on near-black (`--ink`).

## Notes

- Terminal aesthetic is the brand language — used in the hero terminal, section labels (`//`), tags and metadata — not applied to every surface.
- Custom cursor activates only on fine pointers; everything respects `prefers-reduced-motion` (Framer `MotionConfig`, CSS media query, instant terminal output).
- Contact form validates, shows a loading state, and writes to Firestore (`messages` collection, timestamped). If Firestore rules reject the write it falls back to the mail client with the message pre-copied to the clipboard. Firebase config lives in `src/lib/firebase.js` — enable public writes on `messages` from the Firebase console.
- Resume downloads from `public/resume.pdf` — replace with your real resume.