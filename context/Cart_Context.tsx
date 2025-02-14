"use client";

import React, { createContext, useContext, useReducer, useState, ReactNode, useEffect } from "react";
import { toast } from "react-hot-toast";

interface CartItem {
  image: string;
  _id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

interface CartAction {
  type: 'ADD_TO_CART' | 'REMOVE_FROM_CART' | 'UPDATE_QUANTITY' | 'CLEAR_CART' | 'SET_CART';
  payload?: any;
}

// Initial State
const initialCartState: CartState = {
  items: [],
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingProduct = state.items.find((item) => item._id === action.payload._id);
    
      if (existingProduct) {
        alert('Item Already In Cart!');
        return {
          ...state,
          items: state.items.map((item) =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        alert('Item Added to Cart!');
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }
    }
    
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload._id),
      };
    }

    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload._id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }

    case 'CLEAR_CART': {
      return {
        ...state,
        items: [],
      };
    }

    case 'SET_CART': {
      return {
        ...state,
        items: action.payload || [],
      };
    }

    default:
      return state;
  }


};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | null>(null);



export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  
 // Load cart from localStorage on first render
 useEffect(() => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    const parsedCart = JSON.parse(storedCart);
    dispatch({ type: 'SET_CART', payload: parsedCart });
  }
}, []);

// Save cart to localStorage whenever it changes
useEffect(() => {
  if (state.items.length > 0) {
    localStorage.setItem('cart', JSON.stringify(state.items));
  } else {
    localStorage.removeItem('cart'); // Clear localStorage if cart is empty
  }
}, [state.items]);

return (
  <CartContext.Provider value={{ state, dispatch }}>
    {children}
  </CartContext.Provider>
);
};

// Custom Hook for Using Cart
export const useCart = () => {
const context = useContext(CartContext);
if (!context) {
  throw new Error('useCart must be used within a CartProvider');
}
return context;
};
