"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      <Navbar />
      <div className="mesh-bg"></div>

      {/* HERO SECTION */}
      <main className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16 matrix-grid relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start relative z-10">

          {/* LEFT SIDE */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Aspiring Data Scientist
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-black leading-tight text-white"
            >
              Transforming{" "}
              <span className="text-cyan-400">Raw Data</span> Into{" "}
              <span className="text-blue-500">
                Actionable Intelligence
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              Hi, I am{" "}
              <span className="text-white font-semibold">
                Yash Shelke
              </span>
              , a TYBSc Computer Science student passionate about
              Data Science, Machine Learning, and Artificial Intelligence.
              I build intelligent systems using Python, SQL, Pandas,
              Scikit-Learn, and modern analytics techniques to solve
              real-world problems.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                href="/projects"
                className="premium-btn px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-[#020208] font-bold rounded-xl"
              >
                Explore Projects
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 bg-slate-900 border border-slate-800 text-slate-200 rounded-xl hover:bg-slate-800 transition-all"
              >
                Contact Me
              </Link>
            </motion.div>

            {/* STATS */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
            >
              <div className="premium-glass glow-card rounded-2xl p-5 text-center">
                <h3 className="text-3xl font-black text-cyan-400">4+</h3>
                <p className="text-slate-400 text-sm">Projects</p>
              </div>

              <div className="premium-glass glow-card rounded-2xl p-5 text-center">
                <h3 className="text-3xl font-black text-cyan-400">3+</h3>
                <p className="text-slate-400 text-sm">Certificates</p>
              </div>

              <div className="premium-glass glow-card rounded-2xl p-5 text-center">
                <h3 className="text-3xl font-black text-cyan-400">1</h3>
                <p className="text-slate-400 text-sm">Internship</p>
              </div>

              <div className="premium-glass glow-card rounded-2xl p-5 text-center">
                <h3 className="text-3xl font-black text-cyan-400">TY</h3>
                <p className="text-slate-400 text-sm">B.Sc CS</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 space-y-8">

            {/* PROFILE IMAGE */}
            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="profile-glow"
              >
                <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-cyan-400">
                  <img
                    src="/profile.jpeg"
                    alt="Yash Shelke"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* CODE CARD */}
            <div className="premium-glass glow-card rounded-2xl p-6 font-mono text-xs text-slate-400">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <p>
                <span className="text-violet-400">import</span>{" "}
                <span className="text-white">pandas</span>
              </p>

              <p className="text-slate-600">
                # Initializing profile...
              </p>

              <p className="text-cyan-400">
                &gt;&gt;&gt; Yash.status = "Ready"
              </p>

              <p className="text-cyan-400">
                &gt;&gt;&gt; Model_Accuracy = 94.1%
              </p>
            </div>

            {/* EDUCATION */}
            <div className="premium-glass glow-card rounded-2xl p-6">
              <h3 className="text-white font-bold mb-3">
                Academic Credentials
              </h3>

              <p className="text-white font-semibold">
                B.Sc. Computer Science
              </p>

              <p className="text-slate-400 text-sm">
                K. V. Pendharkar College, Dombivli
              </p>

              <div className="flex justify-between mt-4 pt-4 border-t border-slate-800">
                <span className="text-cyan-400 text-sm">
                  Expected: May 2027
                </span>

                <span className="bg-cyan-500/10 px-2 py-1 rounded text-cyan-400 text-xs">
                  8.5+ CGPA
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FEATURED PROJECT */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="premium-glass glow-card rounded-3xl p-10">

          <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
            Featured Project
          </p>

          <h2 className="text-4xl font-black text-white mb-4">
            Car Price Prediction
          </h2>

          <p className="text-slate-400 max-w-3xl mb-6">
            Developed a machine learning model capable of predicting
            vehicle prices using real-world marketplace datasets.
            Leveraged feature engineering, data preprocessing,
            regression algorithms, and model optimization techniques
            to improve predictive performance.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
              Python
            </span>

            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
              Pandas
            </span>

            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
              Scikit-Learn
            </span>

            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
              Machine Learning
            </span>
          </div>

          <Link
            href="/projects"
            className="premium-btn inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-[#020208] font-bold rounded-xl"
          >
            View Project
          </Link>
        </div>
      </section>
    </>
  );
}