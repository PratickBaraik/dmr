"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  /**
   * 🔒 Lock scroll when menu is open
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
          backdrop-blur-xl bg-black/40
          border-b border-white/10
          overflow-hidden
        "
      >
        {/* ✨ SUBTLE CYBER LINE */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent" />

        <div
          className="
            max-w-350 mx-auto
            px-5 sm:px-6 md:px-10 lg:px-16
            h-14 sm:h-16
            flex items-center justify-between
            relative
          "
        >
          {/* 🟢 LEFT: LOGO */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)]" />

              {/* Desktop brand */}
              <span
                className="
                  hidden sm:block
                  font-display
                  text-white
                  tracking-[0.12em]
                  text-3xl
                  group-hover:text-cyan-300
                  transition
                "
              >
                DMR
              </span>
            </a>
          </div>

          {/* 🔵 CENTER (MOBILE) */}
          <div className="absolute left-1/2 -translate-x-1/2 sm:hidden">
            <a href="/">
              <span className="font-display text-white tracking-[0.12em] text-sm">
                DMR
              </span>
            </a>
          </div>

          {/* 🟣 RIGHT (DESKTOP) */}
          <div className="hidden sm:flex items-center gap-6 md:gap-8">
            <a
              href="/about"
              className="
                relative
                font-body
                text-zinc-300 text-sm md:text-base

                hover:text-white transition

                after:absolute after:left-0 after:-bottom-1
                after:h-px after:w-0
                after:bg-cyan-400
                hover:after:w-full
                after:transition-all after:duration-300
              "
            >
              About
            </a>

            <button
              className="
                inline-flex items-center justify-center
                px-5 py-2
                rounded-lg

                font-body text-sm font-medium

                bg-cyan-400 text-black

                border border-cyan-300/40

                shadow-[0_0_15px_rgba(34,211,238,0.4)]
                hover:shadow-[0_0_30px_rgba(34,211,238,0.9)]

                hover:-translate-y-px
                active:scale-95

                transition-all duration-300
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
              className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm"
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
                bg-linear-to-b from-zinc-900 to-black

                border-l border-white/10

                z-50
                p-6 sm:p-8
                flex flex-col
              "
            >
              {/* ✨ GLOW EDGE */}
              <div className="absolute left-0 top-0 h-full w-px bg-cyan-400/30" />

              {/* ❌ CLOSE */}
              <div className="flex justify-between items-center">
                <span className="font-display text-white tracking-widest">
                  DMR
                </span>

                <button
                  onClick={() => setOpen(false)}
                  className="p-2 hover:bg-white/5 rounded-md transition"
                >
                  <X className="text-white" size={22} />
                </button>
              </div>

              {/* 🔗 MENU ITEMS */}
              <div className="mt-14 flex flex-col gap-8">
                <a
                  href="/about"
                  onClick={() => setOpen(false)}
                  className="
                    font-heading
                    text-lg
                    text-white

                    hover:text-cyan-300
                    transition
                  "
                >
                  About
                </a>

                <button
                  className="
                    w-fit
                    inline-flex items-center justify-center
                    px-6 py-2.5
                    rounded-lg

                    font-body text-sm font-medium

                    bg-cyan-400 text-black

                    border border-cyan-300/40

                    shadow-[0_0_20px_rgba(34,211,238,0.5)]
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
