import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CardCollection from "./components/CardCollection/CardCollection";
import Collection from "./components/Collection/Collection";
import CardDetails from "./components/CardDetails/CardDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CardCollection />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/card-collection",
    element: <CardCollection />
  },
  {
    path: "/collection",
    element: <Collection fetchedData={{
      info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null
      },
      results: []
    }} />
  },
  {
    path: "/card-collection/details/:id",
    element: <CardDetails fetchedData={[]} />
  }
]);