"use client";

import Link from "next/link";

export default function Navbar() {

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-cyan-500/20">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}

        <h1 className="text-4xl font-bold text-cyan-400">
          YS Portfolio
        </h1>

        {/* Navigation Links */}

        <div className="flex gap-10 text-2xl font-medium text-white">

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

          <Link href="/certificates" className="hover:text-cyan-400 transition">
            Certificates
          </Link>

          <Link href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </Link>

        </div>

      </div>

    </nav>

  );

}