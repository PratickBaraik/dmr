"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../lib/motion";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function JoinSection({
  title = "Be Built Different",
  subtitle = "This isn’t just a club — it’s where discipline meets direction.",
}: Props) {
  return (
    <section className="relative w-full py-28 px-6 md:px-12 overflow-hidden">
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-100 h-100 bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-100 h-100 bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        {/* 🔷 Title */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-5xl font-bahiana text-white tracking-wide"
        >
          {title}
        </motion.h2>

        {/* 🔷 Subtitle */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>

        {/* 🔥 Core Message */}
        <motion.p
          variants={fadeUp}
          className="mt-8 text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          Step into a system built for those who refuse to stay average. Every
          session sharpens your mindset, every challenge builds resilience, and
          every step pushes you closer to your peak performance.
          <br />
          <br />
          Whether you're chasing speed, endurance, or mental strength — this is
          where you train harder, move faster, and evolve beyond limits.
        </motion.p>

        {/* ⚡ Value Highlights */}
        <motion.div
          variants={fadeUp}
          className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {[
            "Train with purpose and consistency",
            "Build endurance, discipline & mental strength",
            "Grow alongside driven athletes",
          ].map((item, i) => (
            <div
              key={i}
              className="
                relative 
                rounded-xl 
                border border-white/10 
                bg-white/5 
                backdrop-blur-md 
                px-5 py-4
                text-sm text-gray-300
                overflow-hidden
              "
            >
              {/* subtle vignette glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_70%)]" />

              <span className="relative">{item}</span>
            </div>
          ))}
        </motion.div>

        {/* 🚀 CTA */}
        <motion.div variants={fadeUp} className="mt-14">
          <button
            className="
              relative 
              px-8 py-3 
              rounded-full 
              text-white 
              font-medium
              border border-cyan-400/30
              bg-cyan-500/10
              backdrop-blur-md
              transition
              hover:bg-cyan-400/20
              hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]
            "
          >
            Start Your Run
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
