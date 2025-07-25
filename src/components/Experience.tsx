import React from 'react';
import { Calendar, MapPin, Building, Code, Users, Zap, Terminal, GitBranch } from 'lucide-react'; // Removed unused icons

const Experience = () => {
  const allExperiences = [ // Renamed to avoid conflict with filtered experiences
    {
      position: 'Software Developer Intern',
      company: 'Fristine Infotech Pvt Ltd',
      location: 'Pune, Maharashtra',
      period: 'Jan 2025 - Present (Aug 2022 - Present overall)',
      type: 'Internship',
      description: [ // Changed description to an array of points
        'Developed internal and client based applications using React.js, Node.js, Express.js, and Java.',
        'Performed end-to-end system design for scalable applications, covering data modeling, API and service architecture.',
        'Deployed the application on a serverless cloud platform, ensuring automatic scaling and reducing infrastructure costs by 30%.',
        'Optimized weekly 5,000+ email reinvitations by processing them in 200-user batches with a 1s delay, effectively avoiding API throttling and execution timeouts, leading to a 25% increase in user engagement.',
        'Integrated CRM and Help Desk systems for real-time data retrieval and automated support ticket generation, reducing manual effort by 40%.',
        'Handled high user traffic by deploying API Gateway with rate limiting to maintain system reliability.'
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'Java', 'MongoDB', 'MySQL', 'AWS (S3, Lambda, IAM)', 'Git', 'Postman'],
      terminalCommand: 'cd ~/fristine-infotech && npm start'
    },
    {
      position: 'Competitive Programming Mentor',
      company: 'NIT Allahabad Coding Club',
      location: 'Allahabad, India',
      period: 'Jan 2024 - Present',
      type: 'Leadership',
      description: [ // Changed description to an array of points
        'Mentored junior students in competitive programming and data structures.',
        'Organized coding contests and workshops.'
      ],
      technologies: ['C++', 'Python', 'Data Structures', 'Algorithms'],
      terminalCommand: 'sudo mentor --students=50 --contests=5'
    },
    {
      position: 'Web Development Lead',
      company: 'College Technical Festival',
      location: 'NIT Allahabad',
      period: 'Sep 2023 - Mar 2024',
      type: 'Project',
      description: [
        'Led the web development team for the annual technical festival.',
        'Developed the official website and registration portal.'
      ],
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Node.js'],
      terminalCommand: 'git clone festival-website && npm deploy'
    },
    {
      position: 'Open Source Contributor',
      company: 'Various Projects',
      location: 'Remote',
      period: 'Aug 2023 - Present',
      type: 'Contribution',
      description: [
        'Contributing to open source projects on GitHub.',
        'Focused on web development tools and educational resources.'
      ],
      technologies: ['JavaScript', 'React', 'Vue.js', 'Documentation'],
      terminalCommand: 'git commit -m "Contributing to open source"'
    }
  ];

  // Filter experiences to show only the requested ones
  const experiencesToShow = allExperiences.filter(exp => 
    exp.position === 'Competitive Programming Mentor' || exp.position === 'Software Developer Intern'
  );

  // Function to get text color based on experience type
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'text-green-400';
      case 'Leadership':
        return 'text-blue-400';
      case 'Project':
        return 'text-purple-400';
      case 'Contribution':
        return 'text-orange-400';
      default:
        return 'text-gray-400';
    }
  };

  // Function to get background and border classes based on experience type
  const getCategoryClasses = (type: string) => {
    switch (type) {
      case 'Internship':
        return 'bg-green-600/20 border-green-500/30';
      case 'Leadership':
        return 'bg-blue-600/20 border-blue-500/30';
      case 'Project':
        return 'bg-purple-600/20 border-purple-500/30';
      case 'Contribution':
        return 'bg-orange-600/20 border-orange-500/30';
      default:
        return 'bg-gray-600/20 border-gray-500/30';
    }
  };

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Floating code snippets background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 text-xs font-mono animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {['git push', 'npm install', 'const exp =', 'function()', 'return true', 'while(true)', 'class Experience', 'import React', 'export default', 'console.log()'][Math.floor(Math.random() * 10)]}
          </div>
        ))}
      </div>

      {/* Matrix-style background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Experience Heading - Consistent with Skills/About */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-extrabold mb-4 text-green-400 animate-fade-in"
              style={{
                textShadow: '8px 8px 0px #000000, 16px 16px 0px #166534' // Darker green shadow
              }}>
            EXPERIENCE
          </h2>
          <p className="text-green-300 max-w-2xl mx-auto text-xl font-semibold">
            My professional journey and academic milestones.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="bg-gray-900 border border-green-500/30 rounded-lg p-4 inline-block">
              <div className="text-green-400 font-mono text-sm">
                <span className="text-cyan-400">$</span> git log --oneline experience/
              </div>
            </div>
          </div>
          
          {experiencesToShow.map((exp, index) => ( // Using filtered experiences
            <div key={index} className="relative mb-8 last:mb-0">
              {/* Git branch line */}
              {index !== experiencesToShow.length - 1 && (
                <div className="absolute left-6 md:left-8 top-6 w-0.5 h-full bg-green-500/30"></div>
              )}

              {/* Git commit dot */}
              <div className="absolute left-4 md:left-6 top-6 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 z-10">
                <div className="w-2 h-2 bg-green-300 rounded-full absolute top-0.5 left-0.5 animate-pulse"></div>
              </div>

              {/* Terminal Experience Card with 3D look */}
              <div
                className="ml-12 md:ml-20 bg-gray-900 border border-green-500/30 rounded-lg shadow-2xl
                           transform transition-all duration-500 ease-in-out perspective-1000
                           hover:scale-105 hover:rotate-y-3 hover:rotate-x-2
                           group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Terminal Header */}
                <div className="flex items-center gap-2 p-4 border-b border-green-500/20">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 text-sm ml-2 font-mono">~/experience/{exp.position.toLowerCase().replace(/\s+/g, '_').replace(/&/g, 'and')}</span> {/* Replaced & for URL safety */}
                  <span className={`ml-auto px-2 py-1 rounded text-xs font-mono ${getTypeColor(exp.type)} ${getCategoryClasses(exp.type)}`}>
                    [{exp.type.toUpperCase()}]
                  </span>
                </div>

                {/* Terminal Content */}
                <div className="p-6">
                  {/* Command execution */}
                  <div className="mb-4">
                    <div className="text-green-400 font-mono text-sm mb-2">
                      <span className="text-cyan-400">$</span> {exp.terminalCommand}
                    </div>
                    <div className="text-white font-mono text-lg mb-1">{exp.position}</div>
                    <div className="text-blue-400 font-mono mb-2">{exp.company}</div>
                    <div className="flex items-center gap-4 text-gray-400 font-mono text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description as points */}
                  <div className="mb-4">
                    <div className="text-green-400 font-mono text-sm mb-2">
                      <span className="text-cyan-400">$</span> cat responsibilities.txt
                    </div>
                    <ul className="list-none space-y-2"> {/* Removed default list styling */}
                      {exp.description.map((point, descIndex) => (
                        <li key={descIndex} className="text-gray-300 font-mono text-sm leading-relaxed flex items-start gap-2">
                          <GitBranch className="w-3 h-3 mt-1 text-green-400 flex-shrink-0" /> {/* Using GitBranch icon for points */}
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="text-green-400 font-mono text-sm mb-2">
                      <span className="text-cyan-400">$</span> npm list --depth=0
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-800 text-green-400 px-3 py-1 rounded font-mono text-sm border border-green-500/30 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105">
                          {tech}@latest
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Removed Call to Action Terminal */}
        
      </div>
    </section>
  );
};

export default Experience;
