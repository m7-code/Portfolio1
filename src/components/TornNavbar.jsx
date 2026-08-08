import { Link } from "react-router-dom";

export const NAVBAR_HEIGHT_CLASS = "h-20 md:h-24"; // keep in sync with pt-* on page sections

/**
 * Fixed navbar with a clean solid background and a dedicated thick
 * torn-line strip along the bottom edge (tiled at native resolution,
 * so it stays crisp instead of stretching/distorting).
 *
 * Mount ONCE in App.jsx above <Routes>.
 */
export default function TornNavbar() {
  return (
    <header className={`fixed top-0 left-0 z-50 w-full ${NAVBAR_HEIGHT_CLASS}`}>
      {/* clean solid paper background */}
      <div className="absolute inset-0 bg-[#f5f3ee]" />

      {/* thick torn-line along the bottom edge, tiled at native res */}
      <div
        className="absolute -bottom-3 left-0 h-6 w-screen md:-bottom-4 md:h-8"
        style={{
          backgroundImage: "url('/torn-line-horizontal.png')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "top left",
          backgroundSize: "auto 100%",
        }}
      />

      <div className="relative flex h-full items-center justify-between gap-4 px-5 sm:px-8 md:px-14">
        {/* Left — logo mark: deer icon + "M7" (bold sans, not the brush font) */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <div
            className="h-7 w-7 bg-black sm:h-9 sm:w-9"
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
            className="text-3xl text-black sm:text-4xl"
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800 }}
          >
            M7
          </span>
        </Link>

        {/* Right — name */}
        <p
          className="text-right text-sm uppercase tracking-wide text-black sm:text-base md:text-3xl"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          Hi, I am Muhammad Mughira Asad
        </p>
      </div>
    </header>
  );
}