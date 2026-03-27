"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroCanvas from "../assets/herocanva.png";

const HeroSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  /**
   * Scroll tracking
   */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  /**
   * Foreground motion (reduced for responsiveness)
   */
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [1, 1, 0.4, 0],
  );

  const y = useTransform(scrollYProgress, [0, 1], [0, -70]);

  /**
   * Background motion (depth effect)
   */
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  /**
   * Glow intensity
   */
  const glow = useTransform(scrollYProgress, [0, 1], [0.4, 0.8]);

  return (
    <section
      ref={ref}
      className="
        relative 
        min-h-[100svh] sm:min-h-[110vh] md:min-h-[120vh]
        flex items-center 
        overflow-hidden
      "
    >
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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75 sm:bg-black/65 md:bg-black/55 backdrop-blur-[2px]" />

        {/* Cyan lighting */}
        <motion.div
          style={{ opacity: glow }}
          className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay"
        />

        {/* Subtle scanline */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_3px]" />
      </motion.div>

      {/* 🧱 CONTENT */}
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-16">
        <motion.div
          style={{ opacity, y }}
          className="max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl"
        >
          {/* 🔥 HEADING */}
          <div className="relative">
            {/* 🔵 OUTER AURA */}
            <h1
              className="
                absolute inset-0
                font-techno font-bold tracking-[0.06em] sm:tracking-[0.08em]
                text-[clamp(2rem,6vw,4.5rem)] 
                md:text-5xl lg:text-6xl xl:text-7xl
                text-cyan-400 opacity-20
                blur-[8px] sm:blur-[12px] lg:blur-[14px]
                scale-[1.02] sm:scale-105
                leading-[1.1] sm:leading-[1.05] lg:leading-none
              "
            >
              Run Beyond Limits
            </h1>

            {/* 🔷 MID GLOW */}
            <h1
              className="
                absolute inset-0
                font-techno font-bold tracking-[0.06em] sm:tracking-[0.08em]
                text-[clamp(2rem,6vw,4.5rem)] 
                md:text-5xl lg:text-6xl xl:text-7xl
                text-cyan-400 opacity-40
                blur-[4px] sm:blur-[6px]
                leading-[1.1] sm:leading-[1.05] lg:leading-none
              "
            >
              Run Beyond Limits
            </h1>

            {/* ✨ CORE LIGHT */}
            <h1
              className="
                absolute inset-0
                font-techno font-bold tracking-[0.06em] sm:tracking-[0.08em]
                text-[clamp(2rem,6vw,4.5rem)] 
                md:text-5xl lg:text-6xl xl:text-7xl
                text-cyan-300 opacity-70
                leading-[1.1] sm:leading-[1.05] lg:leading-none
              "
              style={{
                textShadow: "0 0 12px rgba(34,211,238,0.8)",
              }}
            >
              Run Beyond Limits
            </h1>

            {/* 🧠 MAIN TEXT */}
            <h1
              className="
                relative
                font-techno font-bold text-white
                tracking-[0.06em] sm:tracking-[0.08em]

                text-[clamp(2rem,6vw,4.5rem)] 
                md:text-5xl lg:text-6xl xl:text-7xl

                leading-[1.1] sm:leading-[1.05] lg:leading-none
              "
            >
              Run Beyond Limits
            </h1>
          </div>

          {/* 📝 DESCRIPTION */}
          <p
            className="
              mt-4 sm:mt-6
              font-body
              text-sm sm:text-base md:text-lg
              text-zinc-300
              leading-relaxed
              max-w-md sm:max-w-lg
            "
          >
            Join a community where discipline meets endurance. Train with
            focused runners, stay consistent, and push beyond your limits with a
            system built for long-term performance.
          </p>

          {/* 🎯 CTA */}
          <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              className="
                px-5 py-2.5 sm:px-6 sm:py-3
                rounded-xl 
                bg-cyan-400 text-black font-medium
                text-sm sm:text-base

                border border-cyan-300/40

                shadow-[0_0_20px_rgba(34,211,238,0.4)]
                hover:shadow-[0_0_35px_rgba(34,211,238,0.8)]

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
};

export default HeroSection;
