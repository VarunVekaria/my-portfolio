import { agenticStack, agenticPrinciples } from "../data/content";
import Section from "./Section";
import Reveal from "./Reveal";

// Flat list for the ticker along the bottom of the section.
const ticker = agenticStack.flatMap((group) => group.items);

export default function AgenticStack() {
  return (
    <Section
      id="agentic"
      eyebrow="What I actually work with"
      title="Agentic AI & LLM Systems"
      lede="Agents aren't a demo layer I bolted on. These are the protocols, frameworks and evaluation practices behind the systems below — the ones running in production, deployed, traced, and reachable from other people's MCP clients."
      background="#16171E"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {agenticStack.map((group, i) => (
          <Reveal key={group.title} delay={i * 70}>
            <div className="gradient-border h-full rounded-xl p-6 border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
              <div className="flex items-center gap-2.5 mb-3">
                <span
                  className="h-2 w-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: group.accent }}
                />
                <h3 className="text-base font-semibold text-white">{group.title}</h3>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed mb-5">{group.blurb}</p>
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.04] text-neutral-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* How I decide, not just what I use */}
      <Reveal delay={120}>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {agenticPrinciples.map((p) => (
            <div
              key={p.title}
              className="rounded-xl p-6 border-l-2 bg-white/[0.02]"
              style={{ borderLeftColor: "#8B5CF6" }}
            >
              <h4 className="text-sm font-semibold text-white mb-2">{p.title}</h4>
              <p className="text-sm text-neutral-400 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* ticker */}
      <Reveal delay={160}>
        <div className="marquee mt-14 overflow-hidden" aria-hidden="true">
          <div className="marquee-track gap-3">
            {[...ticker, ...ticker].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="whitespace-nowrap text-xs px-3 py-1.5 rounded-full border border-white/10 text-neutral-500"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
