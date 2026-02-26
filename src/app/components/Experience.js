export default function Experience() {
  return (
    <div
      className="rounded-lg p-6 md:p-8 border border-white/10 bg-white/5 backdrop-blur-sm"
      style={{ backgroundColor: "rgba(26, 27, 38, 0.6)" }}
    >
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Full Stack Developer — STUDYPAQ, SAN FRANCISCO (Remote)
            </h3>
            <p className="text-sm mb-4" style={{ color: "#38BDF8" }}>05/2023 — 08/2023</p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-neutral-300">
              <li>
                Designed server-side architecture and constructed effective REST
                APIs using Flask framework and Postman for comprehensive testing
                ensuring 99% endpoint reliability.
              </li>
              <li>
                Developed an ML algorithm and integrated Google APIs to create
                feature-specific video recommendation system catering to niche
                enterprise needs, serving over 10,000 video recommendations
                monthly.
              </li>
              <li>
                Built a scalable pipeline to scrape large web applications by
                parsing their sitemaps and utilized Large Language Models (LLMs)
                to automate custom MongoDB database creation, saving over 100
                hours of manual data entry.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#8B5CF6" }}>Tech stack</h4>
            <ul className="list-none text-sm leading-relaxed text-neutral-300">
              <li><strong className="text-neutral-200">Languages/Frameworks:</strong> JavaScript, Flask, Next.js, ReactJS, Node.js, MongoDB</li>
              <li><strong className="text-neutral-200">Tools:</strong> Postman, AWS, OpenAI, Beautiful Soup, Selenium, Docker</li>
              <li><strong className="text-neutral-200">Other:</strong> Software Development Life Cycle, Git</li>
            </ul>
          </div>
    </div>
  );
}
