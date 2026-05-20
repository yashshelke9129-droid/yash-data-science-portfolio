import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

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

export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();