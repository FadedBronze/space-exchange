import React from "react";
import ReactDOM from "react-dom/client";
import Browse from "./Components/Browse";
import Add from "./Components/Add";
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
  }, {
    path: "add",
    element: <Add></Add>

  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchContextProvider>
      <RouterProvider router={router} />
    </SearchContextProvider>
  </React.StrictMode>
);
