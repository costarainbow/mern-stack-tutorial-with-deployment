import { create } from "zustand";

export const useModal = create((set) => ({
    isOpen: false,
    product: {
        name: "",
        price: "",
        image: "",
        pid: ""
    },
    set: (isOpen, message) => set({ isOpen, message }),
    setIsOpen: (value) => set({ isOpen: value }),
    openModal: (name, price, image, pid) => {
        set({ isOpen: true, product: { name, price, image, pid } })
    }
}))