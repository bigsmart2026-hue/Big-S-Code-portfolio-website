import { useEffect } from 'react'
import { useThemeStore } from '../store/themeStore'

export default function ThemeEffect() {
  const theme = useThemeStore((s) => s.theme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return null
}