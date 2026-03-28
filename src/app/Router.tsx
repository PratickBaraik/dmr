"use client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import NotFound from "../pages/NotFound";

import Landing from "../pages/Landing";
import About from "../pages/About";

/**
 * 🔷 ROUTER CONFIG
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
