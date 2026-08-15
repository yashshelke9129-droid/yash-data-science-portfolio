"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/xykapjkk",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus(
          "Message sent successfully! I'll get back to you soon."
        );
        form.reset();
      } else {
        const data = await response.json().catch(() => null);

        if (data?.errors) {
          setStatus(
            data.errors.map((error) => error.message).join(", ")
          );
        } else {
          setStatus(
            "Unable to send message. Please try again."
          );
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section
        id="contact"
        className="w-full py-24 px-6 bg-[#020617] text-slate-300"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-cyan-400 font-mono text-sm mb-3">
                CONTACT_PROTOCOL
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-white">
                // Connect Matrix
              </h2>

              <p className="mt-4 text-slate-400 leading-relaxed">
                Have a project, internship opportunity, collaboration,
                or just want to connect? Send me a message and I&apos;ll
                get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">

              {/* Phone */}
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-cyan-500/50 transition-colors">
                <span className="text-[10px] uppercase tracking-widest text-slate-500">
                  Phone
                </span>

                <a
                  href="tel:+919136486029"
                  className="block mt-1 text-white font-mono hover:text-cyan-400 transition-colors"
                >
                  +91 91364 86029
                </a>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-cyan-500/50 transition-colors">
                <span className="text-[10px] uppercase tracking-widest text-slate-500">
                  Email
                </span>

                <a
                  href="mailto:yashshelke9129@gmail.com"
                  className="block mt-1 text-white font-mono break-all hover:text-cyan-400 transition-colors"
                >
                  yashshelke9129@gmail.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-cyan-500/50 transition-colors">
                <span className="text-[10px] uppercase tracking-widest text-slate-500">
                  LinkedIn
                </span>

                <a
                  href="https://www.linkedin.com/in/yashshelke8939/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-1 text-white font-mono hover:text-cyan-400 transition-colors"
                >
                  linkedin.com/in/yashshelke8939
                </a>
              </div>

              {/* GitHub */}
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-cyan-500/50 transition-colors">
                <span className="text-[10px] uppercase tracking-widest text-slate-500">
                  GitHub
                </span>

                <a
                  href="https://github.com/yashshelke9129-droid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-1 text-white font-mono hover:text-cyan-400 transition-colors"
                >
                  github.com/yashshelke9129-droid
                </a>
              </div>

              {/* Portfolio */}
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-cyan-500/50 transition-colors">
                <span className="text-[10px] uppercase tracking-widest text-slate-500">
                  Portfolio
                </span>

                <a
                  href="https://yashshelke.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-1 text-white font-mono hover:text-cyan-400 transition-colors"
                >
                  yashshelke.vercel.app
                </a>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 bg-slate-900/30 p-8 md:p-10 rounded-3xl border border-slate-800">

            <div className="mb-8">
              <p className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-2">
                Secure Communication Channel
              </p>

              <h3 className="text-2xl font-bold text-white">
                Send a Message
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                Fill in the details below and your message will be
                securely transmitted.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-slate-500 mb-2 uppercase"
                  >
                    User Identity
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    autoComplete="name"
                    className="w-full bg-slate-950 p-4 rounded-xl border border-slate-700 text-white placeholder:text-slate-600 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-slate-500 mb-2 uppercase"
                  >
                    Return Mail
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    className="w-full bg-slate-950 p-4 rounded-xl border border-slate-700 text-white placeholder:text-slate-600 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                    required
                  />
                </div>

              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono text-slate-500 mb-2 uppercase"
                >
                  Subject Parameter
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  className="w-full bg-slate-950 p-4 rounded-xl border border-slate-700 text-white placeholder:text-slate-600 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-slate-500 mb-2 uppercase"
                >
                  Payload Specifications
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full bg-slate-950 p-4 rounded-xl border border-slate-700 text-white placeholder:text-slate-600 outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition resize-none"
                  required
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold uppercase tracking-wide bg-gradient-to-r from-cyan-600 to-blue-700 text-white hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading
                  ? "Transmitting..."
                  : "Transmit Secure Payload"}
              </button>

              {/* Status */}
              {status && (
                <div
                  className={`p-4 rounded-xl border text-center font-medium ${
                    status.includes("successfully")
                      ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                      : "border-red-500/30 bg-red-500/10 text-red-400"
                  }`}
                >
                  {status}
                </div>
              )}

            </form>
          </div>

        </div>
      </section>
    </>
  );
}