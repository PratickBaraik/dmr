"use client";

import { motion, type Variants } from "framer-motion";
import Section from "../ui/ExistenceCard";
import { communityPoints } from "../../../data/ExistencePoints";

/**
 * 🎞️ Grid animation
 */
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Existence() {
  return (
    <Section
      className="bg-black text-white"
      containerClassName="max-w-[1400px]"
    >
      <div
        className="
          grid grid-cols-1 lg:grid-cols-2 
          gap-12 md:gap-16 lg:gap-20
          items-start
        "
      >
        {/* 🧠 LEFT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative lg:sticky lg:top-24 max-w-xl"
        >
          <p className="font-heading text-cyan-400/70 tracking-[0.25em] uppercase mb-4">
            Community Advantage
          </p>

          <h2 className="font-display text-white text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
            Why Running <span className="text-cyan-400/80">Together</span> Works
          </h2>

          <p className="mt-6 text-zinc-300">
            Staying consistent, improving performance, and building endurance is
            difficult when you train alone.
          </p>

          <p className="mt-4 text-zinc-500">
            With the right environment, you don’t just run more—you run better.
          </p>
        </motion.div>

        {/* 🧩 RIGHT GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {communityPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="
                group p-5 rounded-2xl
                bg-zinc-900/60 border border-white/5
                hover:border-cyan-400/40
                transition-all duration-300
              "
            >
              <span className="text-cyan-400/80 text-xs">0{index + 1}</span>

              <h3 className="mt-3 text-white">{point.title}</h3>

              <p className="mt-3 text-zinc-400">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
