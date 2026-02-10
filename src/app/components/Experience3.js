export default function Experience3() {
  return (
    <div className="py-6 pb-12 md:pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div
          className="rounded-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 border border-white/10 bg-white/5"
          style={{ backgroundColor: "rgba(26, 27, 38, 0.6)" }}
        >
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Front-end & Design Developer — UNICODE
            </h3>
            <p className="text-sm mb-4" style={{ color: "#38BDF8" }}>10/2021 — 10/2022</p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-neutral-300">
              <li>Mastered core principles of UI-UX design and ReactJS, contributing to the successful launch of three user-friendly applications for an NFT marketplace and fitness sector.</li>
              <li>Designed and implemented a feedback mechanism for HackPrep, collecting insights from 100+ attendees to refine future coding events; analysis led to enhanced learning experiences and session relevance.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#8B5CF6" }}>Tech stack</h4>
            <ul className="list-none text-sm leading-relaxed text-neutral-300">
              <li><strong className="text-neutral-200">Languages/Frameworks:</strong> HTML, CSS, JavaScript, ReactJS, UI-UX Design</li>
              <li><strong className="text-neutral-200">Tools:</strong> MaterialUI, Ant Design Library, Figma</li>
              <li><strong className="text-neutral-200">Other:</strong> GitHub, Agile Methodologies, Wireframing, Prototyping, User Research</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
