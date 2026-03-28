"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import HeroCanvas from "../assets/herocanva.png";

/**
 * 🎬 Hero Section (Self-contained scroll)
 */
export default function HeroSection() {
  /**
   * 🌍 LOCAL SCROLL (global page)
   */
  const { scrollYProgress } = useScroll();

  /**
   * 🎬 Smooth cinematic feel
   */
  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  /**
   * 🎞️ CONTENT ANIMATION
   */
  const opacity = useTransform(smooth, [0, 0.25], [1, 0]);
  const y = useTransform(smooth, [0, 0.25], [0, -80]);

  /**
   * 🌌 BACKGROUND PARALLAX
   */
  const bgScale = useTransform(smooth, [0, 1], [1, 1.1]);
  const bgY = useTransform(smooth, [0, 1], [0, 60]);

  /**
   * ✨ GLOW EFFECT
   */
  const glow = useTransform(smooth, [0, 1], [0.3, 0.7]);

  return (
    <section className="relative min-h-svh sm:min-h-[110vh] md:min-h-[120vh] flex items-center overflow-hidden">
      {/* 🔲 BACKGROUND */}
      <motion.div
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={HeroCanvas}
          alt="Marathon runners"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

        <motion.div
          style={{ opacity: glow }}
          className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay"
        />
      </motion.div>

      {/* 🧱 CONTENT */}
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <motion.div style={{ opacity, y }} className="max-w-xl lg:max-w-2xl">
          {/* 🧠 MICRO LABEL */}
          <p
            className="
    font-heading
    text-cyan-400/80

    text-sm sm:text-base md:text-lg   /* ⬆ increased */

    tracking-[0.25em]                 /* ⬆ more airy */
    uppercase
    mb-4                              /* ⬆ better spacing */
  "
          >
            Endurance • Discipline • Growth
          </p>

          {/* 🔥 HERO HEADING */}
          <h1
            className="
    font-display
    text-white
    tracking-[0.06em]

    text-[clamp(2.8rem,7vw,5.5rem)]   /* ⬆ stronger base */
    md:text-6xl lg:text-7xl xl:text-8xl /* ⬆ dominant scale */

    leading-[1.02]                    /* ⬆ tighter for impact */
  "
            style={{
              textShadow:
                "0 0 25px rgba(34,211,238,0.45)" /* ⬆ stronger glow */,
            }}
          >
            <span className="block text-cyan-400/80">Run Beyond</span>
            <span className="block">Limits</span>
          </h1>

          {/* 🧱 SUBHEADING */}
          <h2
            className="
    font-heading
    mt-4

    text-zinc-300

    text-base sm:text-lg md:text-xl lg:text-2xl  /* ⬆ scaled properly */

    tracking-wide
    leading-relaxed
  "
          >
            Built for consistency. Designed for performance.
          </h2>

          <p className="mt-5 sm:mt-6 font-body text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed max-w-md sm:max-w-lg">
            Join a community where discipline meets endurance. Train with
            focused runners, stay consistent, and push beyond your limits with a
            system built for long-term performance.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
            <button
              className="
                font-body px-6 py-3 rounded-xl 
                bg-cyan-400 text-black font-medium
                border border-cyan-300/40
                shadow-[0_0_20px_rgba(34,211,238,0.4)]
                hover:shadow-[0_0_40px_rgba(34,211,238,0.9)]
                hover:scale-105 active:scale-95
                transition-all duration-300
                w-full sm:w-auto
              "
            >
              Join the Club
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
