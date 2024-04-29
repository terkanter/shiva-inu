import { create } from 'zustand'

export const useStore = create((set, get) => ({
    introOut: false,
    setIntroOut: (introOut) => set({ introOut }),
}))