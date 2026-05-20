"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl font-bold gradient-text">
          YS Portfolio
        </h1>

        <div className="flex gap-8 text-lg">

          <Link href="/" className="hover:text-cyan-400 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-cyan-400 transition">
            About
          </Link>

          <Link href="/projects" className="hover:text-cyan-400 transition">
            Projects
          </Link>

          <Link href="/resume" className="hover:text-cyan-400 transition">
            Resume
          </Link>

          <Link href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>

        </div>

      </div>

    </nav>
  );
}