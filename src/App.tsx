import { RouterProvider } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import ErrorBoundary from "./features/ErrorBoundary/ErrorBoundary";
import { router } from "./router";
import { useThemeContext } from "./features/providers/ThemContextProvider/ThemeContext";
import { BG_COLOR } from "./App.constants";

function App() {
  const {theme, setTheme} = useThemeContext();

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div style={{backgroundColor: BG_COLOR[theme as keyof typeof BG_COLOR]}}>
      <div className="root-content">
        <button
          id="theme"
          onClick={switchTheme}
          style={{
            color: "#fff",
            backgroundColor: theme == "light" ? "#7cb0c5" : "#000"
          }}
        >{theme === "light" ? "light" : "dark"}</button>
        <h6 className="message-app">This is a mock website for studies</h6>
          <Header />
          <ErrorBoundary fallback={<Modal />}>
            <RouterProvider router={router}/>
          </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
