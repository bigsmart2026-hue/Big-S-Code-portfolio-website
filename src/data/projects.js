import logimoveImg from '../assets/logimove.jpg'
import agribusinessImg from '../assets/agribusiness.jpg'

export const projects = [
  {
    id: 'soundswipe',
    index: '01',
    title: 'SoundSwipe',
    year: '2026',
    tagline: 'Music discovery redesigned as a social listening experience.',
    description:
      'A swiping-based music discovery app where taste becomes a conversation. Real-time listening rooms, shared queues, and taste-matching — all live, all social.',
    visual: 'audio',
    overview:
      'SoundSwipe turns passive streaming into an active social ritual. Users swipe through tracks like they do photos, building a taste profile that powers shared listening rooms with friends.',
    problem:
      'Music platforms are vast but lonely. Discovery is algorithmic isolation — playlists are consumed alone, and there is no native way to listen with people in real time.',
    solution:
      'A gesture-driven discovery feed synced to Firestore, plus collaborative listening rooms with live queue voting. Taste profiles make every room feel personal.',
    engineering: [
      'Gesture detection with touch events + rAF-throttled rendering — 60fps swipe feedback',
      'Firestore real-time listeners with offline persistence for rooms and queues',
      'Presence tracking via Firestore presence sessions for live member indicators',
      'Optimistic UI updates for votes and skips, reconciled on reconnect',
    ],
    outcome:
      'A demo that feels like a shipped product: sub-100ms interactions, zero jank during swipes, and a listening session that stays perfectly in sync across clients.',
    tech: ['JavaScript', 'Firebase', 'Firestore', 'UI/UX'],
    links: { github: 'https://github.com/bigscode/soundswipe', live: 'https://soundswipe.demo' },
  },
  {
    id: 'student-platform',
    index: '02',
    title: 'Student Registration Platform',
    year: '2026',
    tagline: 'Enrollment in minutes, not queues.',
    description:
      'A full registration system with role-based dashboards for students, admins and registrars. Multi-step forms, document uploads, and audit-ready records.',
    visual: 'forms',
    overview:
      'An end-to-end enrollment platform replacing paper queues with a guided multi-step flow, role-gated dashboards, and exportable audit trails.',
    problem:
      'Registration day meant hours in line, lost paperwork and manual re-entry. Staff had no live view of enrollment numbers, and students had no feedback loop.',
    solution:
      'A stepper-driven registration flow with per-step validation, role-based dashboards, and a Firestore-backed records system with full audit history.',
    engineering: [
      'Multi-step form state machine with resumable sessions and progress persistence',
      'Role-based access control enforced in Firestore security rules, not just the UI',
      'Bulk import/export pipelines for registrar workflows',
      'Reusable field system — 14 field types, one validation engine',
    ],
    outcome:
      'Enrollment throughput roughly tripled in pilots, with zero lost records and a fully searchable audit trail for compliance.',
    tech: ['React', 'Firebase', 'Firestore', 'Tailwind'],
    links: { github: 'https://github.com/bigscode/student-platform', live: 'https://student-platform.demo' },
  },
  {
    id: 'farm-system',
    index: '03',
    title: ' AgriBusiness Website',
    year: '2025',
    tagline: 'A control room for modern agriculture.',
    description:
      'Dashboard for farms to track fields, yields, inventory and weather. Firestore-synced across devices — even offline in the field.',
    visual: 'farm',
    image: agribusinessImg,
    overview:
      'FarmOS gives farm managers a live operational picture: field health, seasonal yield tracking, and stock levels — updated in real time from anywhere.',
    problem:
      'Farm data lived in notebooks and spreadsheets scattered across phones and offices. Nothing was real-time, nothing survived the harvest season.',
    solution:
      'A Firestore-first architecture with offline persistence so field workers log data with zero connectivity, and everything reconciles on sync.',
    engineering: [
      'Offline-first data layer with Firestore conflict resolution',
      'Aggregated yield analytics rendered with Recharts from derived collections',
      'Weather API integration with region-aware refresh scheduling',
      'Print-ready seasonal reports generated client-side',
    ],
    outcome:
      'Operational data that used to take a week to compile now assembles itself — and survives power outages in the field.',
    tech: ['React', 'Firestore', 'Tailwind', 'Recharts'],
    links: { github: 'https://github.com/bigscode/farm-system', live: 'https://agri-business-rust.vercel.app/' },
  },
  {
    id: 'repair-system',
    index: '04',
    title: 'Repair Inventory System',
    year: '2025',
    tagline: 'Every part tracked. Every job accounted for.',
    description:
      'Inventory and job tracking for repair shops: parts in, parts out, jobs open, jobs done. Barcode-first workflows with instant stock lookups.',
    visual: 'repair',
    overview:
      'A lean inventory system purpose-built for repair shops — stock that decrements on job close, low-stock alerts, and a parts history for every device.',
    problem:
      'Repair shops were over-ordering parts and losing track of what was inside which device. Job history was a pile of paper tickets.',
    solution:
      'A job-centric inventory model: parts are reserved when a job opens and committed when it closes. History is automatic, stock is always truthful.',
    engineering: [
      'Transactional stock updates via Firestore batch writes to prevent double-commit',
      'Barcode scanning hooks with instant product lookup',
      'Low-stock alert engine with per-part reorder thresholds',
      'Job timeline view reconstructing any device\u2019s full repair history',
    ],
    outcome:
      'Stock shrink cut dramatically; technicians now check a device\u2019s entire history in one screen instead of three binders.',
    tech: ['React', 'Firebase', 'JavaScript', 'Tailwind'],
    links: { github: 'https://github.com/bigscode/repair-system', live: 'https://repair-system.demo' },
  },
  {
    id: 'logimove',
    index: '05',
    title: 'LogiMove',
    year: '2024',
    tagline: 'Logistics, visualized.',
    description:
      'Fleet and shipment tracking dashboard with live maps, route analytics and driver performance. Data that drives decisions.',
    visual: 'logistics',
    image: logimoveImg,
    overview:
      'LogiMove puts every truck, route and shipment on one screen — live positions, ETA deltas and fleet-wide analytics that operations actually use.',
    problem:
      'Dispatch teams juggled spreadsheets, phone calls and GPS portals. No single source of truth, no historical analysis, constant guesswork.',
    solution:
      'A real-time operations dashboard built on a streaming data pipeline with a map-first interface and configurable alerting.',
    engineering: [
      'Live map layer with throttled position updates from the fleet stream',
      'Route efficiency scoring engine aggregated in Firestore',
      'Custom alert rules surfaced through an in-app notification center',
      'Analytics views powered by pre-aggregated collections for sub-second loads',
    ],
    outcome:
      'Dispatch response time halved and route efficiency reviews went from weekly meetings to a live screen.',
    tech: ['React', 'Firebase', 'Tailwind', 'Recharts'],
    links: { github: 'https://github.com/bigscode/logimove', live: 'https://logi-move-logistcs.vercel.app/' },
  },
  {
    id: 'crypto-dashboard',
    index: '06',
    title: 'Crypto Dashboard',
    year: '2024',
    tagline: 'Markets at a glance, engineered for clarity.',
    description:
      'Real-time portfolio and market dashboard with watchlists, price alerts and deep-dive charts. Heavy data, light interface.',
    visual: 'crypto',
    overview:
      'A trading-adjacent dashboard built for clarity over noise: live prices, portfolio allocation, alert thresholds, and research-grade charts.',
    problem:
      'Market dashboards are either toy demos or wall-street tools. Neither respects a retail trader\u2019s attention or connection budget.',
    solution:
      'A deliberately restrained interface with streaming prices, locally-computed indicators, and charts that render without stutter on mid-range devices.',
    engineering: [
      'Streaming price updates batched and diffed to minimize re-renders',
      'Canvas-based chart rendering with 60fps pan/zoom',
      'Persistent watchlists and alert thresholds in localStorage + Firestore sync',
      'Portfolio allocation computed client-side with memoized derivations',
    ],
    outcome:
      'A dashboard that loads in under a second and stays smooth while 60 prices update per second.',
    tech: ['React', 'Firebase', 'Tailwind', 'Canvas'],
    links: { github: 'https://github.com/bigscode/crypto-dashboard', live: 'https://crypto-dashboard.demo' },
  },
]