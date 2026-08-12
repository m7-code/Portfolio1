// Home.jsx
// React + Tailwind — full-screen hero.
// Colors match the original design (cream paper / black ink / tape tones).
//
// 1) Add these fonts in your index.html <head>:
//    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Space+Mono:wght@400;700&family=Anton&display=swap" rel="stylesheet">
//
// 2) Put these three generated assets in your /public folder:
//    - plane-path.svg        (animated paper airplane that loops on a dotted flight path)
//    - torn-edge-black.png   (bigger, jagged torn-paper strip above the bottom navbar)
//    - world-map-mask.svg    (simplified continents — used to mask the dotted texture behind "BASED IN PAKISTAN")

import React from "react";

const navItems = [
  { label: "Home", to: "#home" },
  { label: "About", to: "#about" },
  { label: "Services", to: "#services" },
  { label: "Projects", to: "#projects" },
  { label: "Skills", to: "#skills" },
  { label: "Contact", to: "#contact" },
];

// scattered twinkling stars — position (top/left in %), size, delay
const stars = [
  { top: "16%", left: "44%", size: 12, delay: 0 },
  { top: "26%", left: "58%", size: 8, delay: 0.4 },
  { top: "40%", left: "36%", size: 7, delay: 0.9 },
  { top: "62%", left: "46%", size: 9, delay: 1.3 },
  { top: "74%", left: "27%", size: 7, delay: 0.6 },
  { top: "20%", left: "9%", size: 8, delay: 1.6 },
  { top: "56%", left: "6%", size: 6, delay: 1.0 },
  { top: "48%", left: "62%", size: 6, delay: 1.8 },
];

function Star({ top, left, size, delay }) {
  return (
    <svg
      className="absolute pointer-events-none"
      style={{
        top,
        left,
        width: size,
        height: size,
        animation: `twinkle 2.2s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        transformOrigin: "center",
      }}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" fill="#181410" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen md:h-screen w-full overflow-y-auto md:overflow-hidden flex flex-col bg-[#eee6d3] text-[#181410]">
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: .15; transform: scale(.6); }
          50%      { opacity: 1;   transform: scale(1.1); }
        }
        @keyframes point {
          0%, 20%   { transform: translate(0, 0) rotate(0deg); }
          10%       { transform: translate(4px, -4px) rotate(-4deg); }
          30%, 100% { transform: translate(0, 0) rotate(0deg); }
        }
        .arrow-point {
          animation: point 2.5s ease-in-out infinite;
          transform-origin: bottom left;
        }
      `}</style>

      {/* ================= TOP NAV — right aligned ================= */}
      <header className="shrink-0 w-full px-4 sm:px-8 md:px-20 pt-4 md:pt-6 pb-2">
        <nav className="flex flex-wrap items-center justify-end gap-x-5 md:gap-x-8 gap-y-1 font-['Space_Mono'] text-[13px] md:text-[15px] tracking-wide">
          {navItems.map((item) => (
            <a key={item.label} href={item.to} className="hover:opacity-60 transition-opacity">
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* ================= MAIN HERO ================= */}
      <section className="relative flex-1 min-h-0 overflow-hidden">
        {stars.map((s, i) => (
          <Star key={i} {...s} />
        ))}

        {/* 2-column grid ALWAYS (even on mobile) so the photo stays top-right and text stays left,
            instead of stacking full-width like before. */}
        <div className="relative w-full h-full px-4 sm:px-8 md:px-20 py-3 md:py-4 grid grid-cols-[1.3fr_1fr] gap-4 sm:gap-6 md:gap-10 items-start">
          {/* LEFT: text content */}
          <div className="relative flex flex-col justify-center h-full">
            <span className="inline-block w-fit bg-[#e4d9bf] border border-black/15 px-3 md:px-5 py-1.5 md:py-2 text-[11px] md:text-[15px] tracking-widest -rotate-2 shadow-[2px_3px_0_rgba(0,0,0,0.08)] mb-3 md:mb-6 font-['Space_Mono']">
              MY PORTFOLIO
            </span>

            <h1 className="font-['Permanent_Marker'] leading-[1.05] text-[26px] sm:text-[36px] md:text-[64px] mb-3 md:mb-5">
              MUHAMMAD
              <br />
              MUGHIRA ASAD
            </h1>

            <span className="inline-block w-fit bg-[#151210] text-[#eee6d3] font-bold tracking-wider text-[11px] md:text-[17px] px-3 md:px-5 py-1.5 md:py-2.5 -rotate-1 mb-3 md:mb-5 font-['Space_Mono']">
              FULL STACK AI ENGINEER
            </span>

            <p className="font-['Space_Mono'] text-[12px] md:text-[16.5px] leading-relaxed text-[#4a4136] max-w-[420px] border-b-2 border-[#181410] pb-2 md:pb-3 mb-4 md:mb-8">
              I build clean, creative and impactful digital experiences.
            </p>

            <div className="flex flex-wrap items-start gap-4 md:gap-6">
              {/* 2-column button grid so all 5 links fit without getting clipped off-screen */}
              <nav className="grid grid-cols-2 gap-2 md:gap-3 max-w-[260px] md:max-w-[320px] font-['Space_Mono']">
                {navItems.slice(1).map((item, i) => (
                  <a
                    key={item.label}
                    href={item.to}
                    className={`bg-[#ddd0b1] border border-black/10 px-3 md:px-5 py-2 md:py-3 text-[11px] md:text-[16px] flex items-center gap-1.5 shadow-[2px_3px_0_rgba(0,0,0,0.07)] transition-transform hover:-translate-y-1 hover:rotate-0 whitespace-nowrap ${
                      i % 2 === 0 ? "-rotate-1" : "rotate-1"
                    }`}
                  >
                    → {item.label}
                  </a>
                ))}
              </nav>

              {/* BASED IN PAKISTAN — dotted texture masked into an actual world-map silhouette */}
              <div className="relative w-[110px] md:w-[170px] -rotate-3 hidden sm:block">
                <div
                  className="absolute -inset-3 opacity-40 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(#181410 1px, transparent 1.4px)",
                    backgroundSize: "6px 6px",
                    WebkitMaskImage: "url(/world-map-dots.svg)",
                    maskImage: "url(/world-map-dots.svg)",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                  }}
                />
                <div className="relative bg-transparent border-2 border-[#181410]/70 px-3 md:px-6 py-3 md:py-5 text-center text-[10px] md:text-[14px] tracking-wide shadow-[3px_4px_0_rgba(0,0,0,0.1)] font-['Space_Mono'] backdrop-blur-[1px]">
                  BASED IN
                  <br />
                  PAKISTAN
                  <svg className="w-6 md:w-9 mx-auto mt-1.5 md:mt-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8z"
                      stroke="#181410"
                      strokeWidth="1.6"
                    />
                    <circle cx="12" cy="10" r="2.6" stroke="#181410" strokeWidth="1.6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: photo + "this is me" + flying-plane graphic — pinned top-right on every screen size */}
          <div className="relative flex flex-col items-end h-full pt-1 md:pt-2">
            <div className="relative">
              {/* tape strip */}
              <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 -rotate-6 w-12 md:w-20 h-4 md:h-7 bg-gradient-to-b from-[#cabb96] to-[#ddd0b1] opacity-85 shadow-[0_2px_4px_rgba(0,0,0,0.18)] z-10" />

              {/* crown */}
              <svg
                className="absolute -top-2 -right-4 md:-top-3 md:-right-8 w-11 md:w-20 rotate-[20deg] z-20"
                viewBox="0 0 70 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 40 L10 15 L22 27 L32 8 L42 27 L54 15 L58 40 Z"
                  stroke="#181410"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  fill="#eee6d3"
                />
                <path
                  style={{ animation: "twinkle 1.8s ease-in-out infinite", transformOrigin: "center", transformBox: "fill-box" }}
                  d="M64 4 L66 10 L72 12 L66 14 L64 20 L62 14 L56 12 L62 10 Z"
                  fill="#181410"
                />
                <path
                  style={{ animation: "twinkle 1.8s ease-in-out infinite .6s", transformOrigin: "center", transformBox: "fill-box" }}
                  d="M2 2 L3.5 6 L7.5 7.5 L3.5 9 L2 13 L0.5 9 L-3.5 7.5 L0.5 6 Z"
                  fill="#181410"
                />
              </svg>

              {/* photo — bigger on desktop, smaller (but still clear) on mobile */}
              <img
                src="muhammad-mughira-asad2.png"
                alt="Muhammad Mughira Asad"
                className="w-[150px] sm:w-[210px] md:w-[420px] lg:w-[460px] max-w-full block rotate-3 drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)]"
              />

              {/* "THIS IS ME" */}
              <div className="absolute -left-1 md:-left-[10px] top-[100%] mt-1.5 md:mt-3 flex items-start gap-1 md:gap-2 -rotate-2">
                <span className="font-['Permanent_Marker'] text-[10px] md:text-[19px] leading-none whitespace-nowrap mt-0.5 md:mt-1">
                  THIS IS ME
                </span>
                <svg className="arrow-point w-6 md:w-12" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 54 C 14 30, 28 12, 52 4" stroke="#181410" strokeWidth="2.6" strokeLinecap="round" />
                  <path d="M36 2 L54 4 L48 20" stroke="#181410" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* ===== "Turning Ideas Into Impact" — animated paper plane looping along a dotted path ===== */}
            <div className="relative mt-10 sm:mt-16 md:mt-28 w-[140px] sm:w-[220px] md:w-[340px]">
              <div className="font-['Permanent_Marker'] text-[11px] sm:text-[15px] md:text-[19px] leading-tight mb-1">
                Turning Ideas
              </div>
              <div className="relative inline-block font-['Permanent_Marker'] text-[11px] sm:text-[15px] md:text-[19px] leading-tight mb-2 md:mb-3">
                Into Impact
                <svg
                  className="absolute -left-4 -right-4 -top-2.5 -bottom-1.5 w-[calc(100%+32px)] h-[calc(100%+16px)]"
                  viewBox="0 0 160 48"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="80" cy="24" rx="76" ry="20" stroke="#181410" strokeWidth="1.8" />
                </svg>
              </div>

              {/* generated asset — see plane-path.svg, drop it in /public.
                  The airplane inside this SVG loops on its own via SMIL animateMotion. */}
              <img src="/paper_plane_continuous_animated.svg" alt="" className="w-full h-[46px] sm:h-[64px] md:h-[90px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOTTOM BLACK NAVBAR — bigger, torn top edge ================= */}
      {/* ================= BOTTOM BLACK NAVBAR ================= */}
<footer className="shrink-0 relative w-full">
  <div className="bg-[#151210] text-[#eee6d3] px-4 sm:px-8 md:px-20 py-4 md:py-5 flex items-center justify-between">
    <span className="font-['Space_Mono'] text-[11px] sm:text-[13.5px] md:text-[15px] tracking-wide">
      Muhammad Mughira Asad — Full Stack AI Engineer
    </span>

    <div className="flex items-center gap-4 md:gap-5">
      <a href="https://linkedin.com/in/your-handle" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-60 transition-opacity">
        <svg width="19" height="19" className="md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
        </svg>
      </a>
      <a href="https://github.com/your-handle" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:opacity-60 transition-opacity">
        <svg width="19" height="19" className="md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.15c-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.62 0-1.24.44-2.26 1.17-3.05-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 5.74 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.81 1.17 3.05 0 4.37-2.66 5.32-5.19 5.6.41.36.77 1.06.77 2.14v3.17c0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z" />
        </svg>
      </a>
      <a href="mailto:you@example.com" aria-label="Email" className="hover:opacity-60 transition-opacity">
        <svg width="19" height="19" className="md:w-[22px] md:h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" xmlns="http://www.w3.org/2000/svg">
          <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
          <path d="M3 6.5l9 6.5 9-6.5" />
        </svg>
      </a>
    </div>
  </div>
</footer>
    </div>
  );
}