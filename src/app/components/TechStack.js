export default function TechStack() {
  const techStack = [
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", white: true },
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original-wordmark.svg",
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original-wordmark.svg", white: true },

    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
   { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg" , white: true },
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original-wordmark.svg",
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg", white: true },
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg", white: true },
    { url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg", white: true },
   
  ];

  return (
    <div className="pt-8 md:pt-12 pb-16 md:pb-20">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-2xl font-semibold text-white mb-2">Skills</h2>
        <div
          className="h-0.5 w-16 mx-auto mb-12 rounded-full"
          style={{ background: "linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)" }}
        />
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-8 justify-items-center items-center">
          {techStack.map((item, index) => {
            const src = typeof item === "string" ? item : item.url;
            const isWhite = typeof item === "object" && item.white;
            return (
              <div
                key={index}
                className="w-14 h-14 flex justify-center items-center transition-transform duration-300 hover:scale-110 opacity-90 hover:opacity-100"
              >
                <img
                  src={src}
                  alt={`Tech ${index + 1}`}
                  className={`w-full h-full object-contain ${isWhite ? "brightness-0 invert" : ""}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
