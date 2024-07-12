import "./App.scss";
import CardCollection from "./components/CardCollection/CardCollection";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import ErrorBoundary from "./features/ErrorBoundary/ErrorBoundary";

function App() {
  return (
    <div className="main-layout">
      <Header />
      <ErrorBoundary fallback={<Modal />}>
        <CardCollection />
      </ErrorBoundary>
    </div>
  );
}

export default App;
