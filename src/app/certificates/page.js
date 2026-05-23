"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function Certificates() {

  return (

    <>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black text-white px-6 py-20 overflow-hidden relative">

        {/* Background Glow */}

        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse"></div>

        <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-purple-500/20 blur-[120px] rounded-full animate-pulse"></div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-center gradient-text mb-16 relative z-10"
        >
          My Certificates
        </motion.h1>

        {/* Certificates Grid */}

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto relative z-10">

          {/* Certificate 1 */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 40px rgba(34,211,238,0.3)"
            }}
            className="glass glow rounded-3xl p-10 text-center transition-all duration-500"
          >

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
              className="text-7xl mb-8"
            >
              🏆
            </motion.div>

            <h2 className="text-3xl font-bold text-cyan-300 mb-6">
              Intro to Data Science
            </h2>

            <p className="text-gray-300 text-lg leading-8 mb-10">

              Successfully completed certification in
              Introduction to Data Science with practical
              understanding of data analysis and modern
              technology concepts.

            </p>

            <motion.a
              href="/certificates/intro-to-ds.pdf"
              target="_blank"
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 30px rgba(34,211,238,0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-2xl transition text-xl btn-hover"
            >
              View Certificate
            </motion.a>

          </motion.div>

          {/* Certificate 2 */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 0px 40px rgba(168,85,247,0.3)"
            }}
            className="glass glow rounded-3xl p-10 text-center transition-all duration-500"
          >

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
              className="text-7xl mb-8"
            >
              💼
            </motion.div>

            <h2 className="text-3xl font-bold text-purple-300 mb-6">
              Data Science Internship
            </h2>

            <p className="text-gray-300 text-lg leading-8 mb-10">

              Successfully completed CodeAlpha Virtual
              Internship Program in Data Science with
              dedication, practical learning, and project
              experience.

            </p>

            <motion.a
              href="/certificates/internship.pdf"
              target="_blank"
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 30px rgba(168,85,247,0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-purple-500 hover:bg-purple-400 text-white font-bold px-8 py-4 rounded-2xl transition text-xl btn-hover"
            >
              View Certificate
            </motion.a>

          </motion.div>

        </div>

      </main>

    </>

  );

}