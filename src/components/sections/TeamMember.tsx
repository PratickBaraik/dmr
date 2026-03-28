"use client";

import TeamCard from "../ui/TeamCard";
import { TEAM_MEMBERS } from "../../../data/TeamDate";
import { motion } from "framer-motion";
import { staggerContainer } from "../../lib/motion";

type Props = {
  title?: string;
  subtitle?: string;
};

export default function TeamSection({
  subtitle = "The people driving innovation and execution",
}: Props) {
  return (
    <section className="relative w-full min-h-screen py-24 px-6 md:px-12 overflow-hidden">
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-100 h-100 bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      {/* 🧭 Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-5xl md:text-8xl font-display  text-white tracking-wide">
          Our <span className="text-cyan-400">Team</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">{subtitle}</p>
      </div>

      {/* 🧩 Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          max-w-6xl mx-auto
          grid gap-6
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4
        "
      >
        {TEAM_MEMBERS.map((member, index) => (
          <TeamCard key={member.id} member={member} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
