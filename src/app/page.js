"use client";

import Navbar from "../components/Navbar";
import ParticlesBackground from "../components/ParticlesBackground";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

export default function Home() {

  return (

    <>

      <Navbar />

      <ParticlesBackground />

      <main className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-black via-blue-950 to-black text-white overflow-hidden relative">

        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl w-full relative z-10">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="text-cyan-400 text-xl mb-5 tracking-[5px] uppercase">
              Data Science Portfolio
            </p>

            <h1 className="text-7xl md:text-8xl font-black leading-tight mb-8">

              <span className="gradient-text">
                Yash
              </span>

              <br />

              Shelke

            </h1>

            <TypeAnimation
              sequence={[

                "Aspiring Data Scientist",

                2000,

                "Machine Learning Enthusiast",

                2000,

                "Modern Web Developer",

                2000

              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="text-cyan-300 text-3xl mb-10"
            />

            <p className="text-gray-300 text-xl leading-10 max-w-2xl">

              Passionate about Machine Learning,
              Data Analytics, Artificial Intelligence,
              and building futuristic digital experiences.

            </p>

            {/* Skills */}

            <div className="flex flex-wrap gap-4 mt-10">

              <span className="glass px-5 py-3 rounded-full text-cyan-300">
                Python
              </span>

              <span className="glass px-5 py-3 rounded-full text-cyan-300">
                Machine Learning
              </span>

              <span className="glass px-5 py-3 rounded-full text-cyan-300">
                Data Science
              </span>

              <span className="glass px-5 py-3 rounded-full text-cyan-300">
                React
              </span>

              <span className="glass px-5 py-3 rounded-full text-cyan-300">
                Next.js
              </span>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-14">

              <div className="glass rounded-3xl p-6 text-center card-hover">

                <h2 className="text-4xl font-bold text-cyan-400">
                  4+
                </h2>

                <p className="text-gray-400 mt-2">
                  Projects
                </p>

              </div>

              <div className="glass rounded-3xl p-6 text-center card-hover">

                <h2 className="text-4xl font-bold text-cyan-400">
                  2+
                </h2>

                <p className="text-gray-400 mt-2">
                  Certificates
                </p>

              </div>

              <div className="glass rounded-3xl p-6 text-center card-hover">

                <h2 className="text-4xl font-bold text-cyan-400">
                  1+
                </h2>

                <p className="text-gray-400 mt-2">
                  Internship
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            <div className="absolute w-[450px] h-[450px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

            <motion.img
              src="/profile.jpeg"
              alt="Yash Shelke"
              animate={{
                y: [0, -20, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
              className="relative z-10 w-[380px] h-[380px] object-cover rounded-[40px] border border-cyan-400/30 shadow-[0_0_60px_rgba(34,211,238,0.3)]"
            />

          </motion.div>

        </div>

      </main>

    </>

  );

}