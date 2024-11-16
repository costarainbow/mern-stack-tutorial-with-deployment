import { create } from "zustand";

export const useToast = create((set) => ({
    isOpen: false,
    message: "Hello",
    debouncer: null,
    closeToast: (debouncer) => {
        clearTimeout(debouncer)
        set({ isOpen: false })
    },
    setMessage: (message) => set({ message }),
    sendMessage: async (message, debouncer) => {
        clearTimeout(debouncer)
        set({ 
            isOpen: true, 
            message,
            debouncer: setTimeout(() => set({ isOpen: false }), 3000)
        });
        console.log(debouncer)
    }
}));