// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG_VvFcah8VGK6qbpMt5xlltE-SmGIHYw",
  authDomain: "plenty-technology.firebaseapp.com",
  projectId: "plenty-technology",
  storageBucket: "plenty-technology.firebasestorage.app",
  messagingSenderId: "56574802573",
  appId: "1:56574802573:web:016c0cb075b17e9b05c0c4",
  measurementId: "G-ZJ7JCZDHD1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };