import { profile } from "../data/content";

const links = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Google Scholar", href: profile.scholar },
  { label: "Videofolio", href: profile.videofolio },
  { label: "Resume", href: profile.resume },
];

export default function Footer() {
  const mailto = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    profile.email
  )}&su=${encodeURIComponent(profile.emailSubject)}&body=${encodeURIComponent(
    profile.emailBody
  )}`;

  return (
    <footer
      className="border-t border-white/10 py-14"
      style={{ backgroundColor: "#16171E" }}
    >
      <div className="container mx-auto px-5 max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
          Let&apos;s build something.
        </h2>
        <p className="text-neutral-400 text-sm leading-relaxed max-w-lg mx-auto mb-7">
          I&apos;m looking for AI engineering and full-stack roles where I can own products
          end to end. If that sounds like your team, I&apos;d love to talk.
        </p>

        <a
          href={mailto}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium text-sm transition-transform hover:-translate-y-0.5"
          style={{ background: "linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)" }}
        >
          {profile.email}
        </a>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-neutral-600 mt-10">
          Built with Next.js and Tailwind by {profile.name}.
        </p>
      </div>
    </footer>
  );
}
