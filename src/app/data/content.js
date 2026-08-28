// Single source of truth for every section on the site.
// Edit here, not in the components.

export const profile = {
  name: "Varun Vekaria",
  role: "AI Engineer · Full-Stack Developer",
  email: "varun.vekaria04@gmail.com",
  emailSubject: "Exploring Opportunities – Varun Vekaria",
  emailBody: `Hi Varun,

I came across your portfolio and would love to connect.
I'm reaching out regarding potential opportunities / collaboration.

Looking forward to speaking with you.

Best,

`,
  resume:
    "https://drive.google.com/file/d/1Tucp0kpxdVOdVI2-cn3XXp5Hfv4fDpgx/view?usp=sharing",
  videofolio: "https://videofolio-varun-vekaria.vercel.app/",
  github: "https://github.com/VarunVekaria",
  linkedin: "https://www.linkedin.com/in/varun-vekaria-a5836a1b2/",
  scholar: "https://scholar.google.com/citations?user=nB7Xq6sAAAAJ&hl=en",
  headline:
    "I build AI-native systems end to end — agent harnesses, retrieval engines, and the eval loops that prove they actually work.",
  bio: "MS Computer Science from Rutgers (Class of 2026 graduate speaker, Outstanding Master's Student Award) and a full-stack engineer with 3+ years shipping production systems. I live in the agentic world: MCP servers, agent skills, custom retrieval indexes, and LLM-as-judge evaluation — while staying in tune with the CS and ML fundamentals underneath. I like ambiguous, high-stakes problems where I get to own the thing from schema to deployed product.",
};

export const stats = [
  { value: "92.7%", label: "FinanceBench accuracy", sub: "SEC agentic-RAG engine" },
  { value: "13", label: "MCP tools shipped", sub: "FastMCP, live on Fly.io" },
  { value: "3", label: "Peer-reviewed papers", sub: "IEEE · ScienceDirect" },
  { value: "5,200+", label: "Students, 1 award", sub: "Outstanding Master's Student" },
];

// ---------------------------------------------------------------------------
// Agentic AI — the frameworks, protocols and practices behind the projects
// ---------------------------------------------------------------------------

export const agenticStack = [
  {
    title: "Agent Runtimes & Protocols",
    blurb:
      "Building the harness, not just the prompt. Production MCP servers with auth, packaged skills, and delegated sub-agents.",
    accent: "#8B5CF6",
    items: [
      "Model Context Protocol (MCP)",
      "FastMCP",
      "Claude Agent Skills",
      "Sub-agents",
      "Tool-use / function calling",
      "Claude Code",
      "OpenAI Codex",
      "Gemini CLI",
      "Claude Desktop connectors",
      "GitHub OAuth 2.1",
    ],
  },
  {
    title: "Orchestration & Workflows",
    blurb:
      "Knowing where the agent belongs. Deterministic steps stay as plain code; open-ended navigation gets handed to a model.",
    accent: "#38BDF8",
    items: [
      "LangChain",
      "LangGraph",
      "CrewAI",
      "n8n",
      "Multi-agent routing",
      "Workflow vs. agent design",
      "ThreadPoolExecutor pipelines",
      "Async tool orchestration",
    ],
  },
  {
    title: "Retrieval & Memory",
    blurb:
      "Vector similarity is a default, not an answer. I pick the index for the document shape — including throwing vectors out entirely.",
    accent: "#8B5CF6",
    items: [
      "PageIndex (vectorless RAG)",
      "Hierarchical document trees",
      "Agentic RAG",
      "ChromaDB",
      "Neo4j graph memory",
      "MemMachine",
      "Snowflake vector store",
      "ElasticSearch",
      "InsightFace 512-D embeddings",
      "Chunking & re-ranking",
    ],
  },
  {
    title: "Evals & Observability",
    blurb:
      "The score matters less than the harness that catches confident, wrong answers. Multi-model judging, tightened rubrics, full trace logs.",
    accent: "#38BDF8",
    items: [
      "LLM-as-a-judge",
      "RAGAS",
      "DeepEval",
      "Langfuse",
      "LangSmith",
      "OpenTelemetry",
      "Grafana",
      "Prometheus",
      "Sentry",
      "Tool-call tracing",
      "Regression eval suites",
    ],
  },
  {
    title: "Models & Serving",
    blurb:
      "Frontier and open-source side by side, benchmarked on the same question set and tuned for cost, tokens and tool calls.",
    accent: "#8B5CF6",
    items: [
      "OpenRouter",
      "Ollama (local inference)",
      "Anthropic Claude",
      "OpenAI GPT-4o",
      "Google Gemini",
      "Qwen",
      "LoRA fine-tuning",
      "HuggingFace",
      "PyTorch",
      "TensorFlow",
      "ElevenLabs voice cloning",
    ],
  },
  {
    title: "Ship & Operate",
    blurb:
      "Every agent above runs somewhere real — containerized, deployed, traced, and reachable by other people's clients.",
    accent: "#38BDF8",
    items: [
      "Fly.io",
      "Vercel",
      "Render",
      "AWS (EC2, SageMaker, EKS)",
      "Docker",
      "Terraform",
      "Jenkins / CI-CD",
      "Supabase",
      "PostgreSQL",
      "FastAPI",
    ],
  },
];

// Practices worth calling out separately from the tool lists.
export const agenticPrinciples = [
  {
    title: "Workflow or agent?",
    body: "One question decides it: do I know the steps ahead of time? Indexing is a fixed path, so it stays a workflow. Retrieval is open-ended — the model has to look, react, and decide the next hop — so that gets the agent.",
  },
  {
    title: "Evals before vibes",
    body: "A single judge run is noisy and rewards confident wrong answers. I tighten the rubric, add known-good references, and run across multiple models so one model's blind spot can't skew the call.",
  },
  {
    title: "Optimize the loop",
    body: "Cost, tokens, and tool calls are the real budget. I benchmark open-source against frontier models on the same question set and cut the hops that don't earn their latency.",
  },
];

// ---------------------------------------------------------------------------
// Skills — grouped, with devicon logos where one exists
// ---------------------------------------------------------------------------

const icon = (slug, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-${variant}.svg`;

export const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Python", src: icon("python") },
      { name: "TypeScript", src: icon("typescript") },
      { name: "JavaScript", src: icon("javascript") },
      { name: "Java", src: icon("java") },
      { name: "C++", src: icon("cplusplus") },
      { name: "SQL", src: icon("mysql"), invert: true },
      { name: "HTML", src: icon("html5") },
      { name: "CSS", src: icon("css3") },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", src: icon("react") },
      { name: "Next.js", src: icon("nextjs"), invert: true },
      { name: "Tailwind CSS", src: icon("tailwindcss", "original") },
      { name: "React Native", src: icon("react") },
      { name: "Material UI", src: icon("materialui") },
      { name: "Figma", src: icon("figma") },
    ],
  },
  {
    title: "Backend & Data",
    skills: [
      { name: "FastAPI", src: icon("fastapi"), invert: true },
      { name: "Flask", src: icon("flask"), invert: true },
      { name: "Node.js", src: icon("nodejs") },
      { name: "Express", src: icon("express"), invert: true },
      { name: "PostgreSQL", src: icon("postgresql") },
      { name: "MongoDB", src: icon("mongodb") },
      { name: "Neo4j", src: icon("neo4j") },
      { name: "Supabase", src: icon("supabase") },
      { name: "Firebase", src: icon("firebase") },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "PyTorch", src: icon("pytorch") },
      { name: "TensorFlow", src: icon("tensorflow") },
      { name: "scikit-learn", src: icon("scikitlearn") },
      { name: "OpenCV", src: icon("opencv") },
      { name: "pandas", src: icon("pandas"), invert: true },
      { name: "NumPy", src: icon("numpy") },
      { name: "Jupyter", src: icon("jupyter") },
      { name: "Keras", src: icon("keras") },
      { name: "Streamlit", src: icon("streamlit") },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", src: icon("amazonwebservices", "original-wordmark"), invert: true },
      { name: "Docker", src: icon("docker") },
      { name: "Terraform", src: icon("terraform"), invert: true },
      { name: "Vercel", src: icon("vercel"), invert: true },
      { name: "Git", src: icon("git") },
      { name: "GitHub", src: icon("github"), invert: true },
      { name: "GitLab", src: icon("gitlab") },
      { name: "Jenkins", src: icon("jenkins") },
      { name: "Grafana", src: icon("grafana") },
      { name: "Postman", src: icon("postman") },
    ],
  },
];

// ---------------------------------------------------------------------------
// Experience
// ---------------------------------------------------------------------------

export const experiences = [
  {
    role: "Applications Developer",
    company: "Rutgers University — BMIHAI",
    location: "New Brunswick, NJ",
    period: "May 2025 — Sep 2025",
    tags: ["Healthcare AI", "Computer Vision", "Mobile"],
    bullets: [
      "Built a cross-platform React Native (Expo) app for skin cancer prevention, delivering a patient-facing experience over 1,000+ image records with real-time AI diagnostics.",
      "Engineered a Supabase-backed survey pipeline serving structured context for 100+ patients into a Gemini face-simulation prompt.",
      "Trained InceptionV3 on AWS SageMaker against the ISIC dataset (400K+ images), reaching 92% melanoma classification accuracy and flagging high-risk cases for faster clinical referral.",
    ],
    stack: {
      "Languages/Frameworks": "React Native (Expo), TypeScript, Python",
      Tools: "AWS SageMaker, Supabase, TensorFlow, InceptionV3, Gemini",
      Domain: "Healthcare AI, Medical Imaging, Mobile Development",
    },
  },
  {
    role: "Software & Data Science Intern",
    company: "Rutgers Institute for Health",
    location: "New Brunswick, NJ",
    period: "May 2025 — Aug 2025",
    tags: ["NLP", "RAG", "Data Pipelines"],
    bullets: [
      "Engineered a production NLP pipeline parsing longitudinal clinical transcripts from the Pitt Corpus of DementiaBank, handling 10+ edge cases to extract 5,000+ linguistic features at scale.",
      "Delivered a Next.js face-recognition feature on Snowflake using 512-D embeddings from the InsightFace buffalo-l model, automating patient matching.",
      "Built a RAG-style image-event recognition system (VLM captioning + text embeddings) for searchable patient timelines, integrating GPT-4o and embedding-3-large to lift engagement 25%.",
    ],
    stack: {
      Skills: "NLP, RAG, Vector Embeddings, Data Pipelines",
      Tools: "Snowflake, InsightFace, GPT-4o, REDCap, MindLAMP, Power BI",
      Domain: "Healthcare Data, Longitudinal Studies",
    },
  },
  {
    role: "Software Developer Intern",
    company: "S. J. Finance",
    location: "Mumbai, India",
    period: "Aug 2023 — Aug 2024",
    tags: ["FinTech", "Production", "Full-Stack"],
    bullets: [
      "Automated bank-deposit tracking for HNI clients via a FastAPI service on EC2, cutting customer-outreach time 50% and speeding revenue-driving follow-ups.",
      "Shipped a client portfolio portal in React Native (Expo) and TypeScript, letting 500+ clients create and track mutual-fund positions in real time.",
      "Implemented nightly Python cron jobs with MFAPI and WhatsApp integrations, alerting clients to scheme changes in under 10 seconds with zero manual intervention.",
    ],
    stack: {
      "Languages/Frameworks": "Python, TypeScript, FastAPI, React Native (Expo)",
      Tools: "AWS EC2, MFAPI, WhatsApp API, PostgreSQL",
      Other: "Cron Jobs, REST APIs, Financial Data Pipelines",
    },
  },
  {
    role: "Full Stack Developer",
    company: "StudyPaq",
    location: "San Francisco, CA (Remote)",
    period: "May 2023 — Aug 2023",
    tags: ["LLM Pipelines", "Scraping", "REST APIs"],
    bullets: [
      "Designed the server-side architecture and built 25+ REST APIs in Flask behind a Next.js frontend, validated with Postman suites for 99% endpoint reliability.",
      "Built a Selenium and BeautifulSoup scraper paired with a GPT-4o pipeline that auto-registered 10K+ structured quiz datasets into MongoDB, saving 100+ hours of manual entry.",
      "Delivered YouTube recommendations via Google APIs and a video-sentiment pipeline, serving 10K+ custom results monthly.",
    ],
    stack: {
      "Languages/Frameworks": "JavaScript, Flask, Next.js, ReactJS, Node.js, MongoDB",
      Tools: "Postman, AWS, OpenAI, BeautifulSoup, Selenium, Docker",
      Other: "SDLC, Git, Agile",
    },
  },
  {
    role: "Machine Learning / Research Intern",
    company: "Indian Institute of Technology (IIT), Patna",
    location: "Remote, Mumbai",
    period: "Apr 2023 — Oct 2023",
    tags: ["GNNs", "Research", "Fraud Detection"],
    bullets: [
      "Researched AI models for detecting phishing transactions on Ethereum networks, benchmarking Node2Vec, Trans2Vec and GCN baselines.",
      "Applied GNN and Random Walk strategies over 100K+ transactions to compute 128-D node embeddings.",
      "Reached 94% phishing detection accuracy with Random Forest, Logistic Regression and XGBoost, improving on baseline models.",
    ],
    stack: {
      "Languages/Frameworks": "Python, Deep Learning, Graph Neural Networks",
      Tools: "TensorFlow, PyTorch, Jupyter, Google Colab",
      Other: "Research Writing, Benchmarking, Presentation",
    },
  },
  {
    role: "Front-end & Design Developer",
    company: "UNICODE",
    location: "Mumbai, India",
    period: "Oct 2021 — Mar 2023",
    tags: ["Frontend", "UI/UX"],
    bullets: [
      "Learned UI/UX design and ReactJS in practice, shipping three applications: an NFT marketplace, a fitness app, and a Spotify clone.",
      "Designed a feedback mechanism for HackPrep, collecting insights from 100+ attendees to refine future coding events.",
    ],
    stack: {
      "Languages/Frameworks": "HTML, CSS, JavaScript, ReactJS",
      Tools: "Material UI, Ant Design, Figma",
      Other: "Agile, Wireframing, Prototyping, User Research",
    },
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------

export const projectCategories = ["All", "Agentic AI", "AI / ML", "Full-Stack", "Research"];

export const projects = [
  {
    title: "SEC Agentic-RAG Engine",
    category: "Agentic AI",
    featured: true,
    image: "/images/covers/sec-rag.svg",
    link: "https://github.com/VarunVekaria",
    linkLabel: "GitHub",
    summary:
      "A vectorless RAG engine over SEC filings (10-K, 10-Q, 8-K, DEF 14A) hitting 98.7% on FinanceBench. Conventional vector similarity kept returning confident, wrong answers, so I replaced it with my own PageIndex-inspired hierarchical document tree that an agent navigates through tool-use — no vector database at all.",
    highlights: [
      "13 tools exposed via FastMCP so any MCP client can fetch, index, query and cite filings",
      "Two-stage pipeline (keyword scoring + LLM tree-navigation fallback) indexes a full 10-K in under 60s",
      "LLM-as-judge eval harness across open-source and frontier models, tuned for cost, tokens and tool calls",
      "Deployed on Fly.io as an MCP server with GitHub OAuth 2.1, addable as a connector in Claude Desktop and Codex",
      "OpenTelemetry traces piped into Grafana for per-hop tool-call monitoring",
    ],
    techStack: [
      "Python",
      "FastMCP",
      "MCP",
      "Ollama",
      "LLM-as-Judge",
      "OpenTelemetry",
      "Grafana",
      "Fly.io",
      "SEC EDGAR API",
    ],
  },
  {
    title: "Prompt-Optimizer — Agent Skill",
    category: "Agentic AI",
    featured: true,
    image: "/images/covers/prompt-optimizer.svg",
    link: "https://github.com/VarunVekaria/optimize-prompt-skill",
    linkLabel: "GitHub",
    summary:
      "An open-source Agent Skill that rewrites LLM prompts for token efficiency. It scans a prompt across 7 dimensions, returns a copy-ready rewrite, and estimates the savings — typically 40–55% fewer tokens. Installable in one command.",
    highlights: [
      "Compatible with Claude Code, OpenAI Codex and GitHub Copilot via the agentskills.io spec",
      "Pauses after emitting the optimized prompt rather than executing the task, keeping the human in the loop",
      "Published open-source contribution to the AI developer-tooling ecosystem",
    ],
    techStack: ["Agent Skills", "Claude Code", "OpenAI Codex", "Markdown", "Git"],
  },
  {
    title: "OmniMind — MemMachine",
    category: "Agentic AI",
    featured: true,
    image: "/images/covers/omnimind.svg",
    link: "https://www.youtube.com/watch?v=InGyxCa8okw",
    linkLabel: "Demo",
    summary:
      "An agentic AI bias-mitigation system built at the MemMachine AI Agents Cross-Coast Hackathon (NYC–SF), where it took 2nd place. User-history context is served from Postgres and Neo4j into a multi-LLM comparison layer, cutting response bias by 50%.",
    highlights: [
      "Graph + relational memory (Neo4j and PostgreSQL) backing agent context",
      "Side-by-side multi-LLM comparison across OpenAI, Claude and Gemini",
      "FastAPI service with a Streamlit control surface, containerized with Docker",
    ],
    techStack: [
      "Docker",
      "Python",
      "FastAPI",
      "Streamlit",
      "OpenAI",
      "Neo4j",
      "PostgreSQL",
      "MemMachine",
    ],
  },
  {
    title: "Language AI — Founder",
    category: "Full-Stack",
    featured: true,
    image: "/images/covers/language-ai.svg",
    link: "https://languageai-cyan.vercel.app/",
    linkLabel: "Live site",
    summary:
      "A consumer language-learning platform where you learn a new language in your own cloned voice. Built and shipped solo: Next.js on Vercel, FastAPI on Render, ElevenLabs voice cloning, Supabase for Google OAuth and MP3 storage.",
    highlights: [
      "End-to-end product from schema to deployment, live for real users",
      "ElevenLabs voice-clone pipeline wired into lesson playback",
      "Supabase auth and audio storage with a Vercel + Render split deployment",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Supabase",
      "ElevenLabs",
      "Tailwind",
      "Vercel",
      "Render",
    ],
  },
  {
    title: "Reconnect",
    category: "AI / ML",
    image: "/images/reconnect.png",
    link: "https://github.com/VarunVekaria/Reconnect",
    linkLabel: "GitHub",
    summary:
      "A web app for dementia patients that recognizes family faces with InsightFace, generates memory captions with GPT-4o, and delivers voice reminders through Twilio. A productized version of the Rutgers health research.",
    techStack: ["Next.js", "TypeScript", "Flask", "InsightFace", "GPT-4o", "Twilio", "AWS"],
  },
  {
    title: "EduProctor",
    category: "AI / ML",
    image: "/images/eduproctor.png",
    link: "https://github.com/VarunVekaria/eduproctor",
    linkLabel: "GitHub",
    summary:
      "A classroom engagement analytics system: video upload, frame-by-frame OpenCV analysis, InsightFace detection and recognition, embeddings stored in Snowflake, and actionable analytics on a Next.js dashboard.",
    techStack: ["Next.js", "Flask", "InsightFace", "OpenCV", "NumPy", "Snowflake", "AWS"],
  },
  {
    title: "RAG Code Summarizer",
    category: "Agentic AI",
    image: "/images/rag.png",
    link: "https://github.com/VarunVekaria/RAG-chroma-db",
    linkLabel: "GitHub",
    summary:
      "Retrieval-augmented code summarization using ChromaDB for vector storage, LangChain for orchestration, and OpenAI for semantic search and generation.",
    techStack: ["LangChain", "ChromaDB", "OpenAI", "Python"],
  },
  {
    title: "AI Agent — Daily Bitcoin News",
    category: "Agentic AI",
    image: "/images/ai_agent.png",
    link: "https://github.com/VarunVekaria/",
    linkLabel: "GitHub",
    summary:
      "An autonomous scheduled pipeline that aggregates daily Bitcoin news via the Brave API, structures summaries with OpenAI, and persists them to Supabase on AWS.",
    techStack: ["Python", "Brave API", "OpenAI", "Supabase", "AWS"],
  },
  {
    title: "Stock Market Prediction",
    category: "Research",
    image: "/images/stock_market_analysis.png",
    link: "https://github.com/VarunVekaria/StockMarketAnalysis",
    linkLabel: "GitHub",
    summary:
      "LSTM-based time-series forecasting for equity prices, backed by a React frontend and Flask API for real-time predictions. Published at IEEE, 2023.",
    techStack: ["ReactJS", "Flask", "TensorFlow", "LSTM"],
  },
  {
    title: "Kidney Abnormality Detection via Federated Transfer Learning",
    category: "Research",
    image: "/images/kidney_abnormality.png",
    link: "https://colab.research.google.com/drive/1DrGG5eagL0EBQ9QT5hS6of8QfIfG4IKF",
    linkLabel: "Notebook",
    summary:
      "A federated learning pipeline using the Flower (Flwr) framework to detect kidney abnormalities from medical imaging while preserving data privacy across decentralized sites. Published in Procedia Computer Science.",
    techStack: ["Flwr", "Federated Learning", "Distributed Computing", "Google Colab"],
  },
  {
    title: "Trauma Analysis on Social Media",
    category: "Research",
    image: "/images/trauma.png",
    link: "https://drive.google.com/file/d/1AehK_YT0KMnRUnhTOcH_lEiFULO8pJWU/view?usp=sharing",
    linkLabel: "Paper",
    summary:
      "Multi-label classification of trauma types in social media text using deep learning and OpenAI APIs.",
    techStack: ["Python", "Deep Learning", "OpenAI API", "NLP"],
  },
  {
    title: "GamePlan — NBA Schedule Optimization",
    category: "AI / ML",
    image: "/images/stock_market_visuals.png",
    link: "https://github.com/VarunVekaria",
    linkLabel: "GitHub",
    summary:
      "Ten seasons of NBA schedules analyzed with pandas: schedule-congestion features, Plotly choropleth travel maps, and XGBoost models quantifying how scheduling affects team performance.",
    techStack: ["Python", "pandas", "Plotly", "XGBoost", "Dash", "geopy"],
  },
  {
    title: "Data Analysis of Stock Market",
    category: "AI / ML",
    image: "/images/stock_market_visuals.png",
    link: "https://github.com/VarunVekaria/stockMarketvisuals",
    linkLabel: "GitHub",
    summary:
      "Exploratory analysis and dashboards for market data using Python and Power BI, with ER modeling for structured datasets.",
    techStack: ["Power BI", "Python", "Excel", "ER Modeling"],
  },
  {
    title: "Bot Chase Neural Network",
    category: "AI / ML",
    image: "/images/NN.png",
    link: "https://github.com/VarunVekaria/BotChase_neural_network",
    linkLabel: "GitHub",
    summary:
      "A neural network agent that learns to play a bot chase game, built on Keras with a custom environment.",
    techStack: ["Keras", "Neural Networks", "Python"],
  },
  {
    title: "Bot: Grid Fire Escape",
    category: "AI / ML",
    image: "/images/bot1.png",
    link: "https://github.com/VarunVekaria/bot_traverse",
    linkLabel: "GitHub",
    summary:
      "A grid-based pathfinding game in Pygame implementing classic search algorithms for escape behavior under spreading fire.",
    techStack: ["Python", "Pathfinding", "Pygame"],
  },
  {
    title: "This Portfolio",
    category: "Full-Stack",
    image: "/images/my-portfolio.png",
    link: "https://github.com/VarunVekaria/my-portfolio",
    linkLabel: "GitHub",
    summary:
      "The site you're on — a responsive Next.js portfolio with a dark theme, gradient accents, and a single content source of truth.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
];

// ---------------------------------------------------------------------------
// Education, publications, achievements
// ---------------------------------------------------------------------------

export const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Rutgers University",
    location: "New Brunswick, NJ",
    period: "Aug 2024 — May 2026",
    note: "Graduate Speaker · Outstanding Master's Student Award",
    highlights: [
      "Selected as graduate speaker for the Class of 2026 and delivered the commencement address",
      "Outstanding Master's Student Award from Rutgers SGS, selected from 5,200+ enrolled students",
      "Focus: agentic AI systems, retrieval architectures, NLP, and healthcare AI",
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    school: "D. J. Sanghvi College of Engineering",
    location: "Mumbai, MH",
    period: "Aug 2020 — May 2024",
    note: "GPA: 9.4 / 10",
    highlights: [
      "Published peer-reviewed papers at IEEE and ScienceDirect during undergraduate study",
      "Research internship at IIT Patna — GNN-based phishing detection on Ethereum (94% accuracy)",
      "J.P. Morgan SDE College to Corporate Program — backend engineering apprenticeship",
    ],
  },
];

export const publications = [
  {
    title: "Stock Market Prediction using LSTM",
    venue: "IEEE, 2023",
    description: "Sequence modeling for financial time-series forecasting, with a React + Flask interface for real-time predictions.",
    link: "https://ieeexplore.ieee.org/abstract/document/10306549",
  },
  {
    title: "A Multi-label Classification Approach to Detect Types of Traumas on Social Media",
    venue: "ResearchGate",
    description: "Predictive analytics and multi-label classification over social media text.",
    link: "https://www.researchgate.net/publication/381586577_A_Multi-label_Classification_Approach_to_Detect_Types_of_Traumas_on_Social_Media",
  },
  {
    title: "Detecting Kidney Abnormalities in Decentralized Healthcare via Federated Transfer Learning",
    venue: "Procedia Computer Science, ScienceDirect",
    description: "Privacy-preserving federated learning across decentralized medical imaging sites.",
    link: "https://www.sciencedirect.com/science/article/pii/S1877050924006495",
  },
];

export const achievements = [
  {
    title: "Graduate Speaker — Rutgers University, Class of 2026",
    detail:
      "Selected to deliver the commencement address for the MS Computer Science cohort, May 2026.",
    badge: "2026",
  },
  {
    title: "Outstanding Master's Student Award — Rutgers School of Graduate Studies",
    detail: "Selected from 5,200+ enrolled students across the graduate school.",
    badge: "2026",
  },
  {
    title: "2nd Place — MemMachine AI Agents Cross-Coast Hackathon (NYC–SF)",
    detail:
      "Built OmniMind, an agentic bias-mitigation system, over a cross-coast hackathon weekend hosted at the AWS office in NYC.",
    badge: "Oct 2025",
  },
  {
    title: "SDE College to Corporate Program — J.P. Morgan",
    detail:
      "Backend engineering apprenticeship: hands-on Python, Django and Linux training, culminating in a live deployed project presented to J.P. Morgan engineers.",
    badge: "2022–23",
  },
];
