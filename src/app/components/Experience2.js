export default function Experience2() {
    return (
      <div className="text-white py-10" style={{ backgroundColor: "#001A6E" }}>
        <div className="container mx-auto px-6">
          <div className="bg-white text-black rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Job Description */}
            <div>
              <h3 className="text-xl font-bold mb-2">
              Research Intern - INDIAN INSTITUTE OF TECHNOLOGY (IIT), PATNA              </h3>
              <p className="text-gray-700 mb-4">04/2023 - 10/2023</p>
              <ul className="list-disc list-inside text-sm leading-relaxed">
                <li>
                    Contributed to the research of developing AI models for detecting phisher transactions in cryptocurrency.
                </li>
                <li>
                    Implemented baseline paper algorithms like Node2Vec, Trans2vec and GCN to to benchmark model performance,
                </li>
                <li>
                    Employed Graph Neural Networks (GNN) and classification algorithms on Ethereum data and tested different
                    feature generation techniques reaching phisher node detection accuracy of 98%.
                </li>
              </ul>
            </div>
  
            {/* Technologies Used */}
            <div>
              <h4 className="text-lg font-bold mb-2">TechStack</h4>
              <ul className="list-none text-sm leading-relaxed">
                <li>
                  <strong>Languages/Frameworks:</strong> Python (Machine Learning), Deep Learning
                </li>
                <li>
                  <strong>Tools:</strong> TensorFlow, PyTorch, Jupyter Notebook, Google Colab
                </li>
                <li>
                  <strong>Other Skills:</strong> GitHub, Research Paper Skills, Presentation Skills
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  