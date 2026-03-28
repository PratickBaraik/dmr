"use client";

import { useRef } from "react";
import AppRouter from "../app/Router";

/**
 * 🌍 Root App (Clean - No Scroll Context)
 */
export default function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={containerRef} className="relative overflow-x-hidden">
      {/* 🌌 GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-black" />

      {/* 🚀 ROUTER */}
      <AppRouter />
    </div>
  );
}
