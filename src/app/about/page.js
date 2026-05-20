"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen px-10 py-32 grid-bg"
      >

        <h1 className="text-6xl font-bold gradient-text mb-14">
          About Me
        </h1>

        <div className="glass rounded-3xl p-10 mb-10 card-hover">

          <h2 className="text-4xl font-bold mb-6">
            Hello, I'm Yash Shelke
          </h2>

          <p className="text-gray-300 leading-10 text-lg">

            I am a passionate and highly motivated Data Science student
            currently pursuing TYBSc Computer Science.
            I have a strong interest in Machine Learning,
            Artificial Intelligence, Data Analytics,
            and modern software technologies.

            <br /><br />

            My journey into technology started with curiosity about
            how intelligent systems work and how data can be used
            to solve real-world problems.
            Over time, I developed strong skills in Python programming,
            data visualization, machine learning algorithms,
            and project development.

            <br /><br />

            I enjoy building practical projects that combine creativity,
            problem-solving, and analytical thinking.
            I continuously improve my skills by exploring new technologies,
            practicing coding, and working on real-world datasets.

            <br /><br />

            My technical expertise includes Python,
            Machine Learning, Pandas, NumPy,
            Matplotlib, Scikit-learn, GitHub,
            Next.js, and modern development tools.

            <br /><br />

            Apart from coding, I am passionate about learning
            futuristic technologies, AI innovations,
            and continuously growing as a developer and Data Scientist.

            <br /><br />

            My goal is to become a successful Data Scientist
            and contribute to innovative AI-driven technologies
            that create meaningful impact in the industry.

          </p>

        </div>

      </motion.main>
    </>
  );
}