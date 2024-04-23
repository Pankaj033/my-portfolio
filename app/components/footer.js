import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="bg-blue-900 text-white py-2">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Me:</h3>
            <p className="text-gray-300">I am Pankaj, a full-stack developer proficient in JavaScript and Python. I specialize in crafting seamless, scalable applications. For collaboration on innovative projects, reach out and lets elevate your digital solutions together.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul className="flex flex-col space-y-2">
              <li><a href="#head" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#project" className="text-gray-300 hover:text-white">Projects</a></li>
              <li><a href="#skills" className="text-gray-300 hover:text-white">Skills</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
            <p className="text-gray-300"><a href="mailto:pankaj.bhardwaj@edu.sait.ca">pankaj.bhardwaj@edu.sait.ca</a></p>
            <p className="text-gray-300">(403) 890 8361</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
