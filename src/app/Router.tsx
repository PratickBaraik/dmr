"use client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landing from "../pages/Landing";
import About from "../pages/About";

/**
 * Route Definitions
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />, // Landing page (Hero + Existence)
  },
  {
    path: "/about",
    element: <About />, // Separate About page
  },
]);

/**
 * Router Provider Wrapper
 */
export default function AppRouter() {
  return <RouterProvider router={router} />;
}
