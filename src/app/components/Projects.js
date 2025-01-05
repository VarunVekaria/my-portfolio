export default function Projects() {
    // Replace this array with your project details
    const projects = [
      {
        title: "Project 1 ueurun lorem ipsum jah kdhfke lajfdl",
        image: "./images/varun.png", // Replace with actual image paths
        github: "https://github.com/username/project1",
      },
      {
        title: "Project 2",
        image: "/path/to/image2.png",
        github: "https://github.com/username/project2",
      },
      {
        title: "Project 3",
        image: "/path/to/image3.png",
        github: "https://github.com/username/project3",
      },
      {
        title: "Project 4",
        image: "/path/to/image4.png",
        github: "https://github.com/username/project4",
      },
    ];
  
    return (
      <div className="bg-white text-black py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <p className="text-lg font-light mb-8">Web Development</p>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg overflow-hidden shadow-md bg-gray-100"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
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
  