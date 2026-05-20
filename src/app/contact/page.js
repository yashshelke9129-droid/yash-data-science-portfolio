"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-screen px-6 md:px-20 py-32 grid-bg text-white"
      >

        <motion.h1
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold gradient-text mb-16"
        >
          Contact Me
        </motion.h1>

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="glass glow rounded-3xl p-10 max-w-4xl card-hover"
        >

          <div className="space-y-10 text-xl">

            <motion.div
              whileHover={{ scale: 1.03 }}
            >
              <h2 className="text-cyan-400 font-bold mb-3">
                Email
              </h2>

              <p className="text-gray-300">
                yashshelke9129@gmail.com
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
            >
              <h2 className="text-cyan-400 font-bold mb-3">
                Phone
              </h2>

              <p className="text-gray-300">
                +91 9136486029
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
            >
              <h2 className="text-cyan-400 font-bold mb-3">
                LinkedIn
              </h2>

              <a
                href="https://www.linkedin.com/in/yash-shelke-69b397327"
                target="_blank"
                className="text-blue-400 hover:text-cyan-300 transition"
              >
                View LinkedIn Profile
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
            >
              <h2 className="text-cyan-400 font-bold mb-3">
                GitHub
              </h2>

              <a
                href="https://github.com/yashshelke9129-droid"
                target="_blank"
                className="text-blue-400 hover:text-cyan-300 transition"
              >
                View GitHub Profile
              </a>
            </motion.div>

          </div>

        </motion.div>

      </motion.main>
    </>
  );
}