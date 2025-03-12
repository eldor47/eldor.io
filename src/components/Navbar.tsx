import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1F1A38] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold text-white">eldor</div>
        <div className="space-x-4">
          <a href="#home" className="text-white hover:text-[#6B46C1] transition-colors">Home</a>
          <a href="#projects" className="text-white hover:text-[#6B46C1] transition-colors">Projects</a>
          <a href="#contact" className="text-white hover:text-[#6B46C1] transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
