import { motion } from "motion/react";
import { tornMaskStyle } from "../tornMask";

/**
 * Full-viewport torn-paper page section. The torn-paper shape fills
 * the ENTIRE screen (edge to edge, same on mobile and desktop, since
 * mask-size:100% 100% always stretches to whatever container size we
 * give it — here that's the full screen).
 *
 * Usage:
 *   <TornSection id="about" title="About">
 *     ...content goes here later...
 *   </TornSection>
 *
 * Reuse this SAME component for every section (About, Services,
 * Projects, Skills, Contact) so they all stay visually identical —
 * just change id/title/children per page.
 */
export default function TornSection({ id, title, children }) {
  return (
    <section
      id={id}
      className="relative flex min-h-screen w-full items-center justify-center bg-black px-4 py-16"
    >
      {/* torn-paper background — fills the full screen */}
      <div className="absolute inset-0 bg-[#f5f3ee]" style={tornMaskStyle} />

      {/* content sits above the mask, stays crisp (not masked) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl px-6 py-10 text-black sm:px-10 sm:py-14"
      >
        {title && (
          <h2
            className="mb-6 text-center text-3xl uppercase leading-tight sm:text-4xl md:text-5xl"
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