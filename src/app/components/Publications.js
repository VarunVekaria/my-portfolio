import { publications } from "../data/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Publications() {
  return (
    <Section
      id="publications"
      eyebrow="Research"
      title="Publications"
      lede="Peer-reviewed work spanning sequence modeling for finance, privacy-preserving federated learning on medical imaging, and multi-label NLP."
      background="#16171E"
      width="max-w-4xl"
    >
      <div className="space-y-4">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 60}>
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border group block rounded-xl border border-white/10 p-6 bg-white/[0.03] hover:bg-white/[0.05] transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-white mb-1 leading-snug">
                    {pub.title}
                  </h3>
                  <p className="text-xs font-medium mb-2" style={{ color: "#8B5CF6" }}>
                    {pub.venue}
                  </p>
                  <p className="text-sm text-neutral-400 leading-relaxed">{pub.description}</p>
                </div>
                <svg
                  className="h-4 w-4 flex-shrink-0 mt-1 text-neutral-500 group-hover:text-sky-400 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
