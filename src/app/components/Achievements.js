import { achievements } from "../data/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Recognition"
      title="Achievements"
      width="max-w-4xl"
    >
      <div className="space-y-4">
        {achievements.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <div className="gradient-border rounded-xl border border-white/10 p-6 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
              <div className="flex items-start gap-4">
                <span
                  className="flex-shrink-0 mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{ background: "rgba(139,92,246,0.14)" }}
                  aria-hidden="true"
                >
                  <svg
                    className="h-4 w-4"
                    style={{ color: "#C4B5FD" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.048 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118L2.176 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.673z"
                    />
                  </svg>
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-base font-semibold text-white leading-snug">
                      {item.title}
                    </h3>
                    <span className="text-xs text-neutral-500 flex-shrink-0">{item.badge}</span>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
