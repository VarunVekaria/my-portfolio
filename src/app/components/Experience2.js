export default function Experience2() {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4 max-w-5xl">
        <div
          className="rounded-lg p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 border border-white/10 bg-white/5"
          style={{ backgroundColor: "rgba(26, 27, 38, 0.6)" }}
        >
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Research Intern — INDIAN INSTITUTE OF TECHNOLOGY (IIT), PATNA
            </h3>
            <p className="text-sm mb-4" style={{ color: "#38BDF8" }}>04/2023 — 10/2023</p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-neutral-300">
              <li>Contributed to the research of developing AI models for detecting phisher transactions in cryptocurrency.</li>
              <li>Implemented baseline paper algorithms like Node2Vec, Trans2vec and GCN to benchmark model performance.</li>
              <li>Employed Graph Neural Networks (GNN) and classification algorithms on Ethereum data and tested different feature generation techniques reaching phisher node detection accuracy of 98%.</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#8B5CF6" }}>Tech stack</h4>
            <ul className="list-none text-sm leading-relaxed text-neutral-300">
              <li><strong className="text-neutral-200">Languages/Frameworks:</strong> Python (Machine Learning), Deep Learning</li>
              <li><strong className="text-neutral-200">Tools:</strong> TensorFlow, PyTorch, Jupyter Notebook, Google Colab</li>
              <li><strong className="text-neutral-200">Other:</strong> GitHub, Research Paper Skills, Presentation Skills</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
