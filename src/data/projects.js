import logimoveImg from '../assets/logimove.jpg'
import agribusinessImg from '../assets/agribusiness.jpg'
import apexquizImg from '../assets/apexquiz.jpg'
import abiawayImg from '../assets/abiaway.jpg'
import zustandtodoImg from '../assets/zustandtodo.jpg'

export const projects = [
  {
    id: 'apex-quiz',
    index: '01',
    title: 'Apex Quiz',
    year: '2026',
    tagline: 'Interactive trivia, ranked live.',
    description:
      'An interactive quiz webapp — timed questions, streaks and a live leaderboard that updates as players answer. Play solo or battle friends in real time.',
    visual: 'forms',
    image: apexquizImg,
    overview:
      'Apex Quiz is a fast, competitive trivia webapp. Questions rotate on a timer, answers lock in instantly, and the leaderboard repaints live as scores land.',
    problem:
      'Trivia night was trapped in group chats: manual scoring, no pacing, and the scoreboard only ever existed on a napkin.',
    solution:
      'A real-time quiz engine on Firebase — timed question rotation, answer locking, streak tracking, and a leaderboard fed by Firestore listeners.',
    engineering: [
      'Timed question flow with answer locking and instant streak tracking',
      'Live leaderboard driven by Firestore listeners — rankings update as answers land',
      'Session state machine (lobby → question → results) with safe transitions',
      'Keyboard-first play with reduced-motion support for accessibility',
    ],
    outcome:
      'Rounds run themselves: questions, scoring and the ranking screen update live with zero reloads — and every game is replayable.',
    tech: ['React', 'Firebase', 'Firestore', 'Tailwind'],
    links: { github: 'https://github.com/bigscode/apex-quiz', live: 'https://apex-quiz-2e25e.web.app' },
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
    year: '2026',
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
    id: 'zustand-todo',
    index: '04',
    title: 'Zustand To-Do App',
    year: '2026',
    tagline: 'State management, proven in production.',
    description:
      'A task manager built to demonstrate Zustand in action — fast, predictable state with minimal boilerplate and instant UI updates.',
    visual: 'forms',
    image: zustandtodoImg,
    overview:
      'A polished to-do webapp that showcases Zustand\u2019s store architecture: tasks, filters and preferences all live in small, composable stores with selector-based re-renders.',
    problem:
      'Client state gets messy fast — props drilling, stale values and components re-rendering for data they do not use.',
    solution:
      'Zustand stores split by concern, with scoped selectors so only the components that care re-render. Actions update state immutably, so UI stays in sync instantly.',
    engineering: [
      'Zustand stores with sliced selectors to keep re-renders minimal',
      'Persistent task list via the persist middleware (localStorage)',
      'Optimistic add/toggle/delete with instant UI feedback',
      'Drag-and-drop reordering wired into the store without prop drilling',
    ],
    outcome:
      'A to-do app that stays responsive with hundreds of tasks open — and a store layer clean enough to copy into any project.',
    tech: ['React', 'Zustand', 'Tailwind', 'Vite'],
    links: { github: 'https://github.com/bigscode/zustand-todo', live: 'https://zustand-to-do-app.web.app' },
  },
  {
    id: 'logimove',
    index: '05',
    title: 'LogiMove',
    year: '2026',
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
    id: 'abiaway',
    index: '06',
    title: 'AbiaWay Smart Transit',
    year: '2026',
    tagline: 'Smart transit for Abia State.',
    description:
      'Live bus tracking, digital wallet payments and route booking for Abia State\u2019s public transportation — built with team Byte Builders as a group capstone.',
    visual: 'logistics',
    image: abiawayImg,
    overview:
      'AbiaWay connects passengers, drivers and administrators through one ecosystem: real-time bus tracking on an interactive map, cashless digital wallet, route planning with seat booking, a driver dashboard with GPS navigation, and an AI travel assistant.',
    problem:
      'Abia State\u2019s transit ran on manual schedules and cash-only payments. Passengers waited blind at stops, drivers had no route guidance, and operators had zero visibility into fleet operations — a recipe for long waits, revenue leakage and guesswork.',
    solution:
      'A web app where passengers see live buses and ETAs, top up wallets and tap to pay, plan routes and book seats; drivers get trip management with live location sharing; administrators get fleet dashboards, payment analytics and route optimization — plus an AI assistant that answers route and fare questions.',
    engineering: [
      'Leaflet/React-Leaflet map layer streaming live bus positions and ETAs',
      'Digital wallet with top-up flows and tap-to-pay simulation, persisted server-side',
      'Route planning and booking state machine with seat selection',
      'Driver trip management (start/pause/end) with live capacity and GPS reporting',
      'Fleet analytics views with passenger demand patterns for route optimization',
    ],
    outcome:
      'A capstone MVP that covers the full passenger journey — track, plan, book, pay, board — with 1,000+ registered users, 50+ tracked buses and sub-2-second queries as the success bar.',
    tech: ['React', 'Leaflet', 'Firebase', 'Tailwind'],
    links: { github: 'https://github.com/bigsmart2026-hue/abiaway', live: 'https://abiaway-transit.web.app/' },
  },
]
