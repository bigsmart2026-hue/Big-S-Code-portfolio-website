import { create } from 'zustand'

export const useCursorStore = create((set) => ({
  variant: 'default',
  setVariant: (variant) => set({ variant }),
}))