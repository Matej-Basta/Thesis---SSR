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

/* interface GenerationState {
    cart: string;
    setCart: (cart: string) => void;
}


export const useGenerationStore = create<GenerationState>((set) => ({
    cart: "hello",
    setCart: (cart) => set({cart}),
})); */
