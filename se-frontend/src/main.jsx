import React from "react";
import ReactDOM from "react-dom/client";
import Browse from "./Components/Browse";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landing from "./Components/Landing.jsx";
import { SearchContextProvider } from "./searchContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing></Landing>,
  },
  {
    path: "browse",
    element: <Browse></Browse>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchContextProvider>
      <RouterProvider router={router} />
    </SearchContextProvider>
  </React.StrictMode>
);
