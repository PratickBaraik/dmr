"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  fullWidth?: boolean;
};

export default function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  fullWidth = false,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  // 🎬 Track section visibility
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🎞️ Smooth like Hero
  const smooth = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // 🎯 Cinematic timeline (same pattern everywhere)
  const opacity = useTransform(smooth, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  const y = useTransform(smooth, [0, 1], [50, -50]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      id={id}
      className={`relative py-16 sm:py-20 md:py-28 lg:py-32 ${className}`}
    >
      <div
        className={`${
          fullWidth
            ? "w-full px-5 sm:px-6 md:px-10"
            : "max-w-7xl mx-auto px-5 sm:px-6 md:px-10 lg:px-16"
        } ${containerClassName}`}
      >
        {children}
      </div>
    </motion.section>
  );
}
