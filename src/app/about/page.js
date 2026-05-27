"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-24 px-6 bg-[#020617] text-slate-300">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Header - The Identity */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="text-center">
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4">// System Identification</p>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6">YASH SHELKE</h1>
          <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mx-auto">
            Innovator | Data Science & Analytics Enthusiast | Computer Science Scholar
          </p>
        </motion.div>

        {/* The Narrative - Deep Dive */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
            <h2 className="text-3xl font-bold text-white">// Core Analytical Thesis</h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p>
                Currently pursuing my <strong>TYBSc in Computer Science</strong>, I have dedicated my academic journey to mastering the complexities of technology and the art of innovation. My fascination lies in the raw power of data and how, when meticulously analyzed, it serves as the foundation for global industrial transformation.
              </p>
              <p>
                I don't just write code; I construct logic. My approach to Data Science is iterative—ingesting raw datasets, applying rigorous statistical frameworks, and extracting insights that drive meaningful business decisions. My goal is to bridge the chasm between academic research and industrial-grade applications.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="bg-slate-900/30 p-8 rounded-3xl border border-slate-800">
            <h2 className="text-3xl font-bold text-white mb-8">// Professional DNA</h2>
            <div className="space-y-6">
              {[
                { title: "Continuous Learning", desc: "Always exploring emerging trends in Machine Learning and Web architecture." },
                { title: "Practical Exposure", desc: "Focus on real-world project deployment over passive theoretical study." },
                { title: "Growth Mindset", desc: "Embracing challenges as opportunities to iterate, fail, and evolve stronger." }
              ].map((point, i) => (
                <div key={i} className="border-l-2 border-cyan-500 pl-4">
                  <h4 className="text-white font-bold">{point.title}</h4>
                  <p className="text-sm text-slate-400">{point.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skill Matrix */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="grid md:grid-cols-3 gap-8">
          {[
            { cat: "TECHNICAL CORE", color: "text-cyan-400", list: ["Python", "SQL", "Next.js", "React.js", "Data Wrangling", "Statistical Analysis"] },
            { cat: "ANALYTICS & ML", color: "text-blue-400", list: ["EDA", "Scikit-Learn", "Model Training", "Data Visualization", "Predictive Modeling"] },
            { cat: "PROFESSIONAL", color: "text-purple-400", list: ["Leadership", "Team Collaboration", "Agile Workflow", "Presentation Skills", "Strategic Planning"] }
          ].map((block, i) => (
            <div key={i} className="p-8 bg-slate-950 border border-slate-800 rounded-3xl">
              <h3 className={`${block.color} font-mono font-bold text-xs tracking-widest mb-6`}>// {block.cat}</h3>
              <ul className="space-y-4">
                {block.list.map(item => <li key={item} className="text-slate-300 flex items-center gap-3"> <span className="text-slate-600">»</span> {item}</li>)}
              </ul>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}