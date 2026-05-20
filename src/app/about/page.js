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
        className="min-h-screen px-6 md:px-20 py-32 grid-bg text-white"
      >

        {/* Heading */}

        <motion.h1
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold gradient-text mb-16"
        >
          About Me
        </motion.h1>

        {/* Main Card */}

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="glass glow rounded-3xl p-10 md:p-14 card-hover"
        >

          <h2 className="text-4xl font-bold mb-8 text-cyan-400">
            Hello, I'm Yash Shelke
          </h2>

          <p className="text-gray-300 leading-10 text-lg">

            I am a passionate and highly motivated Data Science student currently pursuing
            Third Year Bachelor of Science in Computer Science (TYBSc CS). I have a strong interest in
            Artificial Intelligence, Machine Learning, Data Analytics, and modern software technologies.
            My goal is to become a skilled Data Scientist capable of building innovative AI-driven solutions
            that can solve real-world problems efficiently.

            <br /><br />

            My journey into technology started with curiosity about how intelligent systems work and how
            data can be transformed into meaningful insights. Over time, I developed strong interest in
            Python programming, data visualization, machine learning algorithms, predictive analytics,
            and software development. I continuously work on improving my technical and analytical skills
            through practical implementation and real-world projects.

            <br /><br />

            I enjoy working on projects related to Data Science and Machine Learning because they allow me
            to combine logic, creativity, and problem-solving abilities. I have successfully developed
            multiple projects such as Student Result Analysis, Iris Flower Classification,
            Car Price Prediction, and Sales Prediction using Python, Pandas, NumPy, Matplotlib,
            and Scikit-learn.

            <br /><br />

            Through these projects, I gained practical experience in data preprocessing,
            exploratory data analysis, data visualization, model training,
            prediction systems, and performance evaluation. I also learned how to work with
            real-world datasets and transform raw data into valuable insights.

            <br /><br />

            Apart from Data Science, I also have knowledge of modern web technologies such as
            HTML, CSS, JavaScript, React.js, Next.js, and GitHub. I enjoy creating modern,
            responsive, and professional websites that combine functionality with attractive design.

            <br /><br />

            I strongly believe in continuous learning and self-improvement.
            I regularly explore new technologies, AI tools, and industry trends to expand my knowledge
            and stay updated with the rapidly evolving technology world.

          </p>

          {/* Skills Section */}

          <div className="mt-14">

            <h2 className="text-4xl font-bold text-cyan-400 mb-8">
              Technical Skills
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="glass rounded-2xl p-6 card-hover glow">

                <ul className="space-y-4 text-lg text-gray-300">

                  <li>• Python Programming</li>

                  <li>• Machine Learning</li>

                  <li>• Data Analysis</li>

                  <li>• Pandas & NumPy</li>

                  <li>• Data Visualization</li>

                </ul>

              </div>

              <div className="glass rounded-2xl p-6 card-hover glow">

                <ul className="space-y-4 text-lg text-gray-300">

                  <li>• Scikit-learn</li>

                  <li>• HTML, CSS & JavaScript</li>

                  <li>• React.js & Next.js</li>

                  <li>• Git & GitHub</li>

                  <li>• Problem Solving</li>

                </ul>

              </div>

            </div>

          </div>

          {/* Career Goal */}

          <div className="mt-14 glass rounded-2xl p-8 card-hover glow">

            <h2 className="text-4xl font-bold text-cyan-400 mb-6">
              Career Objective
            </h2>

            <p className="text-gray-300 text-lg leading-10">

              My long-term objective is to establish myself as a successful
              Data Scientist and AI Engineer who contributes to impactful and futuristic technologies.
              I am highly passionate about creating intelligent systems that can improve efficiency,
              automate processes, and provide meaningful solutions to complex problems.

              <br /><br />

              I am always eager to learn, grow, and take on new challenges that help me expand my
              technical expertise and professional experience in the field of Data Science and Technology.

            </p>

          </div>

        </motion.div>

      </motion.main>
    </>
  );
}