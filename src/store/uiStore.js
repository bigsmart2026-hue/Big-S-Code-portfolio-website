import { create } from 'zustand'

export const useUiStore = create((set) => ({
  mobileMenuOpen: false,
  activeSection: 'home',
  openMenu: () => set({ mobileMenuOpen: true }),
  closeMenu: () => set({ mobileMenuOpen: false }),
  toggleMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
  setActiveSection: (id) => set({ activeSection: id }),
}))