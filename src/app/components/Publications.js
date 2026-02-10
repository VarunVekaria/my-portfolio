export default function Publications() {
  const publications = [
    {
      title: "Stock Market Prediction using LSTM",
      description: "(Algorithmic Trading, Version Control – Git, Financial Engineering)",
      link: "https://ieeexplore.ieee.org/abstract/document/10306549",
    },
    {
      title: "Multi-label classification for identifying trauma types on social media",
      description: "(Predictive Analytics, Data Visualization)",
      link: "https://www.researchgate.net/publication/381586577_A_Multi-label_Classification_Approach_to_Detect_Types_of_Traumas_on_Social_Media",
    },
    {
      title: "Detecting Kidney Abnormalities in Decentralized Healthcare via Federated Transfer Learning",
      description: "(Distributed Computing, Medical Imaging)",
      link: "https://www.sciencedirect.com/science/article/pii/S1877050924006495",
    },
  ];

  return (
    <div className="py-12 md:py-16" style={{ backgroundColor: "#1A1B26" }}>
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-semibold text-white mb-2">Publications</h2>
        <div
          className="h-0.5 w-16 mb-8 rounded-full"
          style={{ background: "linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)" }}
        />
        <div className="space-y-4">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="rounded-lg border border-white/10 p-6 bg-white/5 hover:border-white/20 transition-colors"
            >
              <h3 className="text-base font-semibold text-white mb-2">{publication.title}</h3>
              <p className="text-neutral-400 text-sm mb-4">{publication.description}</p>
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium inline-flex items-center gap-2 transition-opacity hover:opacity-90"
                style={{ color: "#38BDF8" }}
              >
                Read
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
