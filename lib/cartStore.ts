import { create } from 'zustand';

interface CartProduct {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

interface CartState {
  products: CartProduct[];
  addProduct: (product: Omit<CartProduct, 'quantity'>) => void;
  getCount: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  products: [],
  addProduct: (product) => {
    set((state: CartState) => {
      const existing = state.products.find((p) => p.id === product.id);
      if (existing) {
        return {
          products: state.products.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      }
      return {
        products: [...state.products, { ...product, quantity: 1 }],
      };
    });
  },
  getCount: () => get().products.reduce((acc, p) => acc + p.quantity, 0),
})); 