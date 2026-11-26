import { create } from "zustand";

type UiState = {
  mobileNavigationOpen: boolean;
  filterDrawerOpen: boolean;
  sidebarOpen: boolean;
  setMobileNavigationOpen: (open: boolean) => void;
  setFilterDrawerOpen: (open: boolean) => void;
  setSidebarOpen: (open: boolean) => void;
};

export const useUiStore = create<UiState>((set) => ({
  mobileNavigationOpen: false,
  filterDrawerOpen: false,
  sidebarOpen: true,
  setMobileNavigationOpen: (mobileNavigationOpen) => set({ mobileNavigationOpen }),
  setFilterDrawerOpen: (filterDrawerOpen) => set({ filterDrawerOpen }),
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
}));
