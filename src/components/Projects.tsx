import React from 'react';
import { Github, ExternalLink, Code, Zap, Database, Globe, Star, GitBranch } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application built with MERN stack featuring user authentication, payment integration, and admin dashboard.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['User Authentication', 'Payment Gateway', 'Admin Dashboard', 'Order Management'],
      category: 'Full Stack',
      stars: 45,
      forks: 12
    },
    {
      title: 'Algorithm Visualizer',
      description: 'Interactive web application to visualize sorting and pathfinding algorithms with step-by-step animations.',
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'JavaScript', 'CSS3', 'D3.js'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Sorting Algorithms', 'Pathfinding', 'Real-time Animation', 'Speed Control'],
      category: 'Frontend',
      stars: 32,
      forks: 8
    },
    {
      title: 'Task Management API',
      description: 'RESTful API for task management with user authentication, CRUD operations, and real-time notifications.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['JWT Authentication', 'Real-time Updates', 'RESTful API', 'Data Validation'],
      category: 'Backend',
      stars: 28,
      forks: 6
    },
    {
      title: 'Weather Dashboard',
      description: 'React-based weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['5-day Forecast', 'Interactive Maps', 'Weather Charts', 'Location Search'],
      category: 'Frontend',
      stars: 38,
      forks: 15
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with multiple rooms, file sharing, and emoji support using Socket.io.',
      image: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Cloudinary'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Real-time Messaging', 'File Sharing', 'Multiple Rooms', 'Emoji Support'],
      category: 'Full Stack',
      stars: 52,
      forks: 18
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React and Tailwind CSS featuring smooth animations and responsive design.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveUrl: '#',
      githubUrl: '#',
      features: ['Responsive Design', 'Smooth Animations', 'Dark Theme', 'Contact Form'],
      category: 'Frontend',
      stars: 24,
      forks: 5
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return <Globe className="w-4 h-4" />;
      case 'Frontend':
        return <Code className="w-4 h-4" />;
      case 'Backend':
        return <Database className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return 'bg-green-600/90 border-green-500/50';
      case 'Frontend':
        return 'bg-blue-600/90 border-blue-500/50';
      case 'Backend':
        return 'bg-purple-600/90 border-purple-500/50';
      default:
        return 'bg-gray-600/90 border-gray-500/50';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 border border-green-500 rounded-lg animate-spin-slow"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border border-cyan-500 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-green-400 animate-fade-in font-mono">&gt; Featured Projects</h2>
          <p className="text-green-300 max-w-2xl mx-auto font-mono">
            Here are some of my recent projects that showcase my skills in full-stack development and problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-black border border-green-500/30 rounded-lg overflow-hidden hover:border-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className={`text-white px-3 py-1 rounded text-sm flex items-center gap-1 border font-mono ${getCategoryColor(project.category)}`}>
                    {getCategoryIcon(project.category)}
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="bg-black/80 text-white px-2 py-1 rounded text-xs flex items-center gap-1 font-mono">
                    <Star className="w-3 h-3" />
                    {project.stars}
                  </div>
                  <div className="bg-black/80 text-white px-2 py-1 rounded text-xs flex items-center gap-1 font-mono">
                    <GitBranch className="w-3 h-3" />
                    {project.forks}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-green-400 transition-colors font-mono">
                  {project.title}
                </h3>
                <p className="text-green-300 mb-4 text-sm leading-relaxed font-mono">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-800 text-green-300 px-2 py-1 rounded text-xs border border-green-600/30 hover:border-green-500 transition-colors font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <p className="text-green-400 text-xs mb-2 font-mono">Key Features:</p>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span key={featureIndex} className="text-green-300 text-xs flex items-center gap-1 font-mono">
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a 
                    href={project.liveUrl} 
                    className="flex-1 bg-green-600 hover:bg-green-700 text-black px-4 py-2 rounded font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm transform hover:scale-105 font-mono"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="flex-1 border border-green-600 hover:border-green-400 text-green-300 hover:text-green-400 px-4 py-2 rounded font-medium transition-all duration-300 flex items-center justify-center gap-2 text-sm transform hover:scale-105 font-mono"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 animate-fade-in-up delay-700">
          <button className="bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-black px-8 py-3 rounded font-semibold transition-all duration-300 transform hover:scale-105 relative overflow-hidden group font-mono">
            <span className="relative z-10">View More Projects on GitHub</span>
            <div className="absolute inset-0 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;