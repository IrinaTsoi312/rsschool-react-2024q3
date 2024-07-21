import "./App.scss";
import CardCollection from "./components/CardCollection/CardCollection";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import ErrorBoundary from "./features/ErrorBoundary/ErrorBoundary";
import DataContextProvider from "./features/providers/DataContextProvider/DataContextProvider";
import SearchContextProvider from "./features/providers/SearchContextProvider/SearchContextProvider";
import { useThemeContext } from "./features/providers/ThemContextProvider/ThemeContext";

function App() {
  const BG_COLOR = { light: "#fff", dark: "#1e353e" };

  const {theme, setTheme} = useThemeContext();

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  
  return (
    <>
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
          <SearchContextProvider>
            <DataContextProvider>
              <Header />
              <ErrorBoundary fallback={<Modal />}>
                <CardCollection />
              </ErrorBoundary>
            </DataContextProvider>
          </SearchContextProvider>
        </div>
      </div>
    </>
  );
}

export default App;
