"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  /**
   * Lock scroll when menu is open (important UX fix)
   */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* 🔷 NAVBAR */}
      <nav
        className="
          fixed top-0 left-0 w-full z-50
          backdrop-blur-md bg-black/40
          border-b border-white/10
        "
      >
        <div
          className="
            max-w-7xl mx-auto 
            px-4 sm:px-6 md:px-10 lg:px-16
            h-14 sm:h-16
            flex items-center justify-between
            relative
          "
        >
          {/* 🟢 LEFT: LOGO */}
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-400" />

              {/* Desktop brand */}
              <span className="hidden sm:block font-techno text-white tracking-wide">
                DMR
              </span>
            </a>
          </div>

          {/* 🔵 CENTER (MOBILE ONLY) */}
          <div className="absolute left-1/2 -translate-x-1/2 sm:hidden">
            <a href="/">
              <span className="font-techno text-white tracking-wide text-sm">
                DMR
              </span>
            </a>
          </div>

          {/* 🟣 RIGHT (DESKTOP) */}
          <div className="hidden sm:flex items-center gap-5 md:gap-6">
            <a
              href="/about"
              className="
                text-zinc-300 text-sm md:text-base
                hover:text-white transition
              "
            >
              About
            </a>

            <button
              className="
                inline-flex items-center justify-center
                px-4 py-1.5
                rounded-md
                bg-cyan-400 text-black font-medium
                text-sm

                border border-cyan-300/40

                shadow-[0_0_10px_rgba(34,211,238,0.35)]
                hover:shadow-[0_0_18px_rgba(34,211,238,0.7)]

                hover:-translate-y-px
                active:scale-95

                transition-all duration-200
              "
            >
              Join Now
            </button>
          </div>

          {/* 📱 MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="
              sm:hidden 
              text-white 
              p-2 rounded-md
              hover:bg-white/5
              transition
            "
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* 📱 OFFCANVAS MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* 🔲 BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm"
            />

            {/* 📦 PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="
                fixed top-0 right-0 h-full
                w-[80%] sm:w-[60%] max-w-sm
                bg-zinc-900 z-50
                p-6 sm:p-8
                flex flex-col
              "
            >
              {/* ❌ CLOSE */}
              <div className="flex justify-between items-center">
                <span className="font-techno text-white">DMR</span>

                <button
                  onClick={() => setOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-md transition"
                >
                  <X className="text-white" size={22} />
                </button>
              </div>

              {/* 🔗 MENU ITEMS */}
              <div className="mt-12 flex flex-col gap-6">
                <a
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="
                    text-base text-white
                    hover:text-cyan-300 transition
                  "
                >
                  About
                </a>

                <button
                  className="
                    w-fit
                    inline-flex items-center justify-center
                    px-5 py-2
                    rounded-md
                    bg-cyan-400 text-black font-medium
                    text-sm

                    border border-cyan-300/40

                    shadow-[0_0_12px_rgba(34,211,238,0.4)]
                  "
                >
                  Join Now
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
