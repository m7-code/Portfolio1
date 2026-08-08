import { Link } from "react-router-dom";
import { tornMaskStyle } from "../tornMask";

/**
 * Full-width torn-paper navbar. Mount this ONCE in App.jsx, above
 * <Routes>, so it shows on every page (Home, About, Services...).
 */
export default function TornNavbar() {
  return (
    <header className="relative z-40 w-full">
      {/* torn-paper bar background — thick, spans full width */}
      <div
        className="absolute inset-0 bg-[#f5f3ee]"
        style={{ ...tornMaskStyle, maskPosition: "center top" }}
      />

      <div className="relative flex items-center justify-between gap-4 px-5 py-6 sm:px-8 md:px-14 md:py-8">
        {/* Left — logo mark: deer icon + "M7" */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <div
            className="h-8 w-8 bg-black sm:h-10 sm:w-10"
            style={{
              WebkitMaskImage: "url('/deer-mask.png')",
              maskImage: "url('/deer-mask.png')",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
          <span
            className="text-xl text-black sm:text-2xl"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            M7
          </span>
        </Link>

        {/* Right — name */}
        <p className="text-right text-xs font-semibold uppercase tracking-wide text-black sm:text-sm md:text-base">
          Hi, I am Muhammad Mughira Asad
        </p>
      </div>
    </header>
  );
}