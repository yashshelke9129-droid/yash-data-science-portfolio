"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

const dataProjects = [
  {
    title: "Student Result Analysis",
    type: "Exploratory Data Analysis (EDA)",
    description: "Conducted exhaustive statistical slicing on student batches to decipher underlying parameters determining academic success variables. Built multi-tier regression mappings to mitigate retention friction.",
    metrics: [{ label: "Data Slices", val: "15k+ Records" }, { label: "Variables", val: "22 Features" }],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    notebook: "https://github.com/yashshelke9129-droid/student-result-analysis/blob/main/Result.ipynb",
    repo: "https://github.com/yashshelke9129-droid/student-result-analysis"
  },
  {
    title: "Iris Flower Classification",
    type: "Supervised Learning Pipeline",
    description: "Evaluated high-accuracy hyperparameter loops to catalog botanical taxonomy. Handled features isolation and cross-validation matrix testing across multiclass targets.",
    metrics: [{ label: "Model Accuracy", val: "98.6%" }, { label: "F1 Score", val: "0.98" }],
    tech: ["Scikit-Learn", "Python", "Feature Engineering", "K-Fold CV"],
    notebook: "https://github.com/yashshelke9129-droid/CodeAlpha_Iris_Flower_Classification/blob/main/CodeAlpha_Iris_Flower_Classification.ipynb",
    repo: "https://github.com/yashshelke9129-droid/CodeAlpha_Iris_Flower_Classification"
  },
  {
    title: "Car Price Prediction",
    type: "Predictive Regression Model",
    description: "Implemented a clean machine learning regression pipeline designed to accurately predict automobile market values by cleaning unstructured, high-cardinality marketplace data.",
    metrics: [{ label: "R² Variance Score", val: "0.91" }, { label: "MAE", val: "Low Deviation" }],
    tech: ["Random Forest", "Python", "Data Wrangling", "Pandas"],
    notebook: "https://github.com/yashshelke9129-droid/CodeAlpha_Car_Price_Prediction/blob/main/CodeAlpha_Car_Price_Prediction.ipynb",
    repo: "https://github.com/yashshelke9129-droid/CodeAlpha_Car_Price_Prediction"
  },
  {
    title: "Sales Forecasting Model",
    type: "Time-Series Predictive Analytics",
    description: "Modeled corporate retail parameters to accurately calculate demand curves and future revenue trajectories. Managed structural components like moving averages and seasonal shifts.",
    metrics: [{ label: "Forecast Interval", val: "Quarterly" }, { label: "Confidence", val: "94%" }],
    tech: ["Machine Learning", "Linear Models", "NumPy", "Matplotlib"],
    notebook: "https://github.com/yashshelke9129-droid/CodeAlpha_Sales_Prediction/blob/main/CodeAlpha_Sales_Prediction.ipynb",
    repo: "https://github.com/yashshelke9129-droid/CodeAlpha_Sales_Prediction"
  }
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="mesh-bg"></div>
      
      <main className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto matrix-grid">
        <div className="mb-16 max-w-2xl">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-3"
          >
            Predictive Models & Insights
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black tracking-tight"
          >
            Data Science Production
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {dataProjects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="premium-glass glow-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <span className="text-xs font-mono px-3 py-1 bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 rounded-full">
                    {proj.type}
                  </span>
                  
                  {/* Dynamic Metric Box */}
                  <div className="flex gap-4">
                    {proj.metrics.map((m) => (
                      <div key={m.label} className="text-right">
                        <p className="text-[10px] uppercase tracking-wider text-slate-500">{m.label}</p>
                        <p className="text-sm font-bold font-mono text-emerald-400">{m.val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">{proj.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{proj.description}</p>
              </div>

              <div>
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-[11px] font-medium bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md border border-slate-800">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Performance Action Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={proj.notebook}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-cyan-500 hover:bg-cyan-400 text-[#020208] text-xs font-bold py-3 rounded-xl transition-all tracking-wider uppercase"
                  >
                    Analyze Notebook
                  </a>
                  <a
                    href={proj.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-transparent hover:bg-white/5 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white text-xs font-bold py-3 rounded-xl transition-all tracking-wider uppercase"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}