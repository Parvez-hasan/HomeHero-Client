// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT02CxFTa_p0CoeKB1lmy9-S4X349P7zU",
  authDomain: "home-hero-23c43.firebaseapp.com",
  projectId: "home-hero-23c43",
  storageBucket: "home-hero-23c43.firebasestorage.app",
  messagingSenderId: "830169223417",
  appId: "1:830169223417:web:356e4c504ee735cf1e9228"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);