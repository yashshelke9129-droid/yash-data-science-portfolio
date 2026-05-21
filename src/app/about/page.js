"use client";

import Navbar from "../../components/Navbar";

import { motion } from "framer-motion";

export default function About() {

  return (

    <>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black text-white px-6 py-20 flex items-center justify-center overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass glow rounded-3xl p-10 md:p-16 max-w-6xl"
        >

          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-cyan-400 mb-10 text-center"
          >
            About Me
          </motion.h1>

          {/* About Text */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 text-lg leading-10 space-y-8"
          >

            <p>

              Hello! I am Yash Shelke, currently pursuing TYBSc Computer
              Science with a strong passion for technology, innovation,
              and continuous learning. I enjoy exploring modern digital
              trends and understanding how technology is transforming
              industries and creating new opportunities around the world.

            </p>

            <p>

              My academic journey has helped me develop interest in
              various areas of Computer Science where I continuously
              improve my practical knowledge, logical thinking, and
              problem-solving abilities. I enjoy learning through
              experimentation, projects, and real-world exposure that
              helps me gain deeper understanding of different concepts.

            </p>

            <p>

              I always try to stay curious and motivated while learning
              new things. Exploring modern tools, understanding how
              applications are built, and improving my technical skills
              gives me confidence to grow professionally and personally.
              I strongly believe that consistency and dedication are
              important qualities for success in the technology field.

            </p>

            <p>

              Apart from technical learning, I also focus on improving
              my communication, creativity, leadership qualities, and
              confidence. I believe personal growth is equally important
              along with technical growth because it helps in becoming
              a complete and future-ready professional.

            </p>

            <p>

              My goal is to build a successful career where I can apply
              my knowledge, continue learning advanced technologies,
              work on innovative ideas, and gain valuable industry
              experience. I am always eager to take on new challenges,
              improve my abilities, and grow step-by-step in my journey
              towards becoming a skilled technology professional.

            </p>

          </motion.div>

          {/* Skills Section */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-14"
          >

            <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
              Skills & Interests
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {/* Technical Skills */}

              <div className="glass rounded-2xl p-8 glow">

                <h3 className="text-2xl font-bold text-cyan-300 mb-6">
                  Technical Skills
                </h3>

                <ul className="text-gray-300 text-lg space-y-4">

                  <li>• Programming Fundamentals</li>

                  <li>• Problem Solving</li>

                  <li>• Basic Web Development</li>

                  <li>• HTML, CSS & JavaScript</li>

                  <li>• React.js & Next.js</li>

                  <li>• Git & GitHub</li>

                  <li>• Technology Research</li>

                  <li>• Project Development</li>

                  <li>• Computer Fundamentals</li>

                  <li>• Learning Modern Technologies</li>

                </ul>

              </div>

              {/* Professional Skills */}

              <div className="glass rounded-2xl p-8 glow">

                <h3 className="text-2xl font-bold text-cyan-300 mb-6">
                  Professional Skills
                </h3>

                <ul className="text-gray-300 text-lg space-y-4">

                  <li>• Communication Skills</li>

                  <li>• Leadership Qualities</li>

                  <li>• Creative Thinking</li>

                  <li>• Team Collaboration</li>

                  <li>• Time Management</li>

                  <li>• Continuous Learning</li>

                  <li>• Adaptability</li>

                  <li>• Self Motivation</li>

                  <li>• Presentation Skills</li>

                  <li>• Professional Growth Mindset</li>

                </ul>

              </div>

            </div>

          </motion.div>

        </motion.div>

      </main>

    </>

  );

}