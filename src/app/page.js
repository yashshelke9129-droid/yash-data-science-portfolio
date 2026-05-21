"use client";

import Navbar from "../components/Navbar";

import { motion } from "framer-motion";

export default function Home() {

  return (

    <>

      <Navbar />

      <main className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-black via-blue-950 to-black text-white overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass glow rounded-3xl p-10 md:p-16 text-center max-w-5xl"
        >

          {/* Profile Image */}

          <motion.img
            src="/profile.jpeg"
            alt="Yash Shelke"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="w-52 h-52 rounded-full mx-auto border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50 object-cover"
          />

          {/* Name */}

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold mt-8"
          >
            Yash Shelke
          </motion.h1>

          {/* Role */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-cyan-300 text-2xl mt-6 leading-10"
          >
            TYBSc Computer Science Student |
            Technology Enthusiast |
            Future Tech Professional
          </motion.p>

          {/* About Section */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 glass rounded-2xl p-8"
          >

            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              About Me
            </h2>

            <p className="text-gray-300 text-lg leading-9">

              I am currently pursuing TYBSc Computer Science with a strong
              interest in modern technology and innovation. I always try
              to improve my practical knowledge and explore different areas
              of the technology world to enhance my learning experience.

              <br /><br />

              I enjoy working on creative ideas, discovering new concepts,
              and continuously improving my abilities through projects and
              self-learning. I believe consistency, curiosity, and dedication
              are the key factors for growth in the technology field.

              <br /><br />

              My goal is to build a successful career where I can apply my
              knowledge, improve my skills, and gain valuable real-world
              experience while continuously growing as a professional.

              <br /><br />

              Apart from academics, I also focus on improving my communication,
              confidence, creativity, and problem-solving abilities to become
              a future-ready individual capable of adapting to new challenges
              and opportunities.

            </p>

          </motion.div>

        </motion.div>

      </main>

    </>

  );

}