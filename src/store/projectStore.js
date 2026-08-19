import { create } from 'zustand'

export const useProjectStore = create((set) => ({
  activeProject: null,
  openProject: (project) => set({ activeProject: project }),
  closeProject: () => set({ activeProject: null }),
}))