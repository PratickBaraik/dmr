"use client";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">
      {/* 🌌 SUBTLE GRID */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.04]
          bg-[linear-gradient(to_right,#22d3ee20_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee20_1px,transparent_1px)]
          bg-size-[40px_40px]
        "
      />

      {/* ✨ AMBIENT GLOW */}
      <div
        className="
          pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2
          w-125 h-125
          bg-cyan-400/10 blur-[120px] rounded-full
        "
      />

      <div
        className="
          relative z-10
          max-w-350 mx-auto
          px-5 sm:px-6 md:px-10 lg:px-16
          py-16 sm:py-20
        "
      >
        {/* 🔷 TOP */}
        <div
          className="
            flex flex-col gap-12
            md:flex-row md:justify-between md:items-start
          "
        >
          {/* 🟢 BRAND */}
          <div className="max-w-sm">
            <a href="/" className="flex items-center gap-3 group">
              {/* LOGO */}
              <div className="w-9 h-9 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.6)]" />

              {/* BRAND TEXT */}
              <span
                className="
                  font-display
                  text-4xl tracking-widest
                  group-hover:text-cyan-300
                  transition
                "
              >
                DMR
              </span>
            </a>

            {/* DESCRIPTION */}
            <p
              className="
                mt-5
                font-body
                text-sm sm:text-base
                text-zinc-400
                leading-relaxed
              "
            >
              A community built on consistency, endurance, and growth. Run
              stronger together and push beyond your limits.
            </p>
          </div>

          {/* 🔗 LINKS */}
          <div
            className="
              grid grid-cols-2 gap-8
              sm:flex sm:gap-16
            "
          >
            <div>
              <h4
                className="
                  font-heading
                  text-xs sm:text-sm
                  tracking-[0.2em]
                  uppercase
                  mb-4
                  text-cyan-400/70
                "
              >
                Navigation
              </h4>

              <ul className="space-y-3 font-body text-sm sm:text-base text-zinc-400">
                <li>
                  <a
                    href="/about"
                    className="
                      relative inline-block
                      hover:text-white transition
                      after:absolute after:left-0 after:-bottom-1
                      after:h-px after:w-0
                      after:bg-cyan-400
                      hover:after:w-full
                      after:transition-all after:duration-300
                    "
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="/join"
                    className="
                      relative inline-block
                      hover:text-white transition
                      after:absolute after:left-0 after:-bottom-1
                      after:h-px after:w-0
                      after:bg-cyan-400
                      hover:after:w-full
                      after:transition-all after:duration-300
                    "
                  >
                    Join
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 🔻 DIVIDER */}
        <div className="mt-12 border-t border-white/10" />

        {/* 🔽 BOTTOM */}
        <div
          className="
            mt-6
            flex flex-col sm:flex-row
            items-center justify-between
            gap-4

            font-body
            text-xs sm:text-sm
            text-zinc-500
          "
        >
          <p>© {new Date().getFullYear()} DMR. All rights reserved.</p>

          <p className="text-center sm:text-right text-zinc-400">
            Built for runners who stay consistent.
          </p>
        </div>
      </div>
    </footer>
  );
}
