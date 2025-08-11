import React from 'react';

const LinkItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="relative text-white/90 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B46C1] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
  >
    <span className="px-1">{children}</span>
    <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-white/0 via-white/60 to-white/0 transition-all duration-300 group-hover:w-full" />
  </a>
);

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[#0b0820]/40 bg-[#0b0820]/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-lg font-bold text-white tracking-wide">eldor</div>
        <div className="space-x-6 hidden sm:flex group">
          <LinkItem href="#home">Home</LinkItem>
          <LinkItem href="#projects">Projects</LinkItem>
          <LinkItem href="#contact">Contact</LinkItem>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
