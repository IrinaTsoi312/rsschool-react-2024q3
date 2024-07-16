import "./App.scss";
import CardCollection from "./components/CardCollection/CardCollection";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import ErrorBoundary from "./features/ErrorBoundary/ErrorBoundary";
import DataContextProvider from "./features/providers/DataContextProvider/DataContextProvider";
import SearchContextProvider from "./features/providers/SearchContextProvider/SearchContextProvider";

function App() {
  return (
    <>
      <h6 className="message-app">This is a mock website for studies</h6>
      <div className="root-component">
        <SearchContextProvider>
          <DataContextProvider>
            <Header />
            <ErrorBoundary fallback={<Modal />}>
              <CardCollection />
            </ErrorBoundary>
          </DataContextProvider>
        </SearchContextProvider>
      </div>
    </>
  );
}

export default App;
