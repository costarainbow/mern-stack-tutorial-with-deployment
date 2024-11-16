import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
		if (!newProduct.name || !newProduct.image || !newProduct.price) {
			return { success: false, message: "Please fill in all fields." };
		}
		const res = await fetch("/api/products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProduct),
		});
        console.log(res)
		const data = await res.json();
		set((state) => ({ products: [...state.products, data.data] }));
		return { success: true, message: "Product created successfully" };
	},
    fetchProducts: async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        set({ products: data.data });
    },
	deleteProduct: async (pid) => {
		const res = await fetch(`/api/products/${pid}`, {
			method: "DELETE",
		});
		const data = await res.json();
		if(!data.success) return { success: false, message: data.message };
		set((state) => ({products: state.products.filter((p) => p._id !== pid)}));
		return { success: true, message: data.message };
	},
	updateProduct: async (updatedProduct) => {
		if(!updatedProduct.name || !updatedProduct.image || !updatedProduct.price) {
			return { success: false, message: "Please fill in all fields." };
		}
		const res = await fetch(`/api/products/${updatedProduct.pid}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedProduct)
		});
		const data = await res.json();
		if(!data.success) return { success: false, message: data.message };
		set((state) => ({products: state.products.map((p) => p._id === updatedProduct.pid ? data.data : p)}));
		return { success: true, message: "Product updated successfully." };
	}
}))