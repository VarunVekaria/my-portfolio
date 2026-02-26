export default function Experience4() {
  return (
    <div
      className="rounded-lg p-6 md:p-8 border border-white/10 bg-white/5"
      style={{ backgroundColor: "rgba(26, 27, 38, 0.6)" }}
    >
      
          <div>
            
            <h3 className="text-lg font-bold text-white mb-2">
              Machine Learning Intern — Rutgers Institute for Health
            </h3>
            <p className="text-sm mb-4" style={{ color: "#38BDF8" }}>05/2025 — 08/2025</p>
            <p className="text-neutral-400 text-sm mb-4">New Brunswick, NJ</p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-neutral-300">
              <li>Engineered a transcript parser with NLP techniques to process longitudinal interviews & extract 5k+ linguistic features.</li>
              <li>Implemented a data pipeline handling 10+ edge cases, ensuring consistent inputs and generating a large-scale dataset.</li>
              <li>Merged 14-day survey data from REDCap and MindLAMP, integrating additional features into a single database.</li>
              <li>Visualized behavior trends using Power BI, enabling researchers to identify 3 fatigue patterns in post-COVID subjects.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#8B5CF6" }}>Tech stack</h4>
            <ul className="list-none text-sm leading-relaxed text-neutral-300">
              <li><strong className="text-neutral-200">Skills:</strong> NLP, Machine Learning, Data Pipelines</li>
              <li><strong className="text-neutral-200">Tools:</strong> REDCap, MindLAMP, Power BI, Python</li>
              <li><strong className="text-neutral-200">Domain:</strong> Healthcare Data, Longitudinal Studies, Data Visualization</li>
            </ul>
          </div>
    </div>
  );
}
