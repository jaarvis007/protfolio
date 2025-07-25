import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, MapPin, Terminal, User, Code, Award, GraduationCap, Star, Code2Icon, Phone, File } from 'lucide-react';

// Define the shape of a point in our trail
interface TrailPoint {
  x: number;
  y: number;
  size: number;
  alpha: number;
}

const Hero = () => {
  const [typedTitle, setTypedTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [hasTerminalAppeared, setHasTerminalAppeared] = useState(false);

  const heroSectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const roles = [
    "Full-Stack Developer",
    "Backend Engineer",
    "Competitive Programmer",
    "Problem Solver",
    "Cloud Engineer"
  ];

  const resumeData = [
    { type: 'command', text: '$ cat aman_jain_profile.json' },
    { type: 'json', text: '{' },
    { type: 'json', text: '  "name": "Aman Jain",' },
    { type: 'json', text: '  "current_role": "Software Developer Intern",' },
    { type: 'json', text: '  "company": "Fristine Infotech Pvt Ltd",' },
    { type: 'json', text: '  "education": "MCA 25 @ NIT Allahabad (CPI: 8.60)",' },
    { type: 'json', text: '  "leetcode_rating": "2051 (Knight)",' },
    { type: 'json', text: '  "codeforces_rating": "1375 (Pupil)",' },
    { type: 'json', text: '  "key_skills": ["React.js", "Node.js", "MongoDB", "AWS", "Git"],' },
    { type: 'json', text: '  "status": "available_for_opportunities"' },
    { type: 'json', text: '}' },
    { type: 'command', text: '$ _' }
  ];

  useEffect(() => {
    const typeSpeed = 150;
    const deleteSpeed = 80;
    const delayBetweenTitles = 1500;

    let timer: number;

    const handleTyping = () => {
      const currentRole = roles[titleIndex];
      if (isDeleting) {
        setTypedTitle(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setTitleIndex(prev => (prev + 1) % roles.length);
        }
      } else {
        setTypedTitle(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        if (charIndex === currentRole.length) {
          setIsDeleting(true);
          timer = setTimeout(handleTyping, delayBetweenTitles);
          return;
        }
      }
      timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
    };

    timer = setTimeout(handleTyping, typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTerminalAppeared) {
            setHasTerminalAppeared(true);
            let lineIdx: number = 0;
            let charIdx: number = 0;
            let currentLine: string = '';

            const typeLine = () => {
              if (lineIdx < resumeData.length) {
                const data = resumeData[lineIdx];
                if (data.type === 'command' || data.type === 'json') {
                  if (charIdx < data.text.length) {
                    currentLine += data.text[charIdx];
                    setTerminalLines(prev => {
                      const newLines: string[] = [...prev];
                      newLines[lineIdx] = currentLine;
                      return newLines;
                    });
                    charIdx++;
                    setTimeout(typeLine, 30);
                  } else {
                    setTerminalLines(prev => [...prev, '']);
                    lineIdx++;
                    charIdx = 0;
                    currentLine = '';
                    setTimeout(typeLine, 500);
                  }
                } else {
                  lineIdx++;
                  setTimeout(typeLine, 50);
                }
              }
            };

            setTerminalLines(['Initializing secure shell...', 'Loading user profile...', 'Connection established.', '']);
            setTimeout(() => {
              typeLine();
            }, 1000);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, [hasTerminalAppeared]);

  // Effect for the moving star trail
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Ensure context is available

    let trailPoints: TrailPoint[] = [];
    let mouse = { x: -100, y: -100 };

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      trailPoints.push({
        x: mouse.x,
        y: mouse.y,
        size: 15,
        alpha: 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animateTrail = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < trailPoints.length; i++) {
        const p = trailPoints[i];

        p.size *= 0.92;
        p.alpha -= 0.05;

        if (p.size < 1 || p.alpha < 0) {
          trailPoints.splice(i, 1);
          i--;
          continue;
        }

        if (i > 0) {
          const prevP = trailPoints[i - 1];
          ctx.beginPath();
          ctx.moveTo(prevP.x, prevP.y);
          ctx.lineTo(p.x, p.y);
          // Changed to a bright greenish neon color
          ctx.strokeStyle = `rgba(0, 255, 0, ${p.alpha})`;
          ctx.lineWidth = p.size;
          ctx.lineCap = 'round';
          ctx.stroke();
        }
      }

      requestAnimationFrame(animateTrail);
    };

    animateTrail();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" ref={heroSectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black py-16">
      <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>

      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden opacity-5">
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
            {['console.log()', 'function()', 'const x =', 'return', 'if()', 'for()', 'while()', 'class', 'import', 'export', 'async', 'await', 'try/catch', 'db.query()', 'API_KEY'][Math.floor(Math.random() * 15)]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 text-center lg:flex lg:items-center lg:justify-between lg:text-left gap-12">
        <div className="lg:w-1/2 animate-slide-in-left flex flex-col items-center lg:items-start">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-400 bg-clip-text text-transparent animate-gradient font-mono">
              Aman Jain
            </h1>
            <div className="text-xl md:text-2xl text-green-300 mb-2 typing-animation font-mono">
              &gt; {typedTitle}
              <span className="inline-block w-0.5 h-full bg-green-400 align-bottom animate-blink-caret"></span>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 text-green-400 text-sm font-mono mt-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>NIT Allahabad</span>
              </div>
              <div className="flex items-center gap-1">
                <GraduationCap className="w-4 h-4 text-blue-400" />
                <span>MCA Student (CPI: 8.60)</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up delay-400">
            <a href="#contact" className="group bg-green-600 hover:bg-green-700 text-black px-8 py-3 rounded font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg relative overflow-hidden font-mono">
              <span className="relative z-10 flex items-center gap-2">
                <Code className="w-5 h-5" />
                contact --me
              </span>
            </a>

            <a href="https://drive.google.com/file/d/1sdKAw93PTmYfhEFq3jteoKc2EqBaLh2o/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="group border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-black px-8 py-3 rounded font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden font-mono">
              <File size={20} className="group-hover:animate-bounce" />
              <span>resume --view</span>
            </a>
          </div>

          <div className="flex justify-center lg:justify-start space-x-6 mb-16 animate-fade-in-up delay-600">
            <a href="https://github.com/jaarvis007" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <Github size={28} />
            </a>
             <a href="https://codolio.com/profile/ndQx9siI" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <Code2Icon size={28} />
            </a>
            <a href="https://linkedin.com/in/aman-jain12" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <Linkedin size={28} />
            </a>
            <a href="mailto:amanjain637061@gmail.com" className="text-green-400 hover:text-green-300 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <Mail size={28} />
            </a>
            <a href="tel:9264908068" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-all duration-300 transform hover:scale-125 hover:rotate-12">
              <Phone size={28} />
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col items-center lg:items-center mt-12 lg:mt-0 animate-slide-in-right">
          <div className="bg-gray-900 border border-green-500/30 rounded-lg p-6 shadow-2xl max-w-2xl w-full"
               style={{
                 boxShadow: '0 10px 20px rgba(0, 255, 0, 0.2), 0 6px 6px rgba(0, 255, 0, 0.15), 0 0 0 4px rgba(0, 255, 0, 0.1)'
               }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-400 text-sm ml-2 font-mono">~/aman_profile.sh</span>
            </div>
            <div className="text-left">
              {terminalLines.map((line, index) => (
                <div key={index} className="font-mono text-sm mb-1">
                  {line.startsWith('$') ? (
                    <span className="text-cyan-400">{line}</span>
                  ) : line.includes('"name"') || line.includes('"current_role"') || line.includes('"education"') || line.includes('"status"') ? (
                    <span className="text-green-300">{line}</span>
                  ) : line.includes('"leetcode_rating"') || line.includes('"codeforces_rating"') ? (
                    <span className="text-yellow-400">{line}</span>
                  ) : (
                    <span className="text-gray-300">{line}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="animate-bounce mt-16">
        <ChevronDown size={32} className="text-green-400 mx-auto animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;