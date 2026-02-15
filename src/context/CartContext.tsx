'use client';

import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Product, CartItem, Cart, Variation } from '@/types/woocommerce';
import { trackRemoveFromCart } from '@/lib/analytics';

// Cart Actions
type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity?: number; variation?: Variation; attributes?: Record<string, string> } }
  | { type: 'REMOVE_ITEM'; payload: { id: number; variationId?: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; variationId?: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };

// Initial State
const initialState: Cart = {
  items: [],
  total: 0,
  itemCount: 0,
};

// Cart Reducer
function cartReducer(state: Cart, action: CartAction): Cart {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, quantity = 1, variation, attributes } = action.payload;
      const existingIndex = state.items.findIndex(
        (item) =>
          item.id === product.id &&
          (variation ? item.variation?.id === variation.id : !item.variation)
      );

      let newItems: CartItem[];
      if (existingIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [
          ...state.items,
          { id: product.id, product, quantity, variation, selectedAttributes: attributes },
        ];
      }

      return calculateTotals({ ...state, items: newItems });
    }

    case 'REMOVE_ITEM': {
      const { id, variationId } = action.payload;
      const newItems = state.items.filter(
        (item) =>
          !(item.id === id && (variationId ? item.variation?.id === variationId : !item.variation))
      );
      return calculateTotals({ ...state, items: newItems });
    }

    case 'UPDATE_QUANTITY': {
      const { id, variationId, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { id, variationId } });
      }

      const newItems = state.items.map((item) =>
        item.id === id && (variationId ? item.variation?.id === variationId : !item.variation)
          ? { ...item, quantity }
          : item
      );
      return calculateTotals({ ...state, items: newItems });
    }

    case 'CLEAR_CART':
      return initialState;

    case 'LOAD_CART':
      return calculateTotals({ ...state, items: action.payload });

    default:
      return state;
  }
}

function calculateTotals(cart: Cart): Cart {
  const total = cart.items.reduce((sum, item) => {
    const price = item.variation
      ? parseFloat(item.variation.price)
      : parseFloat(item.product.price);
    return sum + price * item.quantity;
  }, 0);

  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return { ...cart, total, itemCount };
}

// Context
interface CartContextType {
  cart: Cart;
  addToCart: (product: Product, quantity?: number, variation?: Variation, attributes?: Record<string, string>) => void;
  removeFromCart: (id: number, variationId?: number) => void;
  updateQuantity: (id: number, quantity: number, variationId?: number) => void;
  clearCart: () => void;
  isInCart: (id: number, variationId?: number) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('yelira-cart');
    if (savedCart) {
      try {
        const items = JSON.parse(savedCart);
        dispatch({ type: 'LOAD_CART', payload: items });
      } catch (e) {
        console.error('Failed to load cart:', e);
      }
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem('yelira-cart', JSON.stringify(cart.items));
  }, [cart.items]);

  const addToCart = (
    product: Product,
    quantity = 1,
    variation?: Variation,
    attributes?: Record<string, string>
  ) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity, variation, attributes } });
  };

  const removeFromCart = (id: number, variationId?: number) => {
    const item = cart.items.find(
      (i) => i.id === id && (variationId ? i.variation?.id === variationId : !i.variation)
    );
    if (item) {
      trackRemoveFromCart(item.product, item.quantity, item.variation);
    }
    dispatch({ type: 'REMOVE_ITEM', payload: { id, variationId } });
  };

  const updateQuantity = (id: number, quantity: number, variationId?: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, variationId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const isInCart = (id: number, variationId?: number) => {
    return cart.items.some(
      (item) =>
        item.id === id && (variationId ? item.variation?.id === variationId : !item.variation)
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, isInCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
