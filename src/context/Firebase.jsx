import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAND3w_AkzhlPYKMWrF8nAbM64u_DcTJ2A",
  authDomain: "bookify-firebase-6ad47.firebaseapp.com",
  projectId: "bookify-firebase-6ad47",
  storageBucket: "bookify-firebase-6ad47.firebasestorage.app",
  messagingSenderId: "140840174182",
  appId: "1:140840174182:web:56fba88bb05774a387a3a7",
};

const app = initializeApp(firebaseConfig);

export const useFirebase = () => useContext(FirebaseContext);
const firebaseAuth = getAuth(app);

export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  return (
    <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
