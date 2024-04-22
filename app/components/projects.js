import React from 'react';

const Projects = () => {
  return (
    <section id='projects' className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">MovieData Base Api</h3>
              <p className="text-gray-200">Fetching data from a api to make interactive web page, check git for repository.</p>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Weather Api</h3>
              <p className="text-gray-200">More info, redirect to my git account.</p>
            </div>
          </div>
          {/* Project 3 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Expense Tracker APP</h3>
              <p className="text-gray-200">Mobile Application Project track user expenses.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
