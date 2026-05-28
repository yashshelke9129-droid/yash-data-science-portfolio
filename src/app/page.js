"use client";

import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <Navbar />
      <div className="mesh-bg"></div>
      
      <main className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 matrix-grid relative overflow-hidden">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start relative z-10">
          
          {/* Left Column: Copy */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 font-mono text-xs uppercase tracking-widest cursor-default">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Aspiring Data Scientist
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white">
              Decoding <span className="text-cyan-400">Complex Data Patterns</span> to Architect <span className="text-blue-500">Intelligent Predictive Systems</span>.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
              Hi, I am <strong className="text-white font-semibold">Yash Shelke</strong>. A computer science specialist building optimized data processing layouts, fine-tuning classification loops, and structuring meaningful predictive insights.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/projects" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-[#020208] font-bold rounded-xl transition-all shadow-lg hover:shadow-cyan-500/30 text-sm tracking-wider uppercase">
                Explore Projects
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-bold rounded-xl transition-all text-sm tracking-wider uppercase">
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile, Code & Education */}
          <div className="lg:col-span-5 w-full space-y-8">
            
            {/* Floating Profile Image */}
            <div className="flex justify-center">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  whileHover={{ scale: 1.08, boxShadow: "0px 0px 40px rgba(34,211,238,0.8)" }}
                  className="w-48 h-48 rounded-full overflow-hidden border-4 border-slate-800 cursor-pointer transition-all duration-300"
                >
                  <img src="/profile.jpeg" alt="Yash Shelke" className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>
            </div>

            {/* Code Block */}
            <motion.div className="premium-glass rounded-2xl border border-slate-800 p-6 font-mono text-xs text-slate-400 shadow-2xl">
              <div className="flex items-center gap-2 border-b border-slate-900 pb-4 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
                <span className="text-slate-500 text-[11px] ml-2">pipeline_execution.py</span>
              </div>
              <div className="space-y-2">
                <p><span className="text-violet-400">import</span> <span className="text-white">pandas</span></p>
                <p className="text-slate-600"># Initializing profile...</p>
                <p className="text-cyan-400"><span>&gt;&gt;&gt; </span>Yash.status = "Ready"</p>
                <p className="text-cyan-400"><span>&gt;&gt;&gt; </span>Model_Accuracy = 0.941</p>
              </div>
            </motion.div>

            {/* Academic Credentials */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-slate-900/30 border border-slate-800 p-6 rounded-2xl"
            >
              <h3 className="text-white font-bold mb-2">// Academic Credentials</h3>
              <p className="text-white font-semibold">B.Sc. in Computer Science</p>
              <p className="text-slate-400 text-sm">K. V. Pendharkar College, Dombivli</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-slate-800">
                <span className="text-cyan-400 font-mono text-xs">Expected: May 2027</span>
                <span className="bg-cyan-500/10 text-cyan-400 px-2 py-1 rounded text-[10px] font-bold">8.5+ CGPA</span>
              </div>
              <p className="text-slate-500 text-xs mt-3 leading-relaxed">
               Currently advancing through the Third Year (TY) B.Sc. CS curriculum, specializing in Data Science and Advanced Analytics. My core focus resides at the intersection of Predictive Modeling and Statistical Learning—specifically architecting scalable data pipelines, optimizing complex SQL/NoSQL structures, and developing robust Python-based algorithmic models to extract high-fidelity, actionable insights from raw, unstructured data.
              </p>
            </motion.div>
          </div>

        </div>
      </main>
    </>
  );
}