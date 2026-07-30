import { experiences } from "../data/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Where I've built"
      title="Experience"
      lede="Small teams, real users, and production systems — healthcare AI at Rutgers, financial software in Mumbai, startup speed in San Francisco, and graph ML research at IIT Patna."
      background="#16171E"
    >
      <div className="relative">
        {/* timeline spine */}
        <div
          className="hidden md:block absolute left-[7px] top-2 bottom-2 w-px"
          style={{
            background:
              "linear-gradient(180deg, rgba(139,92,246,0.6) 0%, rgba(56,189,248,0.35) 60%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        <div className="space-y-5">
          {experiences.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 60}>
              <div className="md:pl-10 relative">
                <span
                  className="hidden md:block absolute left-0 top-8 h-[15px] w-[15px] rounded-full border-2"
                  style={{ backgroundColor: "#16171E", borderColor: "#8B5CF6" }}
                  aria-hidden="true"
                />
                <article className="gradient-border rounded-xl p-6 md:p-7 border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">{job.role}</h3>
                      <p className="text-sm font-medium" style={{ color: "#38BDF8" }}>
                        {job.company}
                      </p>
                    </div>
                    <div className="sm:text-right flex-shrink-0">
                      <p className="text-sm text-neutral-300">{job.period}</p>
                      <p className="text-xs text-neutral-500">{job.location}</p>
                    </div>
                  </div>

                  {job.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[0.7rem] px-2 py-0.5 rounded"
                          style={{
                            background: "rgba(139,92,246,0.12)",
                            color: "#C4B5FD",
                            border: "1px solid rgba(139,92,246,0.25)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-2 mb-5">
                    {job.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex gap-2.5 text-sm text-neutral-300 leading-relaxed">
                        <span
                          className="mt-[0.55rem] h-1 w-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#38BDF8" }}
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-white/10 space-y-1">
                    {Object.entries(job.stack).map(([label, value]) => (
                      <p key={label} className="text-xs text-neutral-400 leading-relaxed">
                        <span className="text-neutral-300 font-medium">{label}:</span> {value}
                      </p>
                    ))}
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
