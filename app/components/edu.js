import React from 'react';

const Education = () => {
  return (
    <section id="education" className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">High Scool</h3>
              <p className="text-gray-400">India</p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Diploma</h3>
              <p className="text-gray-400">Southern Alberta Institute Of Technology</p>
              <p className="text-gray-400">Calgary,AB</p>
              <p className="text-gray-400">Currently Enrolled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
