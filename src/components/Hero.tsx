import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, MapPin, Calendar, Terminal,User, Code } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Matrix-style background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating code snippets */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
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
            {['console.log()', 'function()', 'const x =', 'return', 'if()', 'for()', 'while()', 'class', 'import', 'export'][Math.floor(Math.random() * 10)]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="text-center">
          {/* Terminal-style profile */}
          {/* <div className="mb-8 relative max-w-md mx-auto">
            <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-green-400 text-sm ml-2 font-mono">~/profile</span>
              </div>
              <div className="text-left">
                <div className="text-green-400 font-mono text-sm mb-2">
                  <span className="text-cyan-400">$</span> whoami
                </div>
                <div className="text-white font-mono text-lg mb-2">Aman Jain</div>
                <div className="text-green-400 font-mono text-sm mb-2">
                  <span className="text-cyan-400">$</span> cat role.txt
                </div>
                <div className="text-white font-mono">Software Developer & Problem Solver</div>
              </div>
            </div>
          </div> */}

          {/* Profile Picture */}
<div className="mb-8 relative">
  <div className="w-32 h-32 mx-auto mb-6 relative">
    <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-1 shadow-2xl">
      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
        {/* Placeholder for profile picture - replace with actual image */}
        <img 
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400" 
          alt="Aman Jain" 
          className="w-full h-full object-cover rounded-full"
        />
        {/* Fallback if image doesn't load */}
        <User className="w-16 h-16 text-green-400 absolute inset-0 m-auto opacity-0" />
      </div>
    </div>
    {/* Status indicator */}
    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
    </div>
  </div>
</div>


          

          {/* Name and Title with Typing Animation */}
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent animate-gradient font-mono">
              Aman Jain
            </h1>
            <div className="text-xl md:text-2xl text-green-300 mb-2 typing-animation font-mono">
              &gt; Full-Stack Developer | Competitive Programmer
            </div>
            <div className="flex items-center justify-center gap-4 text-green-400 text-sm font-mono">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>NIT Allahabad</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for Opportunities</span>
              </div>
            </div>
          </div>

          {/* <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 max-w-2xl mx-auto mb-8 text-left">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-mono">~/about.json</span>
            </div>
            <pre className="text-green-300 font-mono text-sm">
{`{
  "name": "Aman Jain",
  "education": "B.Tech CSE @ NIT Allahabad",
  "cgpa": 3.8,
  "leetcode_rating": "1500+",
  "problems_solved": "500+",
  "specialization": [
    "Full-Stack Development",
    "Competitive Programming",
    "Problem Solving"
  ],
  "status": "seeking_opportunities"
}`}
            </pre>
          </div> */}

          {/* CTA Buttons with Terminal Style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group bg-green-600 hover:bg-green-700 text-black px-8 py-3 rounded font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden font-mono">
              <span className="relative z-10 flex items-center gap-2">
                <Code className="w-5 h-5" />
                ./view_projects.sh
              </span>
            </button>
            <button className="group border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-black px-8 py-3 rounded font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden font-mono">
              <Download size={20} className="group-hover:animate-bounce" />
              <span>download resume.pdf</span>
            </button>
          </div>

          {/* Social Links with Terminal Style */}
          <div className="flex justify-center space-x-6 mb-16">
            <a href="https://github.com/amanjain" className="text-green-400 hover:text-green-300 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <Github size={28} />
            </a>
            <a href="https://linkedin.com/in/aman-jain" className="text-green-400 hover:text-green-300 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <Linkedin size={28} />
            </a>
            <a href="mailto:aman.jain@example.com" className="text-green-400 hover:text-green-300 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <Mail size={28} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown size={32} className="text-green-400 mx-auto animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;