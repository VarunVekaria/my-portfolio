"use client" 

import { useState } from "react";

export default function Projects2() {
  const projects = [
    {
      title: "Kidney Abnormality Detection through Federated Transfer Learning",
      image: "./images/kidney_abnormality.png",
      github: "https://colab.research.google.com/drive/1DrGG5eagL0EBQ9QT5hS6of8QfIfG4IKF",
      techStack: ["Flwr library", "Distributed Computing", "Google Colab"],
    },
    {
      title: "Bot Chase Neural Network",
      image: "images/NN.png",
      github: "https://github.com/VarunVekaria/BotChase_neural_network",
      techStack: ["Neural Network Architecture", "Keras", "Bot Chase Game"],
    },
    {
      title: "Bot: Grid Fire Escape",
      image: "/images/bot1.png",
      github: "https://github.com/VarunVekaria/bot_traverse",
      techStack: ["Python", "Path Finding Algorithms", "Pygame"],
    },
    {
      title: "RAG Project - Code Summarizer",
      image: "images/rag.png",
      github: "https://github.com/VarunVekaria/RAG-chroma-db",
      techStack: ["Vector DB", "ChromaDB", "LangChain", "OpenAI" ]
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-white text-black py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative border border-gray-300 rounded-lg overflow-hidden shadow-md bg-gray-100"
            >
              <div
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center text-white">
                    <ul className="space-y-2 text-center">
                      {project.techStack.map((tech, i) => (
                        <li key={i} className="text-sm">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0a12 12 0 0 0-3.81 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.39 1.24-3.24-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.31 1.23.96-.27 1.99-.4 3.01-.4s2.05.14 3.01.4c2.3-1.55 3.31-1.23 3.31-1.23.66 1.64.25 2.86.12 3.16.77.85 1.24 1.91 1.24 3.24 0 4.66-2.8 5.68-5.48 5.98.43.37.82 1.1.82 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.69.83.57A12 12 0 0 0 12 0" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
