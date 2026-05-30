"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const credentialRegistry = [
{
title: "Intro to Data Science",
issuer: "Foundational Analytics Matrix",
scope: "Core exploration tracking, programmatic extraction syntax, feature matrices logic, and foundational distribution distributions analytics.",
icon: "📊",
pdfPath: "/certificates/intro-to-ds.pdf",
},
{
title: "Data Science Internship",
issuer: "CodeAlpha Virtual Deployment Program",
scope: "Engineered production predictive layers, completed exploratory notebook documentation, and managed end-to-end data pipelines.",
icon: "🔬",
pdfPath: "/certificates/internship.pdf",
},
{
title: "IBM Data Science 101",
issuer: "IBM Developer Skills Network & Cognitive Class",
scope:
"Successfully completed IBM Data Science 101 (DS0101EN), gaining foundational knowledge in data science methodologies, data analysis, machine learning concepts, data visualization, and real-world applications of data-driven decision making.",
icon: "🏆",
pdfPath: "/certificates/IBM-DS101.pdf",
},
];

export default function Certificates() {
return (
<> <Navbar /> <div className="mesh-bg"></div>

```
  <main className="min-h-screen pt-32 pb-20 px-6 max-w-6xl mx-auto matrix-grid text-white">
    <div className="mb-16 text-center md:text-left">
      <p className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-3">
        Verified Competence
      </p>

      <h1 className="text-4xl md:text-5xl font-black tracking-tight">
        Industry & Research Credentials
      </h1>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {credentialRegistry.map((cert, idx) => (
        <motion.div
          key={cert.title}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.5 }}
          className="premium-glass rounded-2xl p-8 flex flex-col justify-between glow-card relative overflow-hidden"
        >
          <div>
            <div className="text-4xl mb-6 bg-slate-900 w-14 h-14 flex items-center justify-center rounded-xl border border-slate-800">
              {cert.icon}
            </div>

            <h2 className="text-2xl font-bold text-white mb-1 tracking-tight">
              {cert.title}
            </h2>

            <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
              {cert.issuer}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              {cert.scope}
            </p>
          </div>

          <a
            href={cert.pdfPath}
            target="_blank"
            rel="noreferrer"
            className="w-full text-center block bg-slate-900 hover:bg-white text-white hover:text-[#020208] text-xs font-mono font-bold py-3.5 rounded-xl transition-all border border-slate-800 hover:border-white tracking-widest uppercase"
          >
            Verify Secure Credential
          </a>
        </motion.div>
      ))}
    </div>
  </main>
</>
);
}
