"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen px-6 md:px-20 py-32 grid-bg text-white"
      >

        {/* Heading */}

        <motion.h1
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold gradient-text mb-16"
        >
          My Projects
        </motion.h1>

        {/* Projects Grid */}

        <div className="grid md:grid-cols-2 gap-10">

          {/* Project 1 */}

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="glass glow rounded-3xl p-8 card-hover"
          >

            <h2 className="text-3xl font-bold mb-5 text-cyan-400">
              Student Result Analysis
            </h2>

            <p className="text-gray-300 leading-8 mb-8">
              Data analysis project using Python,
              Pandas, NumPy and Matplotlib
              for analyzing student performance
              and generating meaningful insights.
            </p>

            <div className="flex gap-4 flex-wrap">

              <a
                href="https://github.com/yashshelke9129-droid/student-result-analysis/blob/main/Result.ipynb"
                target="_blank"
                className="bg-cyan-500 text-black font-bold px-5 py-3 rounded-xl btn-hover"
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

          </motion.div>

          {/* Project 2 */}

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="glass glow rounded-3xl p-8 card-hover"
          >

            <h2 className="text-3xl font-bold mb-5 text-cyan-400">
              Iris Flower Classification
            </h2>

            <p className="text-gray-300 leading-8 mb-8">
              Machine Learning classification project
              using Scikit-learn and Python
              for predicting iris flower species.
            </p>

            <div className="flex gap-4 flex-wrap">

              <a
                href="https://github.com/yashshelke9129-droid/CodeAlpha_Iris_Flower_Classification/blob/main/CodeAlpha_Iris_Flower_Classification.ipynb"
                target="_blank"
                className="bg-cyan-500 text-black font-bold px-5 py-3 rounded-xl btn-hover"
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

          </motion.div>

          {/* Project 3 */}

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="glass glow rounded-3xl p-8 card-hover"
          >

            <h2 className="text-3xl font-bold mb-5 text-cyan-400">
              Car Price Prediction
            </h2>

            <p className="text-gray-300 leading-8 mb-8">
              Regression-based Machine Learning model
              for predicting car prices using
              real-world automobile datasets.
            </p>

            <div className="flex gap-4 flex-wrap">

              <a
                href="https://github.com/yashshelke9129-droid/CodeAlpha_Car_Price_Prediction/blob/main/CodeAlpha_Car_Price_Prediction.ipynb"
                target="_blank"
                className="bg-cyan-500 text-black font-bold px-5 py-3 rounded-xl btn-hover"
              >
                View Project
              </a>

              <a
                href="https://github.com/yashshelke9129-droid/CodeAlpha_Car_Price_Prediction"
                target="_blank"
                className="bg-purple-600 px-5 py-3 rounded-xl btn-hover"
              >
                GitHub Repo
              </a>

            </div>

          </motion.div>

          {/* Project 4 */}

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            className="glass glow rounded-3xl p-8 card-hover"
          >

            <h2 className="text-3xl font-bold mb-5 text-cyan-400">
              Sales Prediction
            </h2>

            <p className="text-gray-300 leading-8 mb-8">
              Predictive analytics project using
              Machine Learning for forecasting
              future sales performance.
            </p>

            <div className="flex gap-4 flex-wrap">

              <a
                href="https://github.com/yashshelke9129-droid/CodeAlpha_Sales_Prediction/blob/main/CodeAlpha_Sales_Prediction.ipynb"
                target="_blank"
                className="bg-cyan-500 text-black font-bold px-5 py-3 rounded-xl btn-hover"
              >
                View Project
              </a>

              <a
                href="https://github.com/yashshelke9129-droid/CodeAlpha_Sales_Prediction"
                target="_blank"
                className="bg-purple-600 px-5 py-3 rounded-xl btn-hover"
              >
                GitHub Repo
              </a>

            </div>

          </motion.div>

        </div>

      </motion.main>
    </>
  );
}