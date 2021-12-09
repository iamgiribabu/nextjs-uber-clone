// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz7LMtQBDhVA3IwTPMkN8DlhV3T-puTFg",
  authDomain: "uber-clone-3f0a8.firebaseapp.com",
  projectId: "uber-clone-3f0a8",
  storageBucket: "uber-clone-3f0a8.appspot.com",
  messagingSenderId: "402385035519",
  appId: "1:402385035519:web:fc79242e1a42a9eb03ecca",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
