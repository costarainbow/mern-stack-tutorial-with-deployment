import { create } from "zustand";

export const useRedirect = create((set) => ({
    willRedirect: false,
    setWillRedirect: (willRedirect) => set({ willRedirect })
}))