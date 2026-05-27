"use client";

import { useState, useEffect, useRef } from "react";

export default function LivePipelineConsole() {
  const [logs, setLogs] = useState([]);
  const consoleRef = useRef(null);

  useEffect(() => {
    const operations = [
      "FETCH_RAW_METRIC_STREAM", "ISOLATING_TARGET_VECTOR", "CALCULATING_GRADIENT_DESCENT",
      "UPDATING_WEIGHT_COEFFICIENTS", "CONVERGENCE_CRITERIA_MET", "EVALUATING_VALIDATION_LOSS",
      "OPTIMIZING_HYPERPARAMETERS", "FLUSHING_CACHE_REGISTERS", "STREAMING_ANALYTICS_ARRAY"
    ];

    const interval = setInterval(() => {
      const randomOp = operations[Math.floor(Math.random() * operations.length)];
      const timestamp = new Date().toLocaleTimeString();
      const val = (Math.random() * 0.05).toFixed(6);
      const logEntry = `[${timestamp}] ${randomOp} // loss: ${val}`;
      
      setLogs((prev) => [...prev.slice(-4), logEntry]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="premium-glass rounded-xl p-4 border border-slate-900 font-mono text-[11px] bg-black/60 shadow-2xl">
      <div className="flex justify-between items-center text-slate-500 border-b border-slate-950 pb-2 mb-3 select-none">
        <span className="tracking-widest uppercase text-[9px] text-fuchsia-400">// PIPELINE_EXECUTION_STREAM</span>
        <span className="text-[9px]">LIVE_FEED</span>
      </div>
      <div ref={consoleRef} className="h-32 overflow-y-auto space-y-1.5 scrollbar-thin text-slate-400 leading-relaxed">
        {logs.length === 0 ? (
          <p className="text-slate-600 text-center pt-8 animate-pulse">// INITIALIZING CORE PIPELINE TELEMETRY...</p>
        ) : (
          logs.map((log, index) => (
            <p key={index} className={index === logs.length - 1 ? "text-cyan-400 font-medium" : ""}>
              {log}
            </p>
          ))
        )}
      </div>
    </div>
  );
}