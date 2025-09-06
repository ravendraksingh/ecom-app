"use client";
import { createContext, useReducer, useContext, useEffect } from "react";
const STORAGE_KEY = "niyava_ecom_user";

const CustomerContext = createContext();

const defaultInitialState = {
  id: "",
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  image: "",
};

function init(initialState) {
  if (typeof window === "undefined") return initialState; // SSR guard

  try {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      return JSON.parse(savedState);
    }
  } catch (e) {
    console.error("Failed to load customer from localStorage", e);
  }
  return initialState;
}

function customerReducer(state, action) {
  switch (action.type) {
    case "LOGIN": {
      console.log("state", state);
      console.log("action", action);
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        gender: action.payload.gender,
        image: action.payload.image,
      };
    }
    case "LOGOUT": {
      return { ...defaultInitialState };
    }
    default:
      return state;
  }
}

export function CustomerProvider({ children }) {
  const [state, dispatch] = useReducer(
    customerReducer,
    defaultInitialState,
    init
  );

  // Save to localStorage on every state change
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Failed to save user to localStorage", e);
    }
  }, [state]);

  const login = (user) => {
    dispatch({ type: "LOGIN", payload: user });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <CustomerContext.Provider
      value={{
        user: state,
        login,
        logout,
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
}

export function useCustomer() {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("useEcomAuth must be used within a CustomerProvider");
  }
  return context;
}
