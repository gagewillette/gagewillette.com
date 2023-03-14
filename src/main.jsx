import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./landingpage";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./projects";
import AboutMe from "./aboutme";
import Capabilities from "./capabilities";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/about",
    element: <AboutMe />,
  },
  {
    path: "/capabilities",
    element: <Capabilities />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
