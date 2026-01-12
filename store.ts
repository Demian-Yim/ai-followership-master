
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserState } from './types';

interface GlobalStore {
  user: UserState;
  theme: 'light' | 'dark';
  setUserName: (name: string) => void;
  completeTutorial: () => void;
  toggleTheme: () => void;
  addXP: (amount: number) => void;
}

export const useStore = create<GlobalStore>()(
  persist(
    (set) => ({
      user: {
        userName: '',
        hasCompletedTutorial: false,
        xp: 0,
        level: 1,
        streak: 0,
        badges: [],
        lastActiveDate: null,
      },
      theme: 'light',
      setUserName: (name) => set((state) => ({ user: { ...state.user, userName: name } })),
      completeTutorial: () => set((state) => ({ user: { ...state.user, hasCompletedTutorial: true } })),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      addXP: (amount) => set((state) => {
        const newXP = state.user.xp + amount;
        const newLevel = Math.floor(newXP / 100) + 1;
        return { user: { ...state.user, xp: newXP, level: newLevel } };
      }),
    }),
    { name: 'followership-storage' }
  )
);
