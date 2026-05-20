"use client";

import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../firebase";

export default function GoogleLogin() {

  const handleLogin = async () => {

    try {

      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      console.log("Visitor Name:", user.displayName);

      console.log("Visitor Gmail:", user.email);

      console.log("Visit Time:", new Date());

      alert(`Welcome ${user.displayName}`);

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <button
      onClick={handleLogin}
      className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-xl transition"
    >
      Continue with Google
    </button>

  );

}