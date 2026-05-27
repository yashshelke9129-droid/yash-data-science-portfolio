"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-slate-950 text-white relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-slate-900/40 border border-white/10 rounded-2xl p-8 text-center max-w-lg w-full backdrop-blur-sm shadow-lg"
        >
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-1 font-semibold">Curriculum Vitae</span>
          <h1 className="text-3xl font-bold mb-3 text-white">My Resume</h1>
          
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
            Review or download my full professional resume containing detailed breakdowns of my computer science academics, complete technical project architectures, and internship timelines.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-lg text-center shadow-md shadow-cyan-500/5 transition duration-300 text-sm"
          >
            Download Resume (PDF)
          </a>
        </motion.div>
      </main>
    </>
  );
}