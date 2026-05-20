"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-32 grid-bg text-white"
      >

        <h1 className="text-6xl font-bold gradient-text mb-10">
          Resume
        </h1>

        <div className="glass rounded-3xl p-10 card-hover glow text-center">

          <p className="text-xl text-gray-300 mb-8">
            View my professional resume.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-cyan-500 px-8 py-4 rounded-xl text-lg btn-hover"
          >
            Open Resume
          </a>

        </div>

      </motion.main>
    </>
  );
}