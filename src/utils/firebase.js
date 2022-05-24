// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYWsme3CxdGIukBWgK1UHHtRg_WqSyas0",
  authDomain: "coderhouse-reactjs-ljrg.firebaseapp.com",
  projectId: "coderhouse-reactjs-ljrg",
  storageBucket: "coderhouse-reactjs-ljrg.appspot.com",
  messagingSenderId: "708014354587",
  appId: "1:708014354587:web:7e21bf3b8ad0099c8a163e",
  measurementId: "G-L4B71WKSFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
