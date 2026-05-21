"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function Certificates() {

  return (

    <>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black text-white px-6 py-20 overflow-hidden relative">

        {/* Animated Background Glow */}

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

        {/* Certificate Card */}

        <div className="max-w-4xl mx-auto relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 40px rgba(34,211,238,0.3)"
            }}
            className="glass glow rounded-3xl p-10 text-center transition-all duration-500"
          >

            {/* Floating Certificate Icon */}

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

            <h2 className="text-4xl font-bold text-cyan-300 mb-6">
              Intro to Data Science
            </h2>

            <p className="text-gray-300 text-lg leading-9 mb-10">

              Successfully completed certification in
              Introduction to Data Science with practical
              understanding of fundamental concepts,
              data analysis, and modern technology learning.

            </p>

            {/* View Certificate Button */}

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

        </div>

      </main>

    </>

  );

}