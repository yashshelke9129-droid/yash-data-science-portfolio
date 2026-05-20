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
        className="min-h-screen px-10 py-32 grid-bg text-white"
      >

        <h1 className="text-6xl font-bold gradient-text mb-14">
          About Me
        </h1>

        <div className="glass rounded-3xl p-10 card-hover glow">

          <h2 className="text-4xl font-bold mb-8">
            Hello, I'm Yash Shelke
          </h2>

          <p className="text-gray-300 leading-10 text-lg">

            I am a passionate and highly motivated Data Science student
            currently pursuing TYBSc Computer Science with strong interest
            in Artificial Intelligence, Machine Learning, Data Analytics,
            and modern software technologies.

            <br /><br />

            My journey into technology started with curiosity about
            intelligent systems and how data can solve real-world problems.

            <br /><br />

            Over time, I developed practical skills in Python programming,
            Machine Learning, predictive analytics,
            data visualization, and project development.

            <br /><br />

            I enjoy building modern projects that combine creativity,
            analytical thinking, and problem-solving abilities.

            <br /><br />

            I continuously improve my technical knowledge
            by exploring AI technologies, coding practices,
            and futuristic innovations.

            <br /><br />

            My technical expertise includes Python,
            Machine Learning, Pandas, NumPy,
            Matplotlib, Scikit-learn, GitHub,
            Next.js, React.js, HTML, CSS,
            and modern development tools.

            <br /><br />

            Apart from coding and development,
            I am passionate about learning emerging technologies,
            exploring AI innovations, and building practical projects.

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