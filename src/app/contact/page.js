"use client";

import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen px-10 py-32 grid-bg text-white"
      >

        <h1 className="text-6xl font-bold gradient-text mb-14">
          Contact Me
        </h1>

        <div className="glass rounded-3xl p-10 card-hover glow max-w-3xl">

          <div className="space-y-8 text-xl">

            <div>
              <h2 className="text-cyan-400 font-bold mb-2">
                Email
              </h2>

              <p>
                yashshelke9129@gmail.com
              </p>
            </div>

            <div>
              <h2 className="text-cyan-400 font-bold mb-2">
                Phone
              </h2>

              <p>
                +91 9136486029
              </p>
            </div>

            <div>
              <h2 className="text-cyan-400 font-bold mb-2">
                LinkedIn
              </h2>

              <a
                href="https://www.linkedin.com/in/yash-shelke-69b397327"
                target="_blank"
                className="text-blue-400"
              >
                View LinkedIn Profile
              </a>
            </div>

            <div>
              <h2 className="text-cyan-400 font-bold mb-2">
                GitHub
              </h2>

              <a
                href="https://github.com/yashshelke9129-droid"
                target="_blank"
                className="text-blue-400"
              >
                View GitHub Profile
              </a>
            </div>

          </div>

        </div>

      </motion.main>
    </>
  );
}