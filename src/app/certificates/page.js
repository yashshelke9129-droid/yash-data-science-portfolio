"use client";

import Navbar from "../../components/Navbar";

import { motion } from "framer-motion";

export default function Certificates() {

  return (

    <>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-black text-white px-6 py-20">

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold text-center text-cyan-400 mb-16"
        >
          My Certificates
        </motion.h1>

        {/* Certificate Card */}

        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="glass glow rounded-3xl p-10 text-center"
          >

            <h2 className="text-4xl font-bold text-cyan-300 mb-6">
              Intro to Data Science
            </h2>

            <p className="text-gray-300 text-lg mb-10">

              Successfully completed certification in
              Introduction to Data Science.

            </p>

            {/* View Certificate Button */}

            <a
              href="/certificates/intro-to-ds.pdf"
              target="_blank"
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-2xl transition text-xl"
            >
              View Certificate
            </a>

          </motion.div>

        </div>

      </main>

    </>

  );

}