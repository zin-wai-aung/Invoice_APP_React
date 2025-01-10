import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: localStorage.getItem("theme") || "dark", 
  setTheme: (newTheme) => {
    localStorage.setItem("theme", newTheme); 
    set({ theme: newTheme });
  },
}));

export default useThemeStore;
