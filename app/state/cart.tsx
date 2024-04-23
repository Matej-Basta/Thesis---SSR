import {create} from "zustand";
import ProductType from "../types/ProductInterface";

interface CartItem extends ProductType {
    quantity: number;
}

interface GenerationState {
    cart: CartItem[];
    setCart: (cart: CartItem[]) => void;
}


export const useGenerationStore = create<GenerationState>((set) => ({
    cart: [],
    setCart: (cart) => set({cart}),
}));