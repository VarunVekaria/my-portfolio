import { skillGroups } from "../data/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Engineering Stack"
      lede="The fundamentals under the agents: languages, frameworks, data stores and infrastructure I've shipped production code with."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 60}>
            <div className="h-full rounded-xl p-6 border border-white/10 bg-white/[0.03]">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500 mb-5">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-x-5 gap-y-4">
                {group.skills.map((skill) => (
                  <div
                    key={`${group.title}-${skill.name}`}
                    className="group flex flex-col items-center gap-1.5 w-16"
                    title={skill.name}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={skill.src}
                      alt={skill.name}
                      loading="lazy"
                      className={`h-8 w-8 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 ${
                        skill.invert ? "brightness-0 invert" : ""
                      }`}
                    />
                    <span className="text-[0.65rem] text-neutral-500 text-center leading-tight group-hover:text-neutral-300 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
