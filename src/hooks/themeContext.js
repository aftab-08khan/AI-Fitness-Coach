"use client";
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  return (
    <ThemeContext.Provider value={{ userData, setUserData }}>
      {children}
    </ThemeContext.Provider>
  );
};
