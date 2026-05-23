"use client";

import Link from "next/link";

export default function Navbar() {

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-cyan-500/10">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        <h1 className="text-5xl font-black gradient-text">
          YS.
        </h1>

        <div className="flex gap-10 text-lg font-medium text-white">

          <Link href="/" className="hover:text-cyan-400 transition">
            Home
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