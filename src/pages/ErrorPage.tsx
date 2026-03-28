"use client";

import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let message = "Something went wrong.";

  if (isRouteErrorResponse(error)) {
    message = `${error.status} - ${error.statusText}`;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <h1 className="text-3xl font-display mb-4">Error</h1>

      <p className="text-zinc-400 mb-6">{message}</p>

      <Link
        to="/"
        className="
          px-6 py-2 rounded-lg
          bg-cyan-400 text-black
          font-medium
          hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]
          transition
        "
      >
        Go Home
      </Link>
    </div>
  );
}
