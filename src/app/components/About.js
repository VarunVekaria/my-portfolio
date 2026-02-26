export default function About() {
  const email = "varun.vekaria04@gmail.com"; // Replace with your actual email
  const emailSubject = "Exploring Opportunities – Varun Vekaria";
  const emailBody = `Hi Varun,

I came across your portfolio and would love to connect.
I'm reaching out regarding potential opportunities / collaboration.

Looking forward to speaking with you.

Best,

`;
  
  const logos = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
      alt: "Python",
      className: "about-float about-float-1",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
      className: "about-float about-float-2",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      alt: "AWS",
      className: "about-float about-float-3",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
      alt: "React",
      className: "about-float about-float-4",
    },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ backgroundColor: "#1A1B26" }}
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left: content */}
        <div className="max-w-2xl text-center md:text-left w-full flex-shrink-0">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
            Hello!
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            I&apos;m Varun Vekaria
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-xl mb-8 mx-auto md:mx-0">
          A Full-Stack Developer specializing in TypeScript, React, and Node.js, building scalable, end-to-end applications on AWS. I work across the entire stack—from designing APIs and databases to cloud infrastructure and CI/CD pipelines—and enjoy transforming complex problems into clean, type-safe solutions. Driven to take on new challenges and ship impactful, production-ready products.          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://drive.google.com/file/d/1uFQoP_u3HhJ8eKg_jBvA2tdtaZwqyC1o/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium text-sm transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)",
              }}
            >
              Resume
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium text-sm transition-opacity hover:opacity-90 border border-white/20 hover:border-white/40"
            >
              Connect with me
            </a>
          </div>
        </div>

        {/* Right: dancing logos */}
        <div className="hidden md:block relative w-full max-w-md h-[380px] flex-shrink-0">
          {logos.map((logo, i) => {
            const positions = [
              { top: "5%", left: "10%" },
              { top: "10%", right: "5%", left: "auto" },
              { bottom: "15%", left: "5%" },
              { bottom: "5%", right: "10%", left: "auto" },
            ];
            const pos = positions[i];
            return (
              <div
                key={logo.alt}
                className="absolute w-24 h-24 flex items-center justify-center"
                style={pos}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`h-20 w-auto object-contain opacity-90 ${logo.className}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
