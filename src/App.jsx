import { Suspense, lazy } from 'react'
import { MotionConfig } from 'framer-motion'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { getMuiTheme } from './styles/muiTheme'
import { useThemeStore } from './store/themeStore'
import ThemeEffect from './context/ThemeContext'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Philosophy from './sections/Philosophy'
import Services from './sections/Services'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { marqueeItems } from './data/site'

const CaseStudyModal = lazy(() => import('./components/CaseStudyModal'))

export default function App() {
  const theme = useThemeStore((s) => s.theme)

  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider theme={getMuiTheme(theme)}>
        <CssBaseline />
        <ThemeEffect />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <Marquee items={marqueeItems} />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Philosophy />
          <Services />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <Suspense fallback={null}>
          <CaseStudyModal />
        </Suspense>
      </ThemeProvider>
    </MotionConfig>
  )
}