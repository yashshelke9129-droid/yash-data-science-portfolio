"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen px-10 py-32 text-white"
      >

        <h1 className="text-5xl font-bold gradient-text mb-12">
          About Me
        </h1>

        <div className="glass rounded-3xl p-8 mb-10 card-hover">

          <h2 className="text-3xl font-bold mb-5">
            Hello, I'm Yash Shelke
          </h2>

          <p className="text-gray-300 leading-9">
            I am a passionate Data Science student currently pursuing
            TYBSc CS with strong interest in Machine Learning,
            Artificial Intelligence, Data Analytics, and Python
            Development.
            <br /><br />

            I enjoy solving real-world problems using data-driven
            approaches and continuously improving my technical skills
            by building practical projects and exploring modern AI technologies.
            <br /><br />

            My goal is to become a professional Data Scientist and contribute
            to innovative AI-driven solutions.
          </p>

        </div>

        <div className="glass rounded-3xl p-8 mb-10 card-hover">

          <h2 className="text-3xl font-bold mb-5 text-blue-400">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <ul className="text-gray-300 leading-9">
              <li>• Python Programming</li>
              <li>• Machine Learning</li>
              <li>• Data Analysis</li>
              <li>• Pandas & NumPy</li>
              <li>• Matplotlib</li>
            </ul>

            <ul className="text-gray-300 leading-9">
              <li>• Git & GitHub</li>
              <li>• VS Code</li>
              <li>• Jupyter Notebook</li>
              <li>• Next.js & React</li>
              <li>• HTML, CSS & JavaScript</li>
            </ul>

          </div>

        </div>

      </motion.main>
    </>
  );
}