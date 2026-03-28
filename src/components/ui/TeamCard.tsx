"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";
import type { TeamMember } from "../../../data/TeamDate";

type Props = {
  member: TeamMember;
  index: number;
};

export default function TeamCard({ member, index }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1 }}
      className="group relative w-full max-w-[320px] mx-auto"
    >
      {/* 🧊 Glass Card */}
      <div
        className="
  relative 
  rounded-2xl 
  border border-white/10 
  bg-white/5 
  backdrop-blur-xl 
  p-5 md:p-6
  h-125 md:h-140 lg:h-150
  flex flex-col
  overflow-hidden
"
      >
        {/* 🌌 Vignette Glow (INSIDE CARD) */}
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(59,130,246,0.12),transparent_70%)]" />
        </div>

        {/* 🖼️ Profile */}
        <div className="relative w-full h-52 md:h-60 mb-4 overflow-hidden rounded-xl">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* 👤 Info */}
        <div className="space-y-1">
          <h3 className="text-lg md:text-xl font-semibold text-white tracking-wide">
            {member.name}
          </h3>

          <p className="text-sm text-cyan-400 font-medium">{member.title}</p>
        </div>

        {/* 📌 Responsibilities */}
        <ul className="mt-4 space-y-1.5 text-sm text-gray-300">
          {member.responsibilities.map((item, i) => (
            <li key={i} className="flex items-start gap-2 leading-snug">
              <span className="text-cyan-400 mt-0.5">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* 🌐 Bottom Ambient (Controlled) */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-20 opacity-0 group-hover:opacity-100 transition">
          <div className="w-full h-full bg-linear-to-t from-cyan-500/10 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}
