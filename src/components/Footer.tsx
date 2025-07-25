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

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: 'https://github.com/jaarvis007', name: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com/in/aman-jain12', name: 'LinkedIn' },
    { icon: <Mail className="w-5 h-5" />, href: 'mailto:amanjain637061@gmail.com', name: 'Email' }
  ];

  return (
    <footer className="bg-gray-950 border-t border-green-800 relative overflow-hidden py-16"> {/* Darker background, increased padding */}
      {/* Background Animation - Dynamic glowing lines and particles */}
      <div className="absolute inset-0 opacity-15 overflow-hidden">
        {/* Moving grid lines */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent animate-scan-x"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent animate-scan-y"></div>

        {/* Pulsing circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-cyan-400/10 rounded-full blur-xl animate-pulse-slow delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-blue-400/10 rounded-full blur-lg animate-pulse-slow delay-1400"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand & Description */}
          <div className="md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4 group"> {/* Increased space */}
              <div className="p-3 bg-green-600/30 rounded-lg group-hover:bg-green-600/50 transition-colors duration-300 transform group-hover:rotate-6"> {/* Larger padding, subtle rotate */}
                <Code2 className="h-9 w-9 text-green-400 group-hover:animate-spin-slow" /> {/* Larger icon, continuous spin on hover */}
              </div>
              <span className="text-2xl font-extrabold text-white font-mono tracking-wider">Aman Jain</span> {/* Larger, bolder text */}
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-sm mx-auto md:mx-0 font-mono text-base"> {/* Slightly lighter text, larger font */}
              Thank you for visiting! Let's connect and discuss how my skills can help bring your next project to life.
            </p>
            
            <div className="flex justify-center md:justify-start space-x-6"> {/* Increased space */}
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-all duration-300 transform hover:scale-150 hover:rotate-12 hover:drop-shadow-lg" /* More dramatic hover */
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer / Centering Element (for larger screens) */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Contact Info (Aligned to right on desktop) */}
          <div className="md:col-span-1 text-center md:text-right">
            <h3 className="text-white font-bold mb-4 text-xl font-mono">Get in Touch</h3> {/* Bolder, larger text */}
            <div className="space-y-3 text-gray-300 font-mono text-base"> {/* Slightly lighter text, larger font */}
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Mail className="w-5 h-5 text-green-400" /> {/* Larger icon */}
                <a href="mailto:amanjain637061@gmail.com" className="hover:text-green-400 transition-colors">
                  amanjain637061@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <MapPin className="w-5 h-5 text-green-400" /> {/* Larger icon */}
                <span>NIT Allahabad, India</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <Calendar className="w-5 h-5 text-green-400" /> {/* Larger icon */}
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse-fast"></div> {/* Slightly larger pulse */}
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm font-mono"> {/* Increased mt */}
          <div className="flex items-center mb-4 md:mb-0">
            <span>© {currentYear} Aman Jain. Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 mx-1 animate-ping-slow" /> {/* Changed to ping animation */}
            <span>code & coffee.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">Built with React & Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="bg-green-600 hover:bg-green-700 text-black p-3 rounded-full transition-all duration-300 transform hover:scale-125 hover:rotate-180 group shadow-lg hover:shadow-green-500/50" /* More dramatic button */
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:animate-bounce" /> {/* Larger icon */}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
