export default function Experience() {
    return (
      <div className="bg-blue-900 text-white py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="bg-white text-black rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Job Description */}
            <div>
              <h3 className="text-xl font-bold mb-2">
                Full Stack Developer - STUDYPAQ, SAN FRANCISCO (Remote)
              </h3>
              <p className="text-gray-700 mb-4">05/2023 - 08/2023</p>
              <ul className="list-disc list-inside text-sm leading-relaxed">
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
  
            {/* Technologies Used */}
            <div>
              <h4 className="text-lg font-bold mb-2">TechStack</h4>
              <ul className="list-none text-sm leading-relaxed">
                <li>
                  <strong>Languages/Frameworks:</strong> Python (Flask), Next.js
                </li>
                <li>
                  <strong>Tools:</strong> Postman, AWS, OpenAI
                </li>
                <li>
                  <strong>Other Skills:</strong> Software Development Life Cycle,
                  Git
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  