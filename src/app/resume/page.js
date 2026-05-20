"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-32 grid-bg"
      >

        <h1 className="text-6xl font-bold gradient-text mb-12">
          Resume
        </h1>

        <div className="glass glow rounded-3xl p-12 text-center card-hover">

          <p className="text-2xl text-gray-300 mb-10">
            View my professional Data Science resume
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-10 py-5 rounded-2xl text-xl btn-hover"
          >
            Open Resume
          </a>

        </div>

      </motion.main>
    </>
  );
}