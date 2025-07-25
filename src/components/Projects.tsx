import React, { useState } from 'react';
import { Github, ExternalLink, X, Image, Video, Info, Code } from 'lucide-react';

const Projects = () => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: 'Handy Haemo - Blood Donation App',
      description: 'A mobile application designed to connect blood donors with recipients efficiently. Features real-time location tracking and secure user authentication.',
      details: 'This project aims to streamline the blood donation process. It allows users to register as donors or recipients, search for compatible blood types nearby, and get real-time updates. The app emphasizes user privacy and secure data handling. Technologies used include React Native for cross-platform mobile development, Node.js and Express.js for the backend API, and MongoDB for the database. Authentication is handled with JWT and Bcrypt.js, ensuring secure user interactions.',
      image: 'https://res.cloudinary.com/drxocmkpu/image/upload/v1753281498/portfolio-project/340248923-afcf12c3-8f7f-4a5c-9e7b-58bf171b5070_vwxk2u.png', // Placeholder image
      screenshots: [
        'https://placehold.co/800x500/10b981/000000?text=Handy+Haemo+1',
        'https://placehold.co/800x500/16a34a/000000?text=Handy+Haemo+2',
      ],
      videoUrl: '', // Add video URL if available
      technologies: ['React Native', 'Node.js', 'Express.js','Geolib','Geolocation','Leflet Map','Redis','MongoDB', 'JWT', 'Bcrypt.js'],
      githubUrl: 'https://github.com/jaarvis007/Handy-Haemo-Blood-Donation-App-',
      liveUrl: '', // Add live URL if available
    },
    {
      title: 'Sketchy Guess-Multiplayer Drawing & Guessing Game',
      description: 'Sketchy Guess is an online multiplayer game where one player draws a word, and others try to guess it as fast as they can. The faster you guess, the more points you get. The artist also earns points based on how quickly others guess their drawing.You can play with friends in private rooms or join public games with people around the world. It works in any web browser and is easy to use, fun, and perfect for anyone who enjoys drawing or guessing games like Pictionary.',
      image: 'https://res.cloudinary.com/drxocmkpu/image/upload/v1753282058/portfolio-project/352706869-9dfdb206-d87c-4dd5-86ac-2df36010030b_ix0de0.png',
      screenshots: [
        'https://placehold.co/800x500/06b6d4/000000?text=Ecommerce+1',
        'https://placehold.co/800x500/0891b2/000000?text=Ecommerce+2',
      ],
      videoUrl: '',
      technologies: ['React', 'Node.js', 'Express.js','Websocket.io','AWS(S3)', 'MongoDB', 'JWT', 'Bcrypt.js'],
      githubUrl: 'https://github.com/jaarvis007/HardlySlept-464',
      liveUrl: '',
    },
    {
      title: 'Real Time WhiteBoard',
      description: 'A collaborative real-time whiteboard application allowing multiple users to draw and interact simultaneously.',
      details: 'This project is an interactive digital whiteboard designed for collaborative brainstorming and remote teaching. Users can join shared sessions, draw with various tools (pens, shapes, erasers), and see changes in real-time. Features include undo/redo functionality, different brush sizes and colors, and potentially saving/exporting drawings. Technologies often involve Canvas API for drawing, Socket.io for real-time communication, and a frontend framework like React.',
      image: 'https://res.cloudinary.com/drxocmkpu/image/upload/v1753444983/portfolio-project/340237377-b7dc2831-54d0-40ee-a171-e3a6f7fcdf50_ukpqqz.png',
      screenshots: [
        'https://placehold.co/800x500/34d399/000000?text=Whiteboard+1',
        'https://placehold.co/800x500/22c55e/000000?text=Whiteboard+2',
      ],
      videoUrl: '',
      technologies: ['HTML' ,'CSS','Javascript', 'Socket.io', 'Canvas API'],
      githubUrl: 'https://github.com/jaarvis007/WhiteBoard-Project',
      liveUrl: '',
    },
    {
      title: 'Quiz_Application',
      description: 'An interactive quiz application with multiple categories, score tracking, and a user-friendly interface.',
      details: 'This quiz application provides an engaging platform for users to test their knowledge across various topics. It features different quiz categories, a timer for questions, immediate feedback on answers, and a final score summary. The application is designed to be intuitive and responsive, offering a smooth experience across devices. Potential technologies include React for the frontend, and a backend (Node.js/Express.js) for managing questions and user scores, possibly with a database like MongoDB or MySQL.',
      image: 'https://res.cloudinary.com/drxocmkpu/image/upload/v1753445279/portfolio-project/417256305-d5e13441-8d6d-4d3b-aadb-f705ce2a37f1_r2abvv.png',
      screenshots: [
        'https://placehold.co/800x500/60a5fa/000000?text=Quiz+App+1',
        'https://placehold.co/800x500/3b82f6/000000?text=Quiz+App+2',
      ],
      videoUrl: '',
      technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
      githubUrl: 'https://github.com/jaarvis007/Quiz_Application',
      liveUrl: '',
    },
    {
      title: 'Movie-Shortlister',
      description: 'A web application to discover and shortlist movies based on various criteria, with user preferences and ratings.',
      details: 'This project helps users discover new movies and manage their watchlists. It allows searching for movies by genre, year, ratings, and other filters. Users can shortlist movies, add them to favorites, and rate them. The application typically integrates with a public movie API (like TMDB) to fetch movie data and provides a clean, intuitive interface for browsing. Frontend is usually built with a modern JavaScript framework, and a simple backend might handle user preferences.',
      image: 'https://placehold.co/600x400/a78bfa/000000?text=Movie+Shortlister',
      screenshots: [
        'https://placehold.co/800x500/a78bfa/000000?text=Movie+App+1',
        'https://placehold.co/800x500/8b5cf6/000000?text=Movie+App+2',
      ],
      videoUrl: '',
      technologies: ['React Native', 'TMDB API', 'Node.js', 'Express.js'],
      githubUrl: 'https://github.com/jaarvis007/Movie-Shortlister',
      liveUrl: '',
    },
    // Retaining a generic project as an example if needed, or remove if all are specific
    // {
    //   title: 'Generic Full-Stack Project',
    //   description: 'A versatile full-stack application demonstrating core principles of web development, including database integration and API design.',
    //   details: 'This is a foundational project showcasing a complete web application flow, from frontend user interaction to backend data processing and storage. It covers essential concepts like routing, state management, database interactions (CRUD operations), and API development. It serves as a strong base for building more complex web services.',
    //   image: 'https://placehold.co/600x400/fcd34d/000000?text=Generic+Project',
    //   screenshots: [],
    //   videoUrl: '',
    //   technologies: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
    //   githubUrl: '#',
    //   liveUrl: '#',
    // }
  ];

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setIsProjectModalOpen(false);
  };

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 border border-green-500 rounded-lg animate-spin-slow"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-cyan-500 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Projects Heading - Consistent with Skills/About */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-extrabold mb-4 text-green-400 animate-fade-in"
              style={{
                textShadow: '8px 8px 0px #000000, 16px 16px 0px #166534'
              }}>
            PROJECTS
          </h2>
          <p className="text-green-300 max-w-2xl mx-auto text-xl font-semibold">
            Showcasing my work in full-stack development and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl group
                         transform transition-all duration-500 ease-in-out
                         hover:scale-105 hover:rotate-y-3 hover:rotate-x-2
                         perspective-1000 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image with subtle 3D effect */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
                  onError={(e) => { e.currentTarget.src = `https://placehold.co/600x400/333333/FFFFFF?text=${project.title.replace(/\s/g, '+').substring(0, 15)}`; }}
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0"></div>
                {/* Subtle gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-400 transition-colors font-mono">
                    {project.title}
                  </h3>
                  <p className="text-green-300 mb-4 text-sm leading-relaxed font-mono max-h-32 overflow-y-auto custom-scrollbar">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-800 text-green-300 px-2 py-0.5 rounded text-xs border border-green-600/30 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-auto pt-4 border-t border-gray-800">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 hover:bg-green-700 text-black px-4 py-2 rounded font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm transform hover:scale-105 font-mono relative overflow-hidden group
                                 shadow-md hover:shadow-lg active:translate-y-0.5 active:shadow-none"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </span>
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 border border-green-600 text-green-300 px-4 py-2 rounded font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm font-mono relative overflow-hidden
                               hover:bg-green-700 hover:text-black hover:shadow-green-500/50 hover:shadow-lg
                               active:translate-y-0.5 active:shadow-none"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 animate-fade-in-up delay-700">
          <a
            href="https://github.com/jaarvis007?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-black px-8 py-3 rounded font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group font-mono"
          >
            <span className="relative z-10">View More Projects on GitHub</span>
            <div className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </a>
        </div>
      </div>
      {/* Removed Project Details Modal */}
    </section>
  );
};

export default Projects;
