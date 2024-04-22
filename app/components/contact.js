"use client";
import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Connect with me:</h2>
            <p className="text-gray-200 mb-6">Want to work with me:</p>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 " fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 00-8 8c0 3.301 2.891 7.051 7.04 12.185a.725.725 0 001.12 0C17.109 17.051 20 13.301 20 10a8 8 0 00-8-8zm0 2a6 6 0 00-6 6c0 2.598 2.082 5.548 6 9.566 3.918-4.018 6-6.968 6-9.566a6 6 0 00-6-6z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 11a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-300"><a href="mailto:pankaj.bhardwaj@edu.sait.ca">pankaj.bhardwaj@edu.sait.ca</a></p>
              </div>
              <div className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 " fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a8 8 0 00-8 8c0 3.301 2.891 7.051 7.04 12.185a.725.725 0 001.12 0C17.109 17.051 20 13.301 20 10a8 8 0 00-8-8zm0 2a6 6 0 00-6 6c0 2.598 2.082 5.548 6 9.566 3.918-4.018 6-6.968 6-9.566a6 6 0 00-6-6z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 11a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-200">(403) 890 8361</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
