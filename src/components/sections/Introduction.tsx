"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeUp } from "../../lib/motion";

/**
 * 🔷 PRINCIPLES
 */
const principles = [
  {
    title: "Discipline First",
    desc: "Consistency over motivation. We train even when it’s hard.",
  },
  {
    title: "Built for Endurance",
    desc: "We focus on long-term strength, not short-term results.",
  },
  {
    title: "Competitive Mindset",
    desc: "Every session pushes limits — physically and mentally.",
  },
  {
    title: "Real Growth",
    desc: "Measured by progress, not just participation.",
  },
];

export default function Introduction() {
  const ref = useRef(null);

  /**
   * 🔷 SCROLL-BASED CINEMATIC FADE
   */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 15%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className="
        relative isolate overflow-hidden

        /* ✅ NAVBAR OFFSET */
        pt-28 sm:pt-32

        /* ✅ FULL SECTION PRESENCE */
        min-h-[90vh] lg:min-h-screen

        /* ✅ VERTICAL CENTERING */
        flex items-center

        /* ✅ BOTTOM SPACING */
        pb-20 sm:pb-24 md:pb-28
      "
    >
      {/* 🌌 BACKGROUND SYSTEM */}
      <div className="absolute inset-0 -z-10">
        {/* 🔵 primary glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-175 h-175 lg:w-250 lg:h-250 bg-cyan-500/10 blur-[120px] rounded-full" />

        {/* 🔵 secondary glow */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-125 h-125 lg:w-200 lg:h-200 bg-blue-500/5 blur-[100px] rounded-full" />

        {/* ⚫ gradient fade */}
        <div className="absolute bottom-0 left-0 w-full h-[60%] bg-linear-to-t from-black via-transparent to-transparent" />
      </div>

      {/* 🔷 CONTENT WRAPPER */}
      <div
        className="
          w-full
          max-w-7xl  /* ✅ wider for desktop */
          mx-auto

          px-5 sm:px-6 md:px-10 lg:px-16
          text-center
        "
      >
        {/* 🔷 HEADING BLOCK */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="
            space-y-6

            /* ✅ more breathing on large screens */
            lg:space-y-8
          "
        >
          <motion.p
            variants={fadeUp}
            className="
              text-cyan-400
              font-heading
              uppercase
              tracking-[0.4em]
              text-[10px] sm:text-xs
            "
          >
            DMR CLUB
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="
              font-display
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
              text-white
              leading-tight
            "
          >
            Built for Runners.
            <br />
            Driven by Athletes.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
              max-w-xl sm:max-w-2xl lg:max-w-3xl
              mx-auto

              text-zinc-400
              font-body
              text-sm sm:text-base lg:text-lg
              leading-relaxed
            "
          >
            A growing athletics community focused on discipline, endurance, and
            pushing beyond limits. Whether you're starting or competing, this is
            where real runners evolve.
          </motion.p>
        </motion.div>

        {/* 🔷 PRINCIPLES GRID */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="
            mt-14 sm:mt-16 lg:mt-20

            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4

            gap-4 sm:gap-6 lg:gap-8
          "
        >
          {principles.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.03 }}
              className="
                relative group
                p-5 sm:p-6 lg:p-7
                rounded-xl

                bg-white/5
                border border-white/10

                backdrop-blur-md
                overflow-hidden

                transition-all duration-300
              "
            >
              {/* ✨ GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-cyan-400/10 blur-xl" />
              </div>

              {/* ✨ EDGE LIGHT */}
              <div className="absolute inset-0 rounded-xl border border-cyan-400/20 opacity-0 group-hover:opacity-100 transition" />

              {/* 🔷 CONTENT */}
              <div className="relative z-10">
                <h3 className="font-heading text-white text-base sm:text-lg lg:text-xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm lg:text-base text-zinc-400 font-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
