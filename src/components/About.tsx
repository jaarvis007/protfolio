import React, { useState, useEffect, useRef } from 'react';
import profilePic from '../public/images/about.jpeg'

const About = () => {
  // Data for the main typing summary, now a single concise line
  const aboutSummaryParagraph = "I am Aman Jain, a passionate Full Stack Developer and Backend Engineer with a strong foundation in building scalable applications. My expertise spans across modern web technologies like React.js, Node.js, Java, and databases such as MongoDB and MySQL. I thrive on solving complex problems and continuously learning new technologies to deliver innovative solutions.";


  // New states and ref for Intersection Observer
  const aboutSectionRef = useRef(null);
  const [hasAboutSectionAppeared, setHasAboutSectionAppeared] = useState(false);


  // Effect to observe when the About section enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAboutSectionAppeared(true);
            observer.disconnect(); // Stop observing once it's visible
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);


  return (
    <section id="about" ref={aboutSectionRef} className="py-20 bg-black relative overflow-hidden">
      {/* Background Animation - Floating code snippets */}
      <div className="absolute inset-0 opacity-5">
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
            {['class UserProfile {}', 'function getInfo()', 'db.fetch()', 'const bio =', 'return profile', 'if (loggedIn) {}', 'about_me_data'][Math.floor(Math.random() * 7)]}
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
        {/* About Me Heading - Consistent with other sections */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-extrabold mb-4 text-green-400 animate-fade-in"
              style={{
                textShadow: '8px 8px 0px #000000, 16px 16px 0px #166534' // Darker green shadow
              }}>
            ABOUT ME
          </h2>
          <p className="text-green-300 max-w-2xl mx-auto text-xl font-semibold">
            Get to know the developer behind the code.
          </p>
        </div>

        {/* Content Section: Text on Left, Image on Right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-5xl mx-auto">
          {/* Left Column: Summarized Paragraph */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in-up delay-200">
            <div className="p-4 md:p-8 rounded-lg"> 
              <p className="text-green-300 text-lg md:text-xl leading-relaxed font-mono">
                {aboutSummaryParagraph}
              </p>
            </div>
          </div>

          {/* Right Column: Image with 3D effect */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative w-54 h-14 md:w-80 md:h-80 rounded-full overflow-hidden
                            bg-gradient-to-br from-green-500 to-cyan-500 p-2 shadow-lg
                            transform rotate-y-6 rotate-x-3 group" /* Outer container for 3D effect */
            >
              {/* Inner circle for the image container */}
              <div className="w-full h-full rounded-full overflow-hidden relative bg-gray-500"> {/* Dark background for contrast */}
                <img
                  src={profilePic} // Your uploaded image
                  alt="Aman Jain Profile"
                  className="w-full h-full object-cover object-center
                             transform scale-110 translate-y-4 transition-transform duration-500 ease-out group-hover:scale-100 group-hover:translate-y-0" /* Image transform for "coming out" effect */
                  onError={(e) => { e.currentTarget.src = "https://placehold.co/320x320/10B981/FFFFFF?text=Aman+Jain"; }} // Fallback
                />
                
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
