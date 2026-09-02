import React from "react";

const LinkItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="group relative rounded px-1 text-white/85 transition-colors hover:text-lime-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
  >
    <span className="px-1">{children}</span>
    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-white/0 via-white/60 to-white/0 transition-all duration-300 group-hover:w-full" />
  </a>
);

const Navbar: React.FC = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-lime-200/10 bg-[#06110a]/80 backdrop-blur supports-[backdrop-filter]:bg-[#06110a]/55">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a
          href="#home"
          className="text-lg font-bold tracking-[0.25em] text-white"
        >
          ELDOR
        </a>
        <div className="flex items-center gap-6">
          <LinkItem href="#shorts">Shorts</LinkItem>
          <LinkItem href="#videos">Videos</LinkItem>
          <LinkItem href="#links">Links</LinkItem>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
