import TornSection from "./TornSection";

const stack = [
  "MERN",
  "PERN",
  "PyTorch",
  "Deep Learning",
  "RAG",
  "AI Agents",
  "n8n",
];

const markerFont = { fontFamily: "'Permanent Marker', cursive" };

export default function About() {
  return (
    <TornSection id="about" title="About">
      <p
        className="mb-5 text-center text-base uppercase tracking-wide text-neutral-700 sm:text-xl"
        style={markerFont}
      >
        Full Stack AI Engineer
      </p>

      {/* tech stack pills */}
      <div className="mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-black/70 px-3 py-1 text-xs tracking-wide text-black sm:text-sm"
            style={markerFont}
          >
            {item}
          </span>
        ))}
      </div>

      <div
        className=" space-y-3 text-xl leading-relaxed text-neutral-800 sm:text-xl sm:leading-relaxed"
        style={markerFont}
      >
        <p>
          I'm a Computer Science student at NUML, Multan, focused on Full
          Stack Development and AI-driven systems — building software that
          doesn't just work, but actually thinks.
        </p>
        <p>
          I build real-world applications end to end — frontend, backend,
          and API layer — using React.js, FastAPI, Node.js, Express.js,
          Laravel, MySQL, and MongoDB.
        </p>
        <p>
          My strongest interest lies in Artificial Intelligence — especially
          Deep Learning and Agentic AI. I care about building intelligent
          systems that solve real problems, not just impressive demos.
        </p>
      </div>
    </TornSection>
  );
}