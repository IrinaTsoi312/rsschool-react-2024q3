import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.tsx";
import CardCollection from "./components/CardCollection/CardCollection.tsx";
import Collection from "./components/Collection/Collection.tsx";
import CardDetails from "./components/CardDetails/CardDetails.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "card-collection",
        element: <CardCollection />,
        children: [
          {
            path: "collection",
            element: <Collection fetchedData={{
              info: {
                count: 0,
                pages: 0,
                next: null,
                prev: null
              },
              results: []
            }}/>
          },
          {
            path: "details/:id",
            element: <CardDetails fetchedData={{
              info: {
                count: 0,
                pages: 0,
                next: null,
                prev: null
              },
              results: []
            }} />
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
