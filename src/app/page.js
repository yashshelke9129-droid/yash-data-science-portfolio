"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-32"
      >

        <img
          src="/profile.jpeg"
          alt="Yash Shelke"
          className="w-56 h-56 rounded-full border-4 border-blue-500 object-cover mb-8 glow float-animation"
        />

        <h1 className="text-6xl font-bold gradient-text mb-4">
          Yash Shelke
        </h1>

        <p className="text-2xl text-gray-300 mb-6">
          Data Science Student • Machine Learning Enthusiast
        </p>

        <div className="glass rounded-3xl p-8 max-w-4xl card-hover">

          <p className="text-lg text-gray-300 leading-9">
            Passionate Data Science student pursuing TYBSc CS,
            focused on Machine Learning, Artificial Intelligence,
            Data Analytics, and Python Development.
            Skilled in building ML projects, analyzing datasets,
            and creating modern AI-driven solutions.
          </p>

        </div>

        <div className="flex gap-6 mt-10">

          <a
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg btn-hover glow"
          >
            View Projects
          </a>

          <a
            href="/resume"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl text-lg btn-hover"
          >
            View Resume
          </a>

        </div>

      </motion.main>
    </>
  );
}