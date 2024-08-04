"use client";

import CardCollection from "@/components/CardCollection/CardCollection";
import styles from "./page.module.scss";
import SearchContextProvider from "@/features/providers/SearchContextProvider/SearchContextProvider";
import DataContextProvider from "@/features/providers/DataContextProvider/DataContextProvider";
import { useThemeContext } from "@/features/providers/ThemContextProvider/ThemeContext";
import { Provider } from "react-redux";
import { store } from '@/store/store';

export default function Home() {
  const BG_COLOR = { light: "#fdfff0", dark: "#1e353e" };

  const {theme, setTheme} = useThemeContext();

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  
  return (
    <main className={styles.main} style={{backgroundColor: BG_COLOR[theme as keyof typeof BG_COLOR]}}>
      <button
        id="theme"
        onClick={switchTheme}
        style={{
          color: "#fff",
          backgroundColor: theme == "light" ? "#7cb0c5" : "#000"
        }}
      >{theme === "light" ? "light" : "dark"}</button>
      <h6 className="message-app">This is a mock website for studies</h6>
      <Provider store={store}>
        <SearchContextProvider>
          <DataContextProvider>
            <CardCollection />
          </DataContextProvider>
        </SearchContextProvider>
      </Provider>
    </main>
  );
}
