"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-32 grid-bg"
      >

        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          src="/profile.jpeg"
          alt="Yash Shelke"
          className="w-60 h-60 rounded-full border-4 border-cyan-400 object-cover mb-8 glow float-animation"
        />

        <h1 className="text-7xl font-bold gradient-text mb-5">
          Yash Shelke
        </h1>

        <p className="text-2xl text-gray-300 mb-8">
          Data Science Student • AI Enthusiast • ML Developer
        </p>

        <div className="glass p-10 rounded-3xl max-w-4xl card-hover glow">

          <p className="text-lg text-gray-300 leading-9">
            Passionate about Data Science, Artificial Intelligence,
            Machine Learning, and futuristic technologies.
            Skilled in Python, Data Analysis, ML Models,
            and building modern AI-driven projects.
          </p>

        </div>

        <div className="flex gap-6 mt-10">

          <a
            href="/projects"
            className="bg-cyan-500 px-8 py-4 rounded-xl text-lg btn-hover glow"
          >
            View Projects
          </a>

          <a
            href="/about"
            className="bg-purple-600 px-8 py-4 rounded-xl text-lg btn-hover"
          >
            About Me
          </a>

        </div>

      </motion.main>
    </>
  );
}