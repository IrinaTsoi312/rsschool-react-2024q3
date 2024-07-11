import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import ErrorBoundary from "./features/ErrorBoundary/ErrorBoundary.tsx";
import Modal from "./components/Modal/Modal.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Modal />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
