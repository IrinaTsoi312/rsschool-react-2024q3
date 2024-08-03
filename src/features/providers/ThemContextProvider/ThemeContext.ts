import { createContext, useContext } from "react";
import { ThemeContextInitialValue } from "./ThemeContext.types";

const themeInitialValue = {
  theme: "light",
  setTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextInitialValue>(themeInitialValue);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    console.error("There is no ThemeContext!");
  }

  return context;
};