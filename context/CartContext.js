"use client";
import { createContext, useContext, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
const STORAGE_KEY = "nextjs_cart";

const CartContext = createContext();

const defaultInitialState = {
  cartId: uuidv4(), // Unique ID generated once at initial state
  items: [],
  subtotal: 0,
  discount: 0,
  total: 0,
  totalProducts: 0, // number of distinct product types in cart
  totalQuantity: 0, // sum of all quantities
};

function init(initialState) {
  if (typeof window === "undefined") return initialState; // SSR guard

  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (e) {
    console.error("Failed to load cart from localStorage", e);
  }
  return initialState;
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let updatedItems;
      if (existingIndex > -1) {
        updatedItems = state.items.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }
      return { ...state, items: updatedItems };
    }
    case "INCREASE_QUANTITY": {
      const updatedItems = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, items: updatedItems };
    }
    case "DECREASE_QUANTITY": {
      const updatedItems = state.items
        .map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
      return { ...state, items: updatedItems };
    }
    case "CALCULATE_TOTALS": {
      const subtotal = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      // Example discount: 10% off if subtotal > 100
      const discount = subtotal > 100 ? subtotal * 0.1 : 0;
      const total = subtotal - discount;
      const totalProducts = state.items.length;
      const totalQuantity = state.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );

      return {
        ...state,
        subtotal,
        discount,
        total,
        totalProducts,
        totalQuantity,
      };
    }
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, defaultInitialState, init);

  // Calculate totals whenever items change
  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTALS" });
  }, [state.items]);

  // Save to localStorage on every state change
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [state]);

  const addItem = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addItem,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
