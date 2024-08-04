"use client";

import { useState } from "react";
import { ContextProps } from "../../../assets/types";
import { ThemeContext } from "./ThemeContext";

export default function ThemeContextProvider({ children }: ContextProps) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
