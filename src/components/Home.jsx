import { motion } from "motion/react";
import { Link } from "react-router-dom";

const MotionLink = motion.create(Link);

const navItems = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Contact", to: "/contact" },
];

// Shared torn-paper mask
const tornMaskStyle = {
  WebkitMaskImage: "url('/torn-paper.png')",
  WebkitMaskSize: "100% 100%",
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskImage: "url('/torn-paper.png')",
  maskSize: "100% 100%",
  maskRepeat: "no-repeat",
  maskPosition: "center",
};

function TornButton({ label, to, delay }) {
  return (
    <MotionLink
      to={to}
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.06, rotate: -1 }}
      whileTap={{ scale: 0.96 }}
      className="relative block w-32 h-11 md:w-40 md:h-12 cursor-pointer select-none"
    >
      <span
        className="absolute inset-0 bg-white transition-colors duration-300 hover:bg-neutral-100"
        style={tornMaskStyle}
      />
      <span className="relative z-10 flex h-full w-full items-center justify-center px-3 text-center text-sm font-semibold tracking-wide text-black md:text-base">
        {label}
      </span>
    </MotionLink>
  );
}

export default function Home() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center gap-6 overflow-hidden bg-black px-4 pt-20 pb-4 md:flex-row md:items-center md:justify-between md:px-16 md:pt-24 lg:px-65">
      {/* Photo block – on mobile: first (top), on desktop: right side */}
      <div className="order-1 flex flex-col items-center gap-6 md:order-2 md:gap-10">
        {/* Short tagline instead of the full name (name now lives in the navbar) */}
        <motion.p
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-lg uppercase leading-tight text-white sm:text-xl md:text-2xl"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          Full Stack AI Engineer
        </motion.p>

        {/* Container ka aspect ratio photo (1080x1080 square) ke barabar rakha
            hai — isliye object-cover kuch bhi crop nahi karega, pura photo
            corner-to-corner torn-shape ke andar fit hoga */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative h-[260px] w-[260px] shrink-0 sm:h-[300px] sm:w-[300px] md:h-[340px] md:w-[340px]"
          style={tornMaskStyle}
        >
          <img
            src="/muhammad-mughira-asad.png"
            alt="Muhammad Mughira Asad"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </motion.div>
      </div>

      {/* Nav buttons – on mobile: bottom, on desktop: left side */}
      <div className="order-2 flex flex-row flex-wrap items-center justify-center gap-5 md:order-1 md:flex-col md:items-start md:gap-10">
        {navItems.map((item, i) => (
          <TornButton
            key={item.label}
            label={item.label}
            to={item.to}
            delay={0.15 + i * 0.1}
          />
        ))}
      </div>

      {/* Bottom horizontal torn line — tiled at native resolution so the
          jagged texture stays crisp on any screen width. */}
      <div
        className="absolute -bottom-3 left-0 h-6 w-screen md:-bottom-4 md:h-8"
        style={{
          backgroundImage: "url('/torn-line-horizontal.png')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "top left",
          backgroundSize: "auto 100%",
        }}
      />
    </section>
  );
}