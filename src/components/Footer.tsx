import React from 'react';
import { Code2, Heart, Github, Linkedin, Twitter, Mail, ArrowUp, MapPin, Calendar } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/amanjain', name: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/aman-jain', name: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: 'https://twitter.com/amanjain', name: 'Twitter' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:aman.jain@example.com', name: 'Email' }
  ];

  const achievements = [
    '1500+ LeetCode Rating',
    '500+ Problems Solved',
    '15+ Projects Built',
    'NIT Allahabad Student'
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-500 rounded-lg animate-spin-slow"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-purple-500 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                <Code2 className="h-8 w-8 text-blue-400 group-hover:animate-bounce" />
              </div>
              <span className="text-xl font-bold text-white">Aman Jain</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Computer Science student at NIT Allahabad passionate about software development, 
              competitive programming, and building innovative solutions.
            </p>
            
            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-white font-medium mb-3">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-2">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-400 text-sm">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: `${index * 200}ms`}}></div>
                    {achievement}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="text-gray-400 text-sm">
                <p className="font-medium text-white mb-1 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </p>
                <a href="mailto:aman.jain@example.com" className="hover:text-blue-400 transition-colors">
                  aman.jain@example.com
                </a>
              </div>
              <div className="text-gray-400 text-sm">
                <p className="font-medium text-white mb-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Location
                </p>
                <span>NIT Allahabad, India</span>
              </div>
              <div className="text-gray-400 text-sm">
                <p className="font-medium text-white mb-1 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Status
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Tags */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h4 className="text-white font-medium mb-4 text-center">Technologies I Work With</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'C++', 'MongoDB', 'MySQL', 'Git', 'HTML/CSS', 'Tailwind CSS', 'Express.js'].map((tech) => (
              <span key={tech} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-blue-500/50 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
            <span>© {currentYear} Aman Jain. Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
            <span>and lots of ☕</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">Built with React & Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12 group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;