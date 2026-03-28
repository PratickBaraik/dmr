"use client";

import PurposeCard from "../ui/PurposeCard";
import type { PurposeItem } from "../../../data/PurposePoints";
import Section from "../ui/ExistenceCard";

type Props = {
  title?: string;
  subtitle?: string;
  data?: PurposeItem[];
};

export default function PurposeSection({
  title = "Our Purpose",
  subtitle = "Why this club exists",
  data = [],
}: Props) {
  return (
    <Section className="bg-black text-white">
      <div className="max-w-xl">
        <p className="font-heading text-cyan-400/70 tracking-[0.25em] uppercase mb-4">
          {subtitle}
        </p>

        {/* 🔥 BAHIANA DISPLAY FONT */}
        <h2
          className="
            font-display
            text-white

            text-[clamp(2.5rem,5vw,4.5rem)]
            md:text-5xl lg:text-6xl xl:text-7xl

            leading-[1.05]
            tracking-[0.06em]
          "
          style={{
            textShadow: "0 0 25px rgba(34,211,238,0.25)",
          }}
        >
          {title}
        </h2>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data.map((item, index) => (
          <PurposeCard key={index} index={index} {...item} />
        ))}
      </div>
    </Section>
  );
}
