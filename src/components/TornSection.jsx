import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { tornMaskStyle } from "../tornMask";

/**
 * Full-viewport torn-paper page section with a built-in back button.
 * The torn-paper shape fills the ENTIRE screen (edge to edge, same on
 * mobile and desktop, since mask-size:100% 100% always stretches to
 * whatever container size we give it — here that's the full screen).
 *
 * Usage:
 *   <TornSection id="about" title="About">
 *     ...content goes here...
 *   </TornSection>
 *
 * Reuse this SAME component for every section (About, Services,
 * Projects, Skills, Contact) so they all stay visually identical AND
 * all get the same back button — just change id/title/children.
 */
export default function TornSection({ id, title, children }) {
  const navigate = useNavigate();

  return (
    <section
      id={id}
      className="relative flex min-h-screen w-full items-start justify-center bg-black px-4 pt-24 pb-10 md:pt-28"
    >
      {/* torn-paper background — fills the full screen */}
      <div className="absolute inset-0 bg-[#f5f3ee]" style={tornMaskStyle} />

      {/* Back button — top-left, small torn-paper pill */}
      <motion.button
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-8 top-10 z-20 flex items-center gap-1.5 sm:left-26 sm:top-32 md:top-8"
        aria-label="Go back"
      >
        <span className="absolute inset-0 bg-black" style={tornMaskStyle} />
        <span className="relative z-10 flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="h-4 w-4">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </span>
      </motion.button>

      {/* content sits above the mask, stays crisp (not masked) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl px-6 py-4 text-black sm:px-10 sm:py-6 md:max-w-4xl lg:max-w-5xl"
      >
        {title && (
          <h2
            className="mb-3 text-center text-3xl uppercase leading-tight sm:text-4xl md:text-5xl"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            {title}
          </h2>
        )}
        {children}
      </motion.div>
    </section>
  );
}