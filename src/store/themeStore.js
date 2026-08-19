import { create } from 'zustand'

const STORAGE_KEY = 'bigscode-theme'

const getInitialTheme = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  } catch {
    return 'dark'
  }
}

export const useThemeStore = create((set) => ({
  theme: typeof window === 'undefined' ? 'dark' : getInitialTheme(),
  toggle: () =>
    set((state) => {
      const next = state.theme === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {}
      return { theme: next }
    }),
}))