import React from 'react';

const LinkItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="group relative rounded px-1 text-white/85 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6B46C1] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
  >
    <span className="px-1">{children}</span>
    <span className="absolute left-0 -bottom-1 h-px w-0 bg-gradient-to-r from-white/0 via-white/60 to-white/0 transition-all duration-300 group-hover:w-full" />
  </a>
);

const Navbar: React.FC = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0b0820]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0b0820]/45">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="#home" className="text-lg font-bold tracking-[0.25em] text-white">
          ELDOR
        </a>
        <div className="hidden flex-wrap items-center gap-6 sm:flex">
          <LinkItem href="#about">About</LinkItem>
          <LinkItem href="#plugins">Plugins</LinkItem>
          <LinkItem href="#dev">Game Dev</LinkItem>
          <LinkItem href="#links">Links</LinkItem>
          <LinkItem href="#contact">Contact</LinkItem>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
