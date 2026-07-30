"use client";

import { useMemo, useState } from "react";
import { projects, projectCategories } from "../data/content";
import Section from "./Section";
import Reveal from "./Reveal";

function LinkIcon({ label }) {
  if (label === "GitHub") {
    return (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0a12 12 0 0 0-3.81 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.39 1.24-3.24-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.31 1.23.96-.27 1.99-.4 3.01-.4s2.05.14 3.01.4c2.3-1.55 3.31-1.23 3.31-1.23.66 1.64.25 2.86.12 3.16.77.85 1.24 1.91 1.24 3.24 0 4.66-2.8 5.68-5.48 5.98.43.37.82 1.1.82 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.69.83.57A12 12 0 0 0 12 0" />
      </svg>
    );
  }
  return (
    <svg
      className="h-4 w-4"
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
  );
}

function ProjectCard({ project }) {
  const featured = Boolean(project.featured);

  return (
    <article className="gradient-border group flex flex-col h-full rounded-xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors">
      <div className={featured ? "sm:flex sm:items-start" : ""}>
        {/*
          The cover always sits in a fixed 16:10 box matching the artwork's own
          ratio, so it can never be stretched by however tall the copy runs.
        */}
        <div className={featured ? "sm:w-[42%] sm:flex-shrink-0 p-4 sm:pr-0" : ""}>
          <div
            className={`aspect-[16/10] overflow-hidden ${
              featured ? "rounded-lg border border-white/10" : ""
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        <div
          className={`p-5 flex flex-col flex-1 ${
            featured ? "sm:pl-5" : "border-t border-white/10"
          }`}
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-base font-semibold text-white leading-snug">{project.title}</h3>
            {featured && (
              <span
                className="flex-shrink-0 text-[0.65rem] font-medium px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(56,189,248,0.12)",
                  color: "#7DD3FC",
                  border: "1px solid rgba(56,189,248,0.3)",
                }}
              >
                Featured
              </span>
            )}
          </div>

          <p className="text-sm text-neutral-400 leading-relaxed mb-4">{project.summary}</p>

          {project.highlights?.length > 0 && (
            <ul className="space-y-1.5 mb-4">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-2 text-[0.8rem] text-neutral-300 leading-relaxed">
                  <span
                    className="mt-[0.5rem] h-1 w-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#8B5CF6" }}
                    aria-hidden="true"
                  />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-[0.7rem] px-2 py-0.5 rounded border border-white/12 text-neutral-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium inline-flex items-center gap-2 hover:gap-2.5 transition-all w-fit"
            style={{ color: "#38BDF8" }}
          >
            <LinkIcon label={project.linkLabel} />
            {project.linkLabel ?? "View"}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active]
  );

  return (
    <Section
      id="projects"
      eyebrow="Things I've shipped"
      title="Projects"
      lede="Agentic retrieval engines, open-source developer tooling, healthcare computer vision, and consumer products built solo and deployed to real users."
    >
      <Reveal>
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects">
          {projectCategories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(cat)}
                className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
                  isActive
                    ? "text-white border-transparent"
                    : "text-neutral-400 border-white/12 hover:text-white hover:border-white/30"
                }`}
                style={
                  isActive
                    ? { background: "linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)" }
                    : undefined
                }
              >
                {cat}
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
        {visible.map((project, i) => (
          <Reveal
            key={project.title}
            delay={Math.min(i, 6) * 50}
            className={project.featured ? "lg:col-span-2" : ""}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
