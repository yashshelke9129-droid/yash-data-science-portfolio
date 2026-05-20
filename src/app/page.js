"use client";

import { useState } from "react";

import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../firebase";

import Navbar from "../components/Navbar";

import { motion } from "framer-motion";

import { getFirestore, collection, addDoc } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyCigMsRh84wP3tL0pEwnkwL6HU6ASRWm1Q",

  authDomain: "yash-portfolio-808ef.firebaseapp.com",

  projectId: "yash-portfolio-808ef",

  storageBucket: "yash-portfolio-808ef.firebasestorage.app",

  messagingSenderId: "179395855737",

  appId: "1:179395855737:web:d4ad5689950bd6ed005ba8",

  measurementId: "G-RB4J4YCEC9"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default function Home() {

  const [user, setUser] = useState(null);

  const handleLogin = async () => {

    try {

      const result = await signInWithPopup(auth, provider);

      const loggedUser = result.user;

      await addDoc(collection(db, "visitors"), {

        name: loggedUser.displayName,

        email: loggedUser.email,

        loginTime: new Date().toString()

      });

      setUser(loggedUser);

    } catch (error) {

      console.log(error);

    }

  };

  if (!user) {

    return (

      <main className="min-h-screen flex items-center justify-center bg-black text-white px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="glass glow rounded-3xl p-12 text-center max-w-xl"
        >

          <h1 className="text-5xl font-bold gradient-text mb-8">
            Welcome
          </h1>

          <p className="text-gray-300 text-xl leading-9 mb-10">

            Sign in with Google to access
            Yash Shelke's Professional
            Data Science Portfolio.

          </p>

          <button
            onClick={handleLogin}
            className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-2xl transition text-xl"
          >
            Continue with Google
          </button>

        </motion.div>

      </main>

    );

  }

  return (

    <>

      <Navbar />

      <main className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-black via-blue-950 to-black text-white overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glass glow rounded-3xl p-10 md:p-16 text-center max-w-5xl"
        >

          {/* Profile Image */}

          <motion.img
            src="/profile.jpeg"
            alt="Yash Shelke"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="w-52 h-52 rounded-full mx-auto border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50 object-cover"
          />

          {/* Name */}

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold mt-8"
          >
            Yash Shelke
          </motion.h1>

          {/* Role */}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-cyan-300 text-2xl mt-6 leading-10"
          >
            Data Science Student | Machine Learning Enthusiast |
            Python Developer | Future AI Engineer
          </motion.p>

          {/* About */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 glass rounded-2xl p-8"
          >

            <h2 className="text-3xl font-bold text-cyan-400 mb-6">
              About Me
            </h2>

            <p className="text-gray-300 text-lg leading-9">

              I am currently pursuing TYBSc Computer Science and passionately
              exploring the world of Data Science, Machine Learning,
              Artificial Intelligence, and modern technologies.

              <br /><br />

              I enjoy building real-world AI and Data Science projects
              using Python, Pandas, NumPy, Scikit-learn, React.js,
              and Next.js.

              <br /><br />

              My goal is to become a highly skilled Data Scientist
              and AI Engineer capable of building intelligent systems
              that solve real-world problems.

            </p>

          </motion.div>

        </motion.div>

      </main>

    </>

  );

}