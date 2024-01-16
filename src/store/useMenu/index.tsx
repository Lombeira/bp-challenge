import { create } from 'zustand';

interface IUseMenu {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const useMenuStore = create<IUseMenu>()((set) => ({
  isMenuOpen: true,
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
}));
