"use client";
import { createContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [appData, setAppData] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log("user in context:", user);

    if (user != null) {
      setAppData({
        user: JSON.parse(user),
      });
    }
  }, []);
  return (
    <AppContext.Provider value={{ appData, setAppData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
