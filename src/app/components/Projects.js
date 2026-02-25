"use client";

export default function Projects() {
  const projects = [
    {
      title: "Reconnect",
      image: "/images/reconnect.png",
      github: "https://github.com/VarunVekaria/Reconnect",
      summary: "Next.js–TypeScript web app with Flask backend for dementia patients: family-face recognition via InsightFace, memory captions with GPT-4o, and Twilio voice reminders.",
      techStack: [ "Next.js", "AWS", "TypeScript", "OpenAI", "Whisper", "InsightFace", "Computer Vision"],
    },
    {
      title: "OmniMind",
      image: "/images/omnimind.png",
      github: "https://www.youtube.com/watch?v=InGyxCa8okw",
      summary: "Agentic AI bias-mitigation system with FastAPI and Streamlit; MemMachine + Neo4j/PostgreSQL for context storage; multi-LLM comparison (OpenAI, Sonet, Gemini).",
      techStack: ["Docker", "Linux", "CI/CD", "Python", "OpenAI", "FastAPI", "AWS", "Streamlit", "Neo4j", "PostgreSQL"],
    },
    {
      title: "EduProctor",
      image: "/images/eduproctor.png",
      github: "https://github.com/VarunVekaria/eduproctor",
      summary: "Built using Flask backend, integrating InsightFace for face detection, recognition, and embedding extraction. A Next.js + TailwindCSS frontend providing an intuitive interface for uploading classroom videos. Snowflake serves as the data store for embeddings and student metadata, while OpenCV and NumPy handle frame-by-frame analysis. The app runs end-to-end locally, processing classroom recordings into real-time engagement insights.",
      techStack: ["Next.js", "AWS", "Flask", "InsightFace", "Computer Vision", "NumPy", "OpenCV", "Snowflake"],
    },
    {
      title: "My Portfolio",
      image: "/images/my-portfolio.png",
      github: "https://github.com/VarunVekaria/my-portfolio",
      summary: "This site—a responsive portfolio built with Next.js, featuring a dark theme and gradient accents.",
      techStack: ["Next.js", "React", "Tailwind CSS"],
    },
    {
      title: "Stock Market Prediction",
      image: "/images/stock_market_analysis.png",
      github: "https://github.com/VarunVekaria/StockMarketAnalysis",
      summary: "ML-powered stock price forecasting app with a React frontend and Flask API, using TensorFlow for LSTM-based time-series prediction.",
      techStack: ["ReactJS", "Flask", "TensorFlow"],
    },
    {
      title: "Kidney Abnormality Detection through Federated Transfer Learning",
      image: "/images/kidney_abnormality.png",
      github: "https://colab.research.google.com/drive/1DrGG5eagL0EBQ9QT5hS6of8QfIfG4IKF",
      summary: "Federated learning pipeline for detecting kidney abnormalities from medical imaging while preserving data privacy across sites.",
      techStack: ["Flwr", "Distributed Computing", "Google Colab"],
    },
    {
      title: "GamePlan: Data-Driven NBA Schedule Optimization",
      image: "/images/stock_market_visuals.png",
      github: "#",
      summary: "Analyzed 10 seasons of NBA schedules with Python and pandas; built schedule-congestion features, Plotly choropleth travel maps, and XGBoost models to quantify schedule-driven performance impact.",
      techStack: ["Python", "pandas", "Dash", "Plotly", "Regression", "geopy"],
    },
    {
      title: "Trauma Analysis on Social Media",
      image: "/images/trauma.png",
      github: "https://drive.google.com/file/d/1AehK_YT0KMnRUnhTOcH_lEiFULO8pJWU/view?usp=sharing",
      summary: "Multi-label classification of trauma types in social media text using deep learning and OpenAI APIs.",
      techStack: ["Python", "Deep Learning", "OpenAI API"],
    },
  ];

  return (
    <div className="pt-12 md:pt-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-semibold text-white mb-2">Projects</h2>
        <div
          className="h-0.5 w-16 mb-8 rounded-full"
          style={{ background: "linear-gradient(90deg, #8B5CF6 0%, #38BDF8 100%)" }}
        />
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
