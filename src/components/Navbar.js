"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020208]/80 backdrop-blur-xl border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent tracking-wider">
            YS.DATA
          </span>

          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 px-1 text-sm font-medium tracking-wide transition-all duration-500 hover:text-white hover:-translate-y-1 hover:scale-110 ${
                  isActive
                    ? "text-cyan-300 drop-shadow-[0_0_20px_rgba(34,211,238,1)]"
                    : "text-slate-400"
                }`}
              >
                {link.name}

                {isActive && (
                  <>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full shadow-[0_0_20px_#22d3ee]"></span>

                    <span className="absolute inset-0 rounded-lg bg-cyan-500/10 blur-md -z-10"></span>
                  </>
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-400 hover:text-white transition-all duration-300"
          aria-label="Toggle Navigation Menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#020208]/95 backdrop-blur-2xl border-b border-cyan-500/10 px-6 py-6 absolute w-full left-0 flex flex-col gap-4 text-center">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg py-3 rounded-lg transition-all duration-300 ${
                pathname === link.href
                  ? "text-cyan-400 font-bold bg-cyan-500/10 drop-shadow-[0_0_20px_rgba(34,211,238,1)]"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}