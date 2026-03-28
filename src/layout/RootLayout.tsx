"use client";

import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../layout/NavBar";

/**
 * 🔷 ROOT LAYOUT
 * Handles:
 * - persistent navbar/footer
 * - page transitions
 * - loading state
 */
export default function RootLayout() {
  const location = useLocation();
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div className="relative text-white overflow-x-hidden">
      {/* 🔷 NAVBAR (persistent) */}
      <Navbar menu={[{ label: "Home", href: "/" }]} />

      {/* 🔷 GLOBAL LOADING BAR */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-0.5 z-999">
          <div className="h-full w-full bg-cyan-400 animate-pulse" />
        </div>
      )}

      {/* 🔷 PAGE TRANSITIONS */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
