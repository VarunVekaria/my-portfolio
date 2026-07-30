import Reveal from "./Reveal";

/**
 * Standard section shell: anchor id, eyebrow, heading, gradient rule, optional lede.
 */
export default function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  background,
  align = "left",
  width = "max-w-6xl",
}) {
  const centered = align === "center";

  return (
    <section
      id={id}
      className="py-20 md:py-28 scroll-mt-24"
      style={background ? { backgroundColor: background } : undefined}
    >
      <div className={`container mx-auto px-5 ${width}`}>
        <Reveal>
          <div className={centered ? "text-center" : ""}>
            {eyebrow && (
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
                style={{ color: "#8B5CF6" }}
              >
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              {title}
            </h2>
            <div
              className={`gradient-rule h-0.5 w-16 mt-4 rounded-full ${centered ? "mx-auto" : ""}`}
            />
            {lede && (
              <p
                className={`text-neutral-400 leading-relaxed mt-6 ${
                  centered ? "mx-auto max-w-2xl" : "max-w-3xl"
                }`}
              >
                {lede}
              </p>
            )}
          </div>
        </Reveal>

        <div className="mt-12 md:mt-14">{children}</div>
      </div>
    </section>
  );
}
