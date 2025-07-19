import React from 'react';
import { Calendar, MapPin, Building, Code, Users, Zap, BookOpen, Trophy, Terminal, GitBranch, Folder } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      position: 'Software Development Intern',
      company: 'Tech Solutions Pvt Ltd',
      location: 'Remote',
      period: 'Jun 2024 - Aug 2024',
      type: 'Internship',
      description: 'Worked on developing web applications using React and Node.js. Collaborated with senior developers to implement new features and optimize existing code.',
      achievements: [
        'Developed 3 full-stack web applications using MERN stack',
        'Improved application performance by 25% through code optimization',
        'Implemented responsive design for mobile compatibility',
        'Collaborated with a team of 5 developers using Agile methodology'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Git'],
      icon: <Code className="w-5 h-5" />,
      terminalCommand: 'cd ~/internship && npm start'
    },
    {
      position: 'Competitive Programming Mentor',
      company: 'NIT Allahabad Coding Club',
      location: 'Allahabad, India',
      period: 'Jan 2024 - Present',
      type: 'Leadership',
      description: 'Mentoring junior students in competitive programming and data structures. Organizing coding contests and workshops.',
      achievements: [
        'Mentored 50+ students in competitive programming',
        'Organized 5 coding contests with 200+ participants',
        'Conducted workshops on advanced algorithms',
        'Improved club participation by 40%'
      ],
      technologies: ['C++', 'Python', 'Data Structures', 'Algorithms'],
      icon: <Users className="w-5 h-5" />,
      terminalCommand: 'sudo mentor --students=50 --contests=5'
    },
    {
      position: 'Web Development Lead',
      company: 'College Technical Festival',
      location: 'NIT Allahabad',
      period: 'Sep 2023 - Mar 2024',
      type: 'Project',
      description: 'Led the web development team for the annual technical festival. Developed the official website and registration portal.',
      achievements: [
        'Led a team of 8 developers to build festival website',
        'Handled 5000+ registrations through the portal',
        'Implemented real-time event updates and notifications',
        'Delivered project 2 weeks ahead of deadline'
      ],
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Node.js'],
      icon: <Building className="w-5 h-5" />,
      terminalCommand: 'git clone festival-website && npm deploy'
    },
    {
      position: 'Open Source Contributor',
      company: 'Various Projects',
      location: 'Remote',
      period: 'Aug 2023 - Present',
      type: 'Contribution',
      description: 'Contributing to open source projects on GitHub. Focus on web development tools and educational resources.',
      achievements: [
        'Contributed to 10+ open source projects',
        'Fixed 25+ bugs and implemented new features',
        'Maintained documentation for developer tools',
        'Received recognition from project maintainers'
      ],
      technologies: ['JavaScript', 'React', 'Vue.js', 'Documentation'],
      icon: <Zap className="w-5 h-5" />,
      terminalCommand: 'git commit -m "Contributing to open source"'
    }
  ];

  const education = {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'National Institute of Technology, Allahabad',
    period: '2022 - 2026',
    cgpa: '3.8/4.0',
    coursework: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Computer Networks',
      'Operating Systems',
      'Software Engineering',
      'Machine Learning'
    ]
  };

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
        {/* Terminal Header */}
        <div className="text-center mb-16">
          <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400 text-sm ml-2 font-mono">~/experience</span>
            </div>
            <div className="text-left">
              <div className="text-green-400 font-mono text-sm mb-2">
                <span className="text-cyan-400">$</span> ls -la experience/
              </div>
              <div className="text-white font-mono text-lg mb-2">Professional Journey & Education</div>
              <div className="text-green-400 font-mono text-sm mb-2">
                <span className="text-cyan-400">$</span> cat timeline.md
              </div>
              <div className="text-white font-mono">Building expertise through hands-on experience</div>
            </div>
          </div>
        </div>

        {/* Education Terminal */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-green-500/30 rounded-lg shadow-2xl">
            <div className="flex items-center gap-2 p-4 border-b border-green-500/20">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400 text-sm ml-2 font-mono">~/education/degree.json</span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-blue-400" />
                <span className="text-green-400 font-mono">cat education.json</span>
              </div>
              <pre className="text-green-300 font-mono text-sm mb-4">
{`{
  "degree": "${education.degree}",
  "field": "${education.field}",
  "institution": "${education.institution}",
  "period": "${education.period}",
  "cgpa": "${education.cgpa}",
  "status": "in_progress"
}`}
              </pre>
              <div className="text-green-400 font-mono text-sm mb-2">
                <span className="text-cyan-400">$</span> ls coursework/
              </div>
              <div className="grid grid-cols-2 gap-2">
                {education.coursework.map((course, index) => (
                  <div key={index} className="text-green-300 font-mono text-sm flex items-center gap-2">
                    <Folder className="w-3 h-3" />
                    {course.toLowerCase().replace(/\s+/g, '_')}.cpp
                  </div>
                ))}
              </div>
            </div>
          </div>
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
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-8 last:mb-0">
              {/* Git branch line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-green-500/30"></div>
              )}

              {/* Git commit dot */}
              <div className="absolute left-6 top-6 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 z-10">
                <div className="w-2 h-2 bg-green-300 rounded-full absolute top-0.5 left-0.5 animate-pulse"></div>
              </div>

              {/* Terminal Experience Card */}
              <div className="ml-20 bg-gray-900 border border-green-500/30 rounded-lg shadow-2xl hover:border-green-500/50 transition-all duration-300 transform hover:scale-[1.02]">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 p-4 border-b border-green-500/20">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-green-400 text-sm ml-2 font-mono">~/experience/{exp.position.toLowerCase().replace(/\s+/g, '_')}</span>
                  <span className={`ml-auto px-2 py-1 rounded text-xs font-mono ${getTypeColor(exp.type)}`}>
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

                  {/* Description */}
                  <div className="mb-4">
                    <div className="text-green-400 font-mono text-sm mb-2">
                      <span className="text-cyan-400">$</span> cat description.txt
                    </div>
                    <p className="text-gray-300 font-mono text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <div className="text-green-400 font-mono text-sm mb-2">
                      <span className="text-cyan-400">$</span> ls achievements/
                    </div>
                    <div className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="text-gray-300 font-mono text-sm flex items-start gap-2 group">
                          <GitBranch className="w-3 h-3 mt-0.5 text-green-400 flex-shrink-0" />
                          <span className="group-hover:text-green-300 transition-colors">{achievement}</span>
                        </div>
                      ))}
                    </div>
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

        {/* Call to Action Terminal */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="bg-gray-900 border border-green-500/30 rounded-lg shadow-2xl">
            <div className="flex items-center gap-2 p-4 border-b border-green-500/20">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400 text-sm ml-2 font-mono">~/opportunities</span>
            </div>
            <div className="p-6">
              <div className="text-green-400 font-mono text-sm mb-2">
                <span className="text-cyan-400">$</span> ./check_availability.sh
              </div>
              <div className="text-white font-mono text-lg mb-2">Status: Available for Opportunities</div>
              <div className="text-green-400 font-mono text-sm mb-4">
                <span className="text-cyan-400">$</span> echo "Ready to contribute and learn"
              </div>
              <p className="text-gray-300 font-mono text-sm mb-6 leading-relaxed">
                Actively seeking internship and full-time opportunities where I can contribute 
                my skills and continue learning from experienced professionals.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-black px-8 py-3 rounded font-semibold font-mono transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
                <Terminal className="w-5 h-5" />
                ./connect.sh
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;