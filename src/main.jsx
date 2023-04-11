import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./landingpage";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dock from "./dock.jsx";
import PassPrinter from "./printer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dock",
    element: <Dock />,
  },
  {
    path: "/pass-printer",
    element: <PassPrinter />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
