"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ENDPOINT", { 
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus("SUCCESS: PAYLOAD TRANSMITTED!");
        form.reset();
      } else {
        setStatus("ERROR: TRANSMISSION FAILED.");
      }
    } catch (error) {
      setStatus("ERROR: NETWORK FAILURE.");
    }
  };

  return (
    <>
      <Navbar />
      <section id="contact" className="w-full py-24 px-6 bg-[#020617] text-slate-300">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-4xl font-black text-white">// Connect Matrix</h2>
            <div className="space-y-4">
              {[
                { label: "Phone", val: "+91 91364 86029" },
                { label: "Email", val: "yashshelke9129@gmail.com" },
                { label: "LinkedIn", val: "yash-shelke-69b397327" },
                { label: "GitHub", val: "yashshelke9129-droid" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
                  <span className="text-[10px] uppercase text-slate-500">{item.label}</span>
                  <p className="text-white font-mono">{item.val}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 bg-slate-900/30 p-8 rounded-3xl border border-slate-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input name="name" placeholder="User Identity" className="w-full bg-slate-950 p-4 rounded-xl border border-slate-700 outline-none focus:border-cyan-500" required />
                <input name="email" type="email" placeholder="Return Mail" className="w-full bg-slate-950 p-4 rounded-xl border border-slate-700 outline-none focus:border-cyan-500" required />
              </div>
              <input name="subject" placeholder="Subject Parameter" className="w-full bg-slate-950 p-4 rounded-xl border border-slate-700 outline-none focus:border-cyan-500" required />
              <textarea name="message" rows="5" placeholder="Payload Specifications..." className="w-full bg-slate-950 p-4 rounded-xl border border-slate-700 outline-none focus:border-cyan-500" required />
              
              <button type="submit" className="w-full py-4 rounded-xl font-bold uppercase bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
                Transmit Secure Payload
              </button>
              {status && <p className="text-center text-cyan-400">{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}