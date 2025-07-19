import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'JavaScript', level: 90, icon: '🟨', color: 'from-yellow-500 to-yellow-600' },
        { name: 'Python', level: 85, icon: '🐍', color: 'from-blue-500 to-green-500' },
        { name: 'Java', level: 80, icon: '☕', color: 'from-orange-500 to-red-500' },
        { name: 'C++', level: 85, icon: '⚡', color: 'from-blue-600 to-purple-600' },
        { name: 'TypeScript', level: 75, icon: '🔷', color: 'from-blue-500 to-blue-600' },
      ],
    },
    {
      title: 'Frontend Technologies',
      icon: '🎨',
      skills: [
        { name: 'React', level: 90, icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
        { name: 'HTML/CSS', level: 95, icon: '🌐', color: 'from-orange-500 to-red-500' },
        { name: 'Tailwind CSS', level: 85, icon: '💨', color: 'from-cyan-400 to-blue-600' },
        { name: 'Next.js', level: 75, icon: '▲', color: 'from-gray-700 to-gray-900' },
        { name: 'Redux', level: 70, icon: '🔄', color: 'from-purple-500 to-purple-600' },
      ],
    },
    {
      title: 'Backend & Database',
      icon: '🗄️',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢', color: 'from-green-500 to-green-600' },
        { name: 'Express.js', level: 80, icon: '🚀', color: 'from-gray-600 to-gray-700' },
        { name: 'MongoDB', level: 80, icon: '🍃', color: 'from-green-600 to-green-700' },
        { name: 'MySQL', level: 75, icon: '🐬', color: 'from-blue-600 to-blue-700' },
        { name: 'REST APIs', level: 90, icon: '🔗', color: 'from-indigo-500 to-purple-600' },
      ],
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 90, icon: '🐙', color: 'from-gray-700 to-gray-900' },
        { name: 'VS Code', level: 95, icon: '💻', color: 'from-blue-500 to-blue-600' },
        { name: 'Postman', level: 85, icon: '📮', color: 'from-orange-500 to-orange-600' },
        { name: 'Linux', level: 75, icon: '🐧', color: 'from-yellow-500 to-orange-500' },
        { name: 'Docker', level: 65, icon: '🐳', color: 'from-blue-400 to-blue-600' },
      ],
    },
  ];

  const competitiveProgramming = [
    { platform: 'LeetCode', rating: '1500+', solved: '500+', icon: '🏆', color: 'from-yellow-500 to-orange-500' },
    { platform: 'CodeChef', rating: '3⭐', solved: '200+', icon: '👨‍🍳', color: 'from-brown-500 to-orange-600' },
    { platform: 'Codeforces', rating: 'Pupil', solved: '150+', icon: '🎯', color: 'from-blue-500 to-purple-600' },
    { platform: 'GeeksforGeeks', rating: 'Expert', solved: '300+', icon: '🤓', color: 'from-green-500 to-green-600' },
  ];

  // All technologies for the moving carousel
  const allTechnologies = [
    { name: 'JavaScript', icon: '🟨' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'HTML/CSS', icon: '🌐' },
    { name: 'Git', icon: '🐙' },
    { name: 'Docker', icon: '🐳' },
    { name: 'MySQL', icon: '🐬' },
    { name: 'Express.js', icon: '🚀' },
    { name: 'Tailwind', icon: '💨' },
    { name: 'Java', icon: '☕' },
    { name: 'C++', icon: '⚡' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Redux', icon: '🔄' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Linux', icon: '🐧' },
    { name: 'Postman', icon: '📮' },
    { name: 'REST APIs', icon: '🔗' },
  ];

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-green-500 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-blue-500 rounded-lg animate-bounce"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Terminal Header */}
        <div className="text-center mb-16">
          <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 max-w-2xl mx-auto mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400 text-sm ml-2 font-mono">~/skills</span>
            </div>
            <div className="text-left">
              <div className="text-green-400 font-mono text-sm mb-2">
                <span className="text-cyan-400">$</span> ls -la skills/
              </div>
              <div className="text-white font-mono text-lg mb-2">Skills & Technologies</div>
              <div className="text-green-400 font-mono text-sm mb-2">
                <span className="text-cyan-400">$</span> cat tech_stack.json
              </div>
              <div className="text-white font-mono">Here are the technologies and tools I work with to bring ideas to life.</div>
            </div>
          </div>
        </div>

        {/* Moving Tech Stack Carousel */}
        <div className="mb-16 overflow-hidden">
          
          
          {/* First row - moving left to right */}
          <div className="relative mb-4">
            <div className="flex animate-scroll-left space-x-6">
              {[...allTechnologies, ...allTechnologies].map((tech, index) => (
                <div
                  key={`left-${index}`}
                  className="flex-shrink-0 bg-gray-800 border border-green-500/30 rounded-lg p-4 min-w-[140px] hover:border-green-500/60 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl group-hover:animate-bounce">{tech.icon}</div>
                    <div className="text-green-400 font-mono text-sm text-center group-hover:text-green-300">
                      {tech.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row - moving right to left */}
          <div className="relative">
            <div className="flex animate-scroll-right space-x-6">
              {[...allTechnologies.slice().reverse(), ...allTechnologies.slice().reverse()].map((tech, index) => (
                <div
                  key={`right-${index}`}
                  className="flex-shrink-0 bg-gray-800 border border-cyan-500/30 rounded-lg p-4 min-w-[140px] hover:border-cyan-500/60 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl group-hover:animate-bounce">{tech.icon}</div>
                    <div className="text-cyan-400 font-mono text-sm text-center group-hover:text-cyan-300">
                      {tech.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-900 border border-green-500/30 rounded-lg p-6 hover:border-green-400 transition-all duration-300 transform hover:scale-105 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-400 text-xs ml-2 font-mono">~/{category.title.toLowerCase().replace(/\s+/g, '_')}.json</span>
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-green-400 font-mono">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg group-hover:animate-bounce">{skill.icon}</span>
                        <span className="text-green-300 group-hover:text-white transition-colors font-mono text-sm">{skill.name}</span>
                      </div>
                      <span className="text-green-400 text-sm font-medium font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-105`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Competitive Programming Section */}
        <div className="bg-gray-900 border border-green-500/30 rounded-lg p-8 animate-fade-in-up delay-500 shadow-md">
  {/* Terminal Header */}
  <div className="flex items-center gap-2 mb-6">
    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
    <span className="text-green-400 text-sm ml-2 font-mono">~/competitive_programming.json</span>
  </div>

  <h3 className="text-2xl font-bold text-green-400 text-center mb-8 flex items-center justify-center gap-3 font-mono">
    <span className="text-3xl">🏆</span>
    Competitive Programming
  </h3>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    {competitiveProgramming.map((platform, index) => (
      <div
        key={index}
        className="bg-black border border-green-500/20 rounded-lg p-6 hover:border-green-400 transition-all duration-300 transform hover:scale-105 hover:rotate-1 group"
      >
        <div className="text-center">
          <div className="text-4xl mb-3 group-hover:animate-bounce">{platform.icon}</div>
          <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors font-mono">
            {platform.platform}
          </h4>
          <div className="bg-gray-800 rounded p-2 mb-2">
            <p className="text-green-400 font-medium font-mono text-sm">Rating: {platform.rating}</p>
          </div>
          <div className="bg-gray-800 rounded p-2">
            <p className="text-green-300 text-sm font-mono">Solved: {platform.solved}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


       
       
      </div>
    </section>
  );
};

export default Skills;