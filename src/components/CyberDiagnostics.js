"use client";

import { useState, useEffect } from "react";

export default function CyberDiagnostics() {
  const [metrics, setMetrics] = useState({ cpu: 42, memory: 64, ping: 12 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        cpu: Math.floor(Math.random() * (75 - 35 + 1)) + 35,
        memory: Math.floor(Math.random() * (68 - 60 + 1)) + 60,
        ping: Math.floor(Math.random() * (24 - 8 + 1)) + 8,
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/40 border-y border-slate-900 px-6 py-2.5 font-mono text-[10px] text-slate-500 tracking-wider">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-x-8 gap-y-2 items-center justify-between md:justify-start">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>SYS_NODE: <span className="text-slate-300">ONLINE</span></span>
        </div>
        <div>CPU_LOAD: <span className="text-cyan-400 font-bold">{metrics.cpu}%</span></div>
        <div>MEM_ALLOC: <span className="text-fuchsia-400 font-bold">{metrics.memory}%</span></div>
        <div>LATENCY: <span className="text-violet-400 font-bold">{metrics.ping}ms</span></div>
        <div className="md:ml-auto text-slate-600">INDEX_RECONCILIATION: ACTIVE</div>
      </div>
    </div>
  );
}