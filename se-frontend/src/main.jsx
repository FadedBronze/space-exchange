import React from "react";
import ReactDOM from "react-dom/client";
import Browse from "./Components/Browse";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landing from "./Components/Landing.jsx";

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
    <RouterProvider router={router} />
  </React.StrictMode>
);
