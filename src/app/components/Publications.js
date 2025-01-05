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
        link: "https://ieeexplore.ieee.org/abstract/document/10306549",
      },
      {
        title: "Detecting Kidney Abnormalities in Decentralized Healthcare via Federated Transfer Learning",
        description: "(Distributed Computing, Medical Imaging)",
        link: "https://ieeexplore.ieee.org/abstract/document/10306549",
      },
    ];
  
    return (
      <div className="bg-blue-900 text-white py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Publications</h2>
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <div
                key={index}
                className="bg-white text-black rounded-lg p-6 shadow-md"
              >
                <h3 className="text-lg font-bold mb-2">{publication.title}</h3>
                <p className="text-gray-700 mb-4">{publication.description}</p>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Link - {publication.link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  