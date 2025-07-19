import React from 'react';
import { User, Coffee, Code, Award, GraduationCap, Trophy, Target, Zap, Terminal } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <GraduationCap className="w-6 h-6" />, value: 'B.Tech', label: 'Computer Science', progress: 75 },
    { icon: <Code className="w-6 h-6" />, value: '15+', label: 'Projects Completed', progress: 90 },
    { icon: <Trophy className="w-6 h-6" />, value: '1500+', label: 'LeetCode Rating', progress: 85 },
    { icon: <Target className="w-6 h-6" />, value: '3.8', label: 'CGPA', progress: 95 },
  ];

  const achievements = [
    "Solved 500+ problems on LeetCode with 1500+ rating",
    "Built full-stack applications using MERN stack",
    "Experienced in competitive programming",
    "Strong foundation in Data Structures & Algorithms"
  ];

  const educationProgress = [
    { subject: "Data Structures & Algorithms", progress: 95 },
    { subject: "Database Management Systems", progress: 88 },
    { subject: "Computer Networks", progress: 85 },
    { subject: "Operating Systems", progress: 90 },
    { subject: "Software Engineering", progress: 92 },
    { subject: "Machine Learning", progress: 78 }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-green-500 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-cyan-500 rounded-full animate-spin-reverse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-green-400 animate-fade-in font-mono">&gt; About Me</h2>
          <p className="text-green-300 max-w-2xl mx-auto font-mono">
            A passionate Computer Science student from NIT Allahabad with a love for coding and problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text */}
          <div className="space-y-6">
            {/* Terminal-style About */}
            <div className="bg-black border border-green-500/30 rounded-lg p-6 animate-slide-in-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-400 text-sm ml-2 font-mono">~/about.sh</span>
              </div>
              <div className="text-green-300 font-mono text-sm space-y-2">
                <div><span className="text-cyan-400">$</span> echo "Hello, I'm Aman Jain"</div>
                <div className="text-white ml-4">Computer Science student at NIT Allahabad</div>
                <div><span className="text-cyan-400">$</span> cat passion.txt</div>
                <div className="text-white ml-4">Software development & competitive programming</div>
                <div><span className="text-cyan-400">$</span> ls skills/</div>
                <div className="text-white ml-4">MERN-stack/ algorithms/ problem-solving/</div>
              </div>
            </div>

            {/* Achievements Terminal */}
            <div className="bg-black border border-green-500/30 rounded-lg p-6 animate-slide-in-left delay-200">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-mono">~/achievements.log</span>
              </div>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="text-green-300 text-sm flex items-start gap-3 group font-mono">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0 group-hover:bg-cyan-400 transition-colors"></div>
                    <span className="group-hover:text-white transition-colors">[✓] {achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Tech Stack Preview */}
            <div className="bg-black border border-green-500/30 rounded-lg p-6 animate-slide-in-left delay-300">
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-mono">~/tech-stack.json</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'MongoDB'].map((skill) => (
                  <span key={skill} className="bg-green-600/20 text-green-400 px-3 py-1 rounded border border-green-600/30 hover:bg-green-600/30 transition-all duration-300 cursor-pointer transform hover:scale-105 font-mono text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats and Education */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-black border border-green-500/30 rounded-lg p-6 hover:border-green-400 transition-all duration-300 transform hover:scale-105 group animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="text-green-400 mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors font-mono">{stat.value}</div>
                  <div className="text-green-300 text-sm font-mono mb-2">{stat.label}</div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${stat.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Progress */}
            <div className="bg-black border border-green-500/30 rounded-lg p-6 animate-fade-in-up delay-500">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-semibold text-green-400 font-mono">Academic Progress</h3>
              </div>
              <div className="space-y-4">
                {educationProgress.map((subject, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-green-300 font-mono text-sm group-hover:text-white transition-colors">{subject.subject}</span>
                      <span className="text-green-400 text-sm font-mono">{subject.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-green-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out transform origin-left hover:scale-105"
                        style={{ 
                          width: `${subject.progress}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16 text-center animate-fade-in-up delay-700">
          <div className="bg-black border border-green-500/30 rounded-lg p-8 max-w-2xl mx-auto hover:border-green-400 transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400 text-sm ml-2 font-mono">~/education.json</span>
            </div>
            <pre className="text-green-300 font-mono text-sm text-left">
{`{
  "degree": "Bachelor of Technology",
  "field": "Computer Science & Engineering",
  "institution": "NIT Allahabad",
  "cgpa": "3.8/4.0",
  "year": "2022-2026",
  "status": "in_progress"
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;