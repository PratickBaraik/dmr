"use client";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div
        className="
          max-w-7xl mx-auto
          px-5 sm:px-6 md:px-10 lg:px-16
          py-12 sm:py-16
        "
      >
        {/* 🔷 TOP */}
        <div
          className="
            flex flex-col gap-10
            md:flex-row md:justify-between md:items-start
          "
        >
          {/* 🟢 BRAND */}
          <div className="max-w-sm">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cyan-400" />
              <span className="text-lg font-semibold">DMR</span>
            </a>

            <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
              A community built on consistency, endurance, and growth. Run
              stronger together and push beyond your limits.
            </p>
          </div>

          {/* 🔗 LINKS */}
          <div
            className="
              grid grid-cols-2 gap-6
              sm:flex sm:gap-10
            "
          >
            <div>
              <h4 className="text-sm font-semibold mb-3 text-white/80">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="/about" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="/join" className="hover:text-white transition">
                    Join
                  </a>
                </li>
              </ul>
            </div>

            {/* <div>
              <h4 className="text-sm font-semibold mb-3 text-white/80">
                Community
              </h4>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Training
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* 🔻 DIVIDER */}
        <div className="mt-10 border-t border-white/10" />

        {/* 🔽 BOTTOM */}
        <div
          className="
            mt-6
            flex flex-col sm:flex-row
            items-center justify-between
            gap-4
            text-xs text-zinc-500
          "
        >
          <p>© {new Date().getFullYear()} RunClub. All rights reserved.</p>

          <p className="text-center sm:text-right">
            Built for runners who stay consistent.
          </p>
        </div>
      </div>
    </footer>
  );
}
