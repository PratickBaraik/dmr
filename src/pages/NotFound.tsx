"use client";

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 text-center">
      <h1 className="text-5xl font-display mb-4">404</h1>

      <p className="text-zinc-400 mb-6">
        The page you are looking for does not exist.
      </p>

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
        Back to Home
      </Link>
    </div>
  );
}
