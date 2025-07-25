import React from 'react';

const Skills = () => {
  const allTechnologies = [
    { name: 'JavaScript', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'React Native', iconUrl: 'https://reactnative.dev/img/header_logo.svg' },
    { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'HTML', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }, // Corrected CSS icon
    { name: 'Git', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Github', iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png' },
    { name: 'MySQL', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Express.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Tailwind CSS', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png' },
    { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Next.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Redux', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'VS Code', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Linux', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Postman', iconUrl: 'https://avatars.slack-edge.com/2024-04-05/6934042159649_ac803d1cddbcbef8f110_512.png' },
    { name: 'AWS', iconUrl: 'https://logos-world.net/wp-content/uploads/2021/08/Amazon-Web-Services-AWS-Logo.png' },
    { name: 'Spring Boot', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Redis', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Zoho Catalyst', iconUrl: 'https://zohowebstatic.com/sites/default/files/ogimage/catalyst-logo.png' }, 
    { name: 'Npm', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' }, 
    { name: 'Gradle', iconUrl: 'https://cdn.creazilla.com/icons/3253858/gradle-icon-sm.png' }, // Gradle icon
    { name: 'Maven', iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Apache_Maven_logo.svg/640px-Apache_Maven_logo.svg.png' }, 
    // { name: 'RESTful APIs', iconUrl: 'https://cdn-icons-png.flaticon.com/512/2869/2869369.png' },
    // { name: 'Microservices', iconUrl: 'https://cdn-icons-png.flaticon.com/512/8297/8297925.png' },
    // { name: 'OAuth', iconUrl: 'https://cdn-icons-png.flaticon.com/512/1048/1048953.png' },
    { name: 'JWT', iconUrl: 'https://img.icons8.com/?size=512&id=rHpveptSuwDz&format=png' },
    // { name: 'Algorithms', iconUrl: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png' },
    // { name: 'Data Structures', iconUrl: 'https://cdn-icons-png.flaticon.com/512/3114/3114883.png' },
];


  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Animated Background Elements - Changed to green shades */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-green-600 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-lime-500 rounded-full animate-pulse"></div> {/* Changed to lime */}
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-emerald-500 rounded-lg animate-bounce"></div> {/* Changed to emerald */}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Skills Heading - Updated to green tones */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-8xl font-extrabold mb-4 text-green-400 animate-fade-in"
              style={{
                textShadow: '8px 8px 0px #000000, 16px 16px 0px #166534' // Darker green shadow
              }}>
            SKILLS
          </h2>
          <p className="text-green-300 max-w-2xl mx-auto text-xl font-semibold">
            My Arsenal of Technologies
          </p>
        </div>

        {/* Moving Carousel */}
        <div className="mb-16 overflow-hidden">
          {/* First Row - moving left to right */}
          <div className="relative mb-8 py-4 bg-gray-900/50 rounded-lg border border-green-600/20 shadow-lg"> {/* Green border */}
            <div className="flex animate-scroll-left space-x-6 w-max">
              {[...allTechnologies, ...allTechnologies].map((tech, index) => (
                <div
                  key={`left-${index}`}
                  className="flex-shrink-0 bg-gray-800 rounded-lg p-4 min-w-[140px] h-32 flex flex-col items-center justify-center relative overflow-hidden group
                             border border-green-500/30 hover:border-green-400 transition-all duration-300
                             hover:shadow-green-500/50 hover:shadow-xl" /* Glowing shadow on hover */
                >
                  <img
                    src={tech.iconUrl}
                    alt={tech.name}
                    className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce" /* Increased icon size */
                    onError={(e) => { e.currentTarget.src = `https://placehold.co/64x64/0a0a0a/10b981?text=${tech.name.substring(0,2)}`; }} /* Fallback */
                  />
                  {/* Tech name, hidden by default, shown on hover */}
                  <div className="absolute bottom-2 text-green-400 font-mono text-sm text-center
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - moving right to left */}
          <div className="relative py-4 bg-gray-900/50 rounded-lg border border-lime-500/20 shadow-lg"> {/* Lime border */}
            <div className="flex animate-scroll-right space-x-6 w-max">
              {[...allTechnologies.slice().reverse(), ...allTechnologies.slice().reverse()].map((tech, index) => (
                <div
                  key={`right-${index}`}
                  className="flex-shrink-0 bg-gray-800 rounded-lg p-4 min-w-[140px] h-32 flex flex-col items-center justify-center relative overflow-hidden group
                             border border-lime-500/30 hover:border-lime-400 transition-all duration-300
                             hover:shadow-lime-500/50 hover:shadow-xl" /* Glowing shadow on hover */
                >
                  <img
                    src={tech.iconUrl}
                    alt={tech.name}
                    className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce" /* Increased icon size */
                    onError={(e) => { e.currentTarget.src = `https://placehold.co/64x64/0a0a0a/65a30d?text=${tech.name.substring(0,2)}`; }} /* Fallback */
                  />
                  {/* Tech name, hidden by default, shown on hover */}
                  <div className="absolute bottom-2 text-lime-400 font-mono text-sm text-center
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
