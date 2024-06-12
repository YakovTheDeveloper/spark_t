import { create } from 'zustand'

export const useDataStore = create((set) => ({
    step: 0,
    setStep: (value) => set((state) => ({ step: value })),
    isWelcomeScreen: true,
    setIsWelcomeScreen: (isWelcomeScreen) => set((state) => ({ isWelcomeScreen })),
}))