"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function Projects() {

  return (

    <>

      <Navbar />

      <main className="min-h-screen px-6 md:px-20 py-32 bg-gradient-to-br from-black via-blue-950 to-black text-white overflow-hidden relative">

        {/* Background Glow */}

        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full animate-pulse"></div>

        {/* Heading */}

        <motion.h1
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-black gradient-text mb-20 text-center relative z-10"
        >
          My Projects
        </motion.h1>

        {/* Projects Grid */}

        <div className="grid lg:grid-cols-2 gap-10 relative z-10">

          {/* Project 1 */}

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="glass glow rounded-3xl overflow-hidden card-hover"
          >

            <img
              src="/projects/result.jpeg"
              alt="Student Result Analysis"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">

              <h2 className="text-3xl font-bold mb-5 text-cyan-400">
                Student Result Analysis
              </h2>

              <p className="text-gray-300 leading-8 mb-8">
                Data analysis project using Python,
                Pandas, NumPy and Matplotlib
                for analyzing student performance
                and generating meaningful insights.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                <span className="glass px-4 py-2 rounded-full text-cyan-300">
                  Python
                </span>

                <span className="glass px-4 py-2 rounded-full text-cyan-300">
                  Pandas
                </span>

                <span className="glass px-4 py-2 rounded-full text-cyan-300">
                  Matplotlib
                </span>

              </div>

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

            </div>

          </motion.div>

          {/* Project 2 */}

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ y: -10 }}
            className="glass glow rounded-3xl overflow-hidden card-hover"
          >

            <img
              src="/projects/iris.png"
              alt="Iris Flower Classification"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">

              <h2 className="text-3xl font-bold mb-5 text-cyan-400">
                Iris Flower Classification
              </h2>

              <p className="text-gray-300 leading-8 mb-8">
                Machine Learning classification project
                using Scikit-learn and Python
                for predicting iris flower species.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                <span className="glass px-4 py-2 rounded-full text-cyan-300">
                  Machine Learning
                </span>

                <span className="glass px-4 py-2 rounded-full text-cyan-300">
                  Scikit-learn
                </span>

                <span className="glass px-4 py-2 rounded-full text-cyan-300">
                  Python
                </span>

              </div>

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

            </div>

          </motion.div>

          {/* Project 3 */}

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            whileHover={{ y: -10 }}
            className="glass glow rounded-3xl overflow-hidden card-hover"
          >

            <img
              src="/projects/car.png"
              alt="Car Price Prediction"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">

              <h2 className="text-3xl font-bold mb-5 text-cyan-400">
                Car Price Prediction
              </h2>

              <p className="text-gray-300 leading-8 mb-8">
                Regression-based Machine Learning model
                for predicting car prices using
                real-world automobile datasets.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                <span className="glass px-4 py-2 rounded-full text-cyan-300">
                  Regression
                </span>

                <span className="glass px-4 py-2 rounded-full text-cyan-300">
                  Machine Learning
                </span>

                <span className="glass px-4 py-2 rounded-full text-cyan-300">
                  Python
                </span>

              </div>

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

            </div>

          </motion.div>

          {/* Project 4 */}

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4 }}
            whileHover={{ y: -10 }}
            className="glass glow rounded-3xl overflow-hidden card-hover"
          >

            <img
              src="/projects/sales.png"
              alt="Sales Prediction"
              className="w-full h-64 object-cover"
            />

            <div className="p-8">

              <h2 className="text-3xl font-bold mb-5 text-cyan-400">
                Sales Prediction
              </h2>

              <p className="text-gray-300 leading-8 mb-8">
                Predictive analytics project using
                Machine Learning for forecasting
                future sales performance.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                <span className="glass px-4 py-2 rounded-full text-cyan-300">
                  Forecasting
                </span>

                <span className="glass px-4 py-2 rounded-full text-cyan-300">
                  ML
                </span>

                <span className="glass px-4 py-2 rounded-full text-cyan-300">
                  Analytics
                </span>

              </div>

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

            </div>

          </motion.div>

        </div>

      </main>

    </>

  );

}