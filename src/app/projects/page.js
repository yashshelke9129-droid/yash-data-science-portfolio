"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen px-10 py-32 grid-bg text-white"
      >

        <h1 className="text-6xl font-bold gradient-text mb-14">
          My Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="glass rounded-3xl p-8 card-hover glow">

            <h2 className="text-3xl font-bold mb-5">
              Student Result Analysis
            </h2>

            <p className="text-gray-300 leading-8 mb-6">
              Data analysis project using Python,
              Pandas, NumPy and Matplotlib.
            </p>

            <div className="flex gap-4">

              <a
                href="https://github.com/yashshelke9129-droid/student-result-analysis/blob/main/Result.ipynb"
                target="_blank"
                className="bg-cyan-500 px-5 py-3 rounded-xl btn-hover"
              >
                View Project
              </a>

              <a
                href="https://github.com/yashshelke9129-droid/student-result-analysis"
                target="_blank"
                className="bg-purple-600 px-5 py-3 rounded-xl btn-hover"
              >
                GitHub Repo
              </a>

            </div>

          </div>

          <div className="glass rounded-3xl p-8 card-hover glow">

            <h2 className="text-3xl font-bold mb-5">
              Iris Flower Classification
            </h2>

            <p className="text-gray-300 leading-8 mb-6">
              Machine Learning classification project
              using Scikit-learn and Python.
            </p>

            <div className="flex gap-4">

              <a
                href="https://github.com/yashshelke9129-droid/CodeAlpha_Iris_Flower_Classification/blob/main/CodeAlpha_Iris_Flower_Classification.ipynb"
                target="_blank"
                className="bg-cyan-500 px-5 py-3 rounded-xl btn-hover"
              >
                View Project
              </a>

              <a
                href="https://github.com/yashshelke9129-droid/CodeAlpha_Iris_Flower_Classification"
                target="_blank"
                className="bg-purple-600 px-5 py-3 rounded-xl btn-hover"
              >
                GitHub Repo
              </a>

            </div>

          </div>

        </div>

      </motion.main>
    </>
  );
}