import React from 'react';

const Skills = () => {
  return (
    <section id='skills' className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="rounded-lg bg-gray-800 p-1">
            <div className="text-center bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 py-8">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="Next.js" className="w-16 h-16 mx-auto mb-4" />
              <p className="text-gray-200 font-semibold">Next.js</p>
            </div>
          </div>

          <div className="rounded-lg bg-gray-800 p-1">
            <div className="text-center bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 py-8">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-16 h-16 mx-auto mb-4" />
              <p className="text-gray-200 font-semibold">HTML</p>
            </div>
          </div>


          <div className="rounded-lg bg-gray-800 p-1">
            <div className="text-center bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 py-8">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-16 h-16 mx-auto mb-4" />
              <p className="text-gray-200 font-semibold">JavaScript</p>
            </div>
          </div>
          <div className="rounded-lg bg-gray-800 p-1">
            <div className="text-center bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 py-8">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-16 h-16 mx-auto mb-4" />
              <p className="text-gray-200 font-semibold">CSS</p>
            </div>
          </div>
          <div className="rounded-lg bg-gray-800 p-1">
            <div className="text-center bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 py-8">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="w-16 h-16 mx-auto mb-4" />
              <p className="text-gray-200 font-semibold">Firebase</p>
            </div>
          </div>
          <div className="rounded-lg bg-gray-800 p-1">
            <div className="text-center bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 py-8">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-16 h-16 mx-auto mb-4" />
              <p className="text-gray-200 font-semibold">GitHub</p>
            </div>
          </div>

          <div className="rounded-lg bg-gray-800 p-1">
            <div className="text-center bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 py-8">
              <img src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg" alt="Tailwind CSS" className="w-16 h-16 mx-auto mb-4" />
              <p className="text-gray-200 font-semibold">Tailwind CSS</p>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Skills;
