// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5c1ed.firebaseapp.com",
  projectId: "mern-estate-5c1ed",
  storageBucket: "mern-estate-5c1ed.appspot.com",
  messagingSenderId: "159632761283",
  appId: "1:159632761283:web:92003d7f3a36e1b4cc9d76"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
