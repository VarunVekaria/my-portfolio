import { education } from "../data/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <Section id="education" eyebrow="Background" title="Education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {education.map((edu, i) => (
          <Reveal key={edu.school} delay={i * 70}>
            <div className="gradient-border h-full rounded-xl p-6 md:p-7 border border-white/10 bg-white/[0.03]">
              <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
              <p className="text-base font-medium mb-1" style={{ color: "#38BDF8" }}>
                {edu.school}
              </p>
              <p className="text-sm text-neutral-500 mb-4">
                {edu.location} · {edu.period}
              </p>
              <span
                className="inline-block text-xs px-2.5 py-1 rounded mb-5 font-medium"
                style={{
                  background: "rgba(139,92,246,0.12)",
                  color: "#C4B5FD",
                  border: "1px solid rgba(139,92,246,0.3)",
                }}
              >
                {edu.note}
              </span>
              <ul className="space-y-2">
                {edu.highlights.map((h, hi) => (
                  <li key={hi} className="flex gap-2.5 text-sm text-neutral-300 leading-relaxed">
                    <span
                      className="mt-[0.55rem] h-1 w-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#38BDF8" }}
                      aria-hidden="true"
                    />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
