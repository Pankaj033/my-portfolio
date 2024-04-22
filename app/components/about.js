import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center">
        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
          <Image src="/pic.jpg" alt="My Picture" layout="fill" objectFit="cover" />
        </div>
        <div className="md:w-1/6 text-center md:text-left mb-8 md:mb-0"></div>
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl md:text-2xl mb-8">Hi, I am Pankaj! A software developer with expertise in full-stack development, specializing in technologies like JavaScript and Python, eager to innovate and drive success in your next project.</p>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-xl md:text-2xl font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out inline-flex items-center">
            Contact Me <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
