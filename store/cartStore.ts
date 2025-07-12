import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartProduct {
  id: number;
  name: string;
  price: string; 
  image: string;
  quantity: number;
}

interface CartState {
  products: CartProduct[];
  addProduct: (product: Omit<CartProduct, "quantity">) => void;
  getCount: () => number;
  getTotal: () => number; // New function to get total price
  updateQuantity: (id: number, quantity: number) => void;
  removeProduct: (id: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
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
      updateQuantity: (id: number, quantity: number) => {
        set((state: CartState) => {
          if (quantity <= 0) {
            return {
              products: state.products.filter((p) => p.id !== id),
            };
          }
          return {
            products: state.products.map((p) =>
              p.id === id ? { ...p, quantity } : p
            ),
          };
        });
      },
      removeProduct: (id: number) => {
        set((state: CartState) => ({
          products: state.products.filter((p) => p.id !== id),
        }));
      },
      getCount: () => get().products.reduce((acc, p) => acc + p.quantity, 0),
      getTotal: () => {
        return get().products.reduce((acc, p) => {
          // Parse price string (e.g., "COP 12.000" to 12000)
          const numericPrice = Number.parseFloat(
            p.price
              .replace(/[^0-9.,]/g, "")
              .replace(".", "")
              .replace(",", ".")
          );
          return acc + numericPrice * p.quantity;
        }, 0);
      },
    }),
    {
      name: "cart-storage", // nombre único para el localStorage
      storage: createJSONStorage(() => localStorage),
      skipHydration: true, // Evita problemas de hidratación
    }
  )
);
