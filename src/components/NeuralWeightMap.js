"use client";

import { useState } from "react";

export default function NeuralWeightMap() {
  const [activeNode, setActiveNode] = useState("Dense_A");
  
  const nodes = {
    Dense_A: { size: "1024x512", func: "LeakyReLU", penalty: "1.2ms" },
    Dropout_B: { size: "512x512", func: "Drop_0.30", penalty: "0.1ms" },
    Softmax_Out: { size: "128x4", func: "Softmax", penalty: "0.4ms" }
  };

  return (
    <div className="premium-glass rounded-xl border border-violet-500/10 p-5 font-mono text-xs bg-[#02020a]/80">
      <div className="text-[10px] text-slate-600 mb-3 uppercase tracking-wider">// STRUCTURAL_WEIGHT_INSPECTOR</div>
      <div className="grid sm:grid-cols-2 gap-4 items-center">
        <div className="bg-black/40 p-2 rounded border border-slate-900 flex justify-center">
          <svg width="160" height="100" viewBox="0 0 160 100" className="overflow-visible">
            <line x1="20" y1="50" x2="80" y2="20" stroke="rgba(6,182,212,0.1)" strokeWidth="1" />
            <line x1="20" y1="50" x2="80" y2="80" stroke="rgba(6,182,212,0.1)" strokeWidth="1" />
            <line x1="80" y1="20" x2="140" y2="50" stroke="rgba(139,92,246,0.1)" strokeWidth="1" />
            <line x1="80" y1="80" x2="140" y2="50" stroke="rgba(139,92,246,0.1)" strokeWidth="1" />
            
            <circle cx="20" cy="50" r="5" className="fill-slate-900 stroke-cyan-500 stroke-1" />
            <circle cx="80" cy="20" r="7" onClick={() => setActiveNode("Dense_A")} className={`cursor-pointer ${activeNode === "Dense_A" ? "fill-cyan-400" : "fill-slate-950 stroke-cyan-500"}`} />
            <circle cx="80" cy="80" r="7" onClick={() => setActiveNode("Dropout_B")} className={`cursor-pointer ${activeNode === "Dropout_B" ? "fill-violet-400" : "fill-slate-950 stroke-violet-500"}`} />
            <circle cx="140" cy="50" r="7" onClick={() => setActiveNode("Softmax_Out")} className={`cursor-pointer ${activeNode === "Softmax_Out" ? "fill-emerald-400" : "fill-slate-950 stroke-emerald-500"}`} />
          </svg>
        </div>
        <div className="bg-black/60 p-3 rounded border border-slate-900 text-[11px] space-y-1 text-slate-400">
          <p className="text-cyan-400 font-bold uppercase">Target: {activeNode}</p>
          <p>Dimensions: <span className="text-slate-200">{nodes[activeNode].size}</span></p>
          <p>Activation: <span className="text-violet-400">{nodes[activeNode].func}</span></p>
          <p>Compute Cost: <span className="text-emerald-400">{nodes[activeNode].penalty}</span></p>
        </div>
      </div>
    </div>
  );
}