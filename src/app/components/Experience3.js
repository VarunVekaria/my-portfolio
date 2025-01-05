export default function Experience3() {
    return (
      <div className="text-white py-10" style={{ backgroundColor: "#001A6E" }}>
        <div className="container mx-auto px-6">
          <div className="bg-white text-black rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Job Description */}
            <div>
              <h3 className="text-xl font-bold mb-2">
              Front-end & Design Developer - UNICODE </h3>
              <p className="text-gray-700 mb-4">10/2021 – 10/2022</p>
              <ul className="list-disc list-inside text-sm leading-relaxed">
                <li>
                Mastered core principles of UI-UX design and ReactJS, contributing to the successful launch of three user-friendly
                applications for an NFT marketplace and fitness sector.                </li>
                <li>
                Designed and implemented a feedback mechanism for HackPrep, collecting insights from 100+ attendees to refine
                future coding events; analysis led to enhanced learning experiences and session relevance.
                </li>
              </ul>
            </div>
  
            {/* Technologies Used */}
            <div>
              <h4 className="text-lg font-bold mb-2">TechStack</h4>
              <ul className="list-none text-sm leading-relaxed">
                <li>
                  <strong>Languages/Frameworks:</strong> HTML, CSS, JavaScript, ReactJS, UI-UX Design 
                </li>
                <li>
                  <strong>Tools:</strong> MaterialUI, Ant Design Library, Figma
                </li>
                <li>
                  <strong>Other Skills:</strong> GitHub, Agile Methodologies, Wireframing, Prototyping, User Research
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  