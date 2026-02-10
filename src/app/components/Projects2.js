"use client";

export default function Projects2() {
  const projects = [
    {
      title: "Kidney Abnormality Detection through Federated Transfer Learning",
      image: "/images/kidney_abnormality.png",
      github: "https://colab.research.google.com/drive/1DrGG5eagL0EBQ9QT5hS6of8QfIfG4IKF",
      summary: "Federated learning pipeline for detecting kidney abnormalities from medical imaging while preserving data privacy across sites.",
      techStack: ["Flwr", "Distributed Computing", "Google Colab"],
    },
    {
      title: "Bot Chase Neural Network",
      image: "/images/NN.png",
      github: "https://github.com/VarunVekaria/BotChase_neural_network",
      summary: "Neural network agent that learns to play a bot chase game using Keras and custom environment design.",
      techStack: ["Neural Networks", "Keras", "Bot Chase Game"],
    },
    {
      title: "Bot: Grid Fire Escape",
      image: "/images/bot1.png",
      github: "https://github.com/VarunVekaria/bot_traverse",
      summary: "Grid-based pathfinding game in Python with Pygame; implements classic search algorithms for escape behavior.",
      techStack: ["Python", "Path Finding", "Pygame"],
    },
    {
      title: "RAG Project - Code Summarizer",
      image: "/images/rag.png",
      github: "https://github.com/VarunVekaria/RAG-chroma-db",
      summary: "Retrieval-augmented code summarization using ChromaDB, LangChain, and OpenAI for semantic search and generation.",
      techStack: ["ChromaDB", "LangChain", "OpenAI"],
    },
    {
      title: "AI Agent - Daily Aggregated Bitcoin News",
      image: "/images/ai_agent.png",
      github: "https://github.com/VarunVekaria/",
      summary: "Automated pipeline that aggregates daily Bitcoin news from the web and stores structured summaries via Brave API and Supabase.",
      techStack: ["OpenAI", "AWS", "Brave API", "Supabase"],
    },
    {
      title: "Situational Search - Movie Finder",
      image: "images/ai_agent.png",
      github: "https://github.com/VarunVekaria/",
      techStack: ["In the works"]
    },
  ];

  return (
    <div className="pb-12 md:pb-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden border border-white/10 bg-white/5 transition-all duration-300 hover:border-white/20"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-4 border-t border-white/10">
                <h3 className="text-base font-semibold text-white mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-0.5 rounded border border-white/20 text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-neutral-400 leading-snug mb-3">{project.summary}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium inline-flex items-center gap-2 transition-opacity hover:opacity-90"
                  style={{ color: "#38BDF8" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
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
