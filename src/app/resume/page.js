"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col items-center justify-center px-6 py-32 grid-bg text-white"
      >

        <motion.h1
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold gradient-text mb-12"
        >
          Resume
        </motion.h1>

        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="glass glow rounded-3xl p-12 text-center card-hover"
        >

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

        </motion.div>

      </motion.main>
    </>
  );
}