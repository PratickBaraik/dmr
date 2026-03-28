"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  index: number;
};

export default function PurposeCard({ title, description, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true }}
      className="
        p-6 rounded-2xl
        bg-zinc-900/60 border border-white/5
        hover:border-cyan-400/40
        transition-all duration-300
      "
    >
      <span className="text-cyan-400/70 text-xs">0{index + 1}</span>

      <h3 className="mt-3 text-white text-xl">{title}</h3>

      <p className="mt-4 text-zinc-400">{description}</p>
    </motion.div>
  );
}
