import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./landingpage";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LandingPage />
    ),
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
