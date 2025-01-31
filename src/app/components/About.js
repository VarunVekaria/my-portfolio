export default function About() {

  const leftPositions = [
    { top: "10%", left: "5%" },
    { top: "40%", left: "10%" },
    { bottom: "40%", left: "16%" },
    { bottom: "20%", left: "5%" },
    { top: "20%", left: "14%" },
  ];

  const rightPositions = [
    { top: "10%", right: "5%" },
    { top: "40%", right: "10%" },
    { bottom: "40%", right: "16%" },
    { bottom: "20%", right: "5%" },
    { top: "20%", right: "14%" },
  ];


  return (
    <div
    className="min-h-screen relative flex items-center justify-center text-white px-6"
    style={{ backgroundColor: "#001A6E" }}
  >
    {/* Left-side Shapes */}
    {leftPositions.map((pos, index) => (
      <div
        key={`left-${index}`}
        className="absolute animate-pulse hidden md:block" // Hide shapes on small screens
        style={{ ...pos }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${80 + index * 10}`} // Vary size dynamically
          height={`${80 + index * 10}`}
          viewBox="0 0 24 24"
          fill={index % 2 === 0 ? "#0D47A1" : "#F26B0F"} // Alternate colors
        >
          <path d="M12 0l4 8h-8l4-8zm0 16l-4-8h8l-4 8z" />
        </svg>
      </div>
    ))}

    {/* Right-side Shapes */}
    {rightPositions.map((pos, index) => (
      <div
        key={`right-${index}`}
        className="absolute animate-pulse hidden md:block" // Hide shapes on small screens
        style={{ ...pos }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${80 + index * 10}`} // Vary size dynamically
          height={`${80 + index * 10}`}
          viewBox="0 0 24 24"
          fill={index % 2 === 0 ? "#1A73E8" : "#F26B0F"} // Alternate colors
        >
          <path d="M12 0l4 8h-8l4-8zm0 16l-4-8h8l-4 8z" />
        </svg>
      </div>
    ))}

      {/* Main Content */}
      <div className="max-w-xl text-left relative z-10">
        <h1
          className="text-7xl font-bold mb-4 pt-20"
          style={{ color: "#F26B0F" }}
        >
         Hey, this is <span className="font-bold">Varun</span>{" "}
        <span className="font-extrabold" style={{ WebkitTextStroke: "2px #F26B0F", color: "transparent" }}>
         Vekaria
        </span>
        </h1>
        <h3 className="text-2xl font-semibold mb-4" >Software Developer</h3>
        <h4 className="text-xl font-semibold mb-4">MS CS @Rutgers University - New Brunswick</h4>
        <div
          className="text-lg leading-relaxed text-justify pt-2"
          style={{ textAlign: "justify" }}
        >
         An innovative Software Developer with a strong interest in the fintech sector and a passion for leveraging technology to analyze data. I prioritize delivering exceptional user experiences, drawing on my creative instincts to gain a competitive edge. Eager to embrace challenges and drive impactful solutions!
        </div>
        <div
          className="text-md leading-relaxed py-10 tracking-custom"
          style={{ textAlign: "justify", color:"#F26B0F" }}
        >
          Currently, focused on: 
          <p></p>Leetcoding, AWS, Docker, and
          Kubernetes.
        </div>
        <div className="mt-8">
          <p className="text-lg font-semibold mb-4">
            Feel free to reach me out at:
          </p>
          <div className="flex space-x-6 pb-10">
            {/* GitHub */}
            <a
              href="https://github.com/VarunVekaria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0a12 12 0 0 0-3.81 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.98 0-1.32.47-2.39 1.24-3.24-.13-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.31 1.23.96-.27 1.99-.4 3.01-.4s2.05.14 3.01.4c2.3-1.55 3.31-1.23 3.31-1.23.66 1.64.25 2.86.12 3.16.77.85 1.24 1.91 1.24 3.24 0 4.66-2.8 5.68-5.48 5.98.43.37.82 1.1.82 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.69.83.57A12 12 0 0 0 12 0" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/varun-vekaria-a5836a1b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.72-.79-1.72-1.72s.75-1.72 1.72-1.72 1.72.79 1.72 1.72-.75 1.72-1.72 1.72zm13.5 11.28h-3v-5.5c0-1.33-.02-3.03-1.84-3.03-1.84 0-2.12 1.43-2.12 2.92v5.61h-3v-10h2.88v1.37h.04c.4-.76 1.37-1.56 2.81-1.56 3.01 0 3.57 1.98 3.57 4.56v5.63z" />
              </svg>
            </a>
            {/* Gmail */}
            <a
              href="mailto:varun.vekaria04@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12.713l-8.176-6.518h16.352l-8.176 6.518zm11.176-6.899c-.351-.276-.797-.438-1.276-.438h-18c-.479 0-.925.162-1.276.438l10.276 8.194 10.276-8.194zm.824 1.399v10.887c0 .822-.664 1.476-1.48 1.476h-18c-.816 0-1.48-.654-1.48-1.476v-10.887l9.58 7.636c.184.147.413.221.644.221s.46-.074.644-.221l9.582-7.636z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
