"use client";

import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Section from "../ui/Section";
import { communityPoints } from "../../../data/CommunityPoints";

/**
 * Grid animation
 */
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Existence() {
  const ref = useRef<HTMLDivElement | null>(null);

  /**
   * Scroll tracking
   */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  /**
   * Softer motion (better on mobile)
   */
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <Section
      className="bg-black text-white"
      containerClassName="max-w-[1400px]"
    >
      <div
        ref={ref}
        className="
          grid 
          grid-cols-1 
          lg:grid-cols-2 
          gap-10 sm:gap-12 md:gap-16 
          items-start
        "
      >
        {/* 🧠 LEFT */}
        <motion.div
          style={{ opacity, y }}
          className="
            relative
            lg:sticky lg:top-24
            max-w-xl
          "
        >
          <h2
            className="
              font-bold leading-tight text-white
              text-2xl 
              sm:text-3xl 
              md:text-4xl 
              lg:text-5xl 
              xl:text-6xl
            "
          >
            Why Running Together Works
          </h2>

          <p
            className="
              mt-4 sm:mt-6
              text-zinc-400
              text-sm sm:text-base md:text-lg
              leading-relaxed
            "
          >
            Staying consistent, improving performance, and building endurance is
            difficult when you train alone. A marathon community gives you the
            structure, support, and motivation needed to keep going.
          </p>

          <p
            className="
              mt-3 sm:mt-4
              text-zinc-500
              text-sm sm:text-base
              leading-relaxed
            "
          >
            With the right environment, you don’t just run more—you run better,
            stay committed, and build a stronger, healthier lifestyle over time.
          </p>
        </motion.div>

        {/* 🧩 RIGHT GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            gap-4 sm:gap-6
          "
        >
          {communityPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="
                group 
                p-4 sm:p-5 md:p-6 
                rounded-2xl 
                bg-zinc-900/60 
                border border-white/5 
                hover:border-cyan-400/40
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              <span className="text-cyan-400 text-xs sm:text-sm font-medium">
                0{index + 1}
              </span>

              <h3
                className="
                  mt-2 
                  text-base sm:text-lg md:text-xl 
                  font-semibold 
                  group-hover:text-cyan-300 
                  transition
                "
              >
                {point.title}
              </h3>

              <p
                className="
                  mt-2 sm:mt-3
                  text-zinc-400 
                  text-xs sm:text-sm 
                  leading-relaxed
                "
              >
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
