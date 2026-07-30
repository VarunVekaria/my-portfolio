import { profile, stats } from "../data/content";
import Reveal from "./Reveal";

const logos = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
    alt: "Python",
    className: "about-float about-float-1",
    pos: { top: "2%", left: "8%" },
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
    className: "about-float about-float-2",
    pos: { top: "12%", right: "4%" },
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    alt: "AWS",
    className: "about-float about-float-3 brightness-0 invert",
    pos: { bottom: "16%", left: "4%" },
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    alt: "React",
    className: "about-float about-float-4",
    pos: { bottom: "2%", right: "8%" },
  },
];

const gradientButton = {
  background: "linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)",
};

export default function Hero() {
  const mailto = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email
  )}&su=${encodeURIComponent(profile.emailSubject)}&body=${encodeURIComponent(
    profile.emailBody
  )}`;

  return (
    <section id="about" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* ambient background */}
      <div className="absolute inset-0 grid-backdrop" aria-hidden="true" />
      <div
        className="aurora"
        aria-hidden="true"
        style={{
          width: 520,
          height: 520,
          top: -160,
          left: -120,
          background: "rgba(139, 92, 246, 0.20)",
        }}
      />
      <div
        className="aurora"
        aria-hidden="true"
        style={{
          width: 460,
          height: 460,
          top: 40,
          right: -140,
          background: "rgba(56, 189, 248, 0.16)",
        }}
      />

      <div className="relative container mx-auto px-5 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-14 md:gap-16">
          <div className="w-full max-w-2xl text-center md:text-left">
            <Reveal>
              <span
                className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border mb-6"
                style={{
                  borderColor: "rgba(139,92,246,0.35)",
                  background: "rgba(139,92,246,0.10)",
                  color: "#C4B5FD",
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="absolute inline-flex h-full w-full rounded-full opacity-70"
                    style={{ background: "#8B5CF6" }}
                  />
                </span>
                Open to AI Engineer / Full-Stack roles
              </span>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-5">
                I&apos;m {profile.name}.
                <br />
                <span className="gradient-text">I build agents that ship.</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-lg text-neutral-200 leading-relaxed max-w-xl mx-auto md:mx-0 mb-4">
                {profile.headline}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p className="text-[0.95rem] text-neutral-400 leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
                {profile.bio}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium text-sm transition-transform hover:-translate-y-0.5"
                  style={gradientButton}
                >
                  Resume
                </a>
                <a
                  href={profile.videofolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium text-sm border border-white/15 hover:border-white/35 hover:bg-white/5 transition-colors"
                >
                  Videofolio
                </a>
                <a
                  href={mailto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium text-sm border border-white/15 hover:border-white/35 hover:bg-white/5 transition-colors"
                >
                  Connect with me
                </a>
              </div>
            </Reveal>
          </div>

          {/* floating stack logos */}
          <div className="hidden md:block relative w-full max-w-md h-[380px] flex-shrink-0">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="absolute w-24 h-24 flex items-center justify-center"
                style={logo.pos}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`h-20 w-auto object-contain opacity-90 ${logo.className}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* impact stats */}
        <Reveal delay={300}>
          <div className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden border border-white/10 bg-white/[0.06]">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-5 md:p-6 text-center lg:text-left"
                style={{ backgroundColor: "#12131C" }}
              >
                <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-neutral-200 mt-1.5 font-medium">{stat.label}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
