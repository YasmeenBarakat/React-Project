// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reactproject-22747.firebaseapp.com",
  projectId: "reactproject-22747",
  storageBucket: "reactproject-22747.appspot.com",
  messagingSenderId: "941126767926",
  appId: "1:941126767926:web:40cb9861134ed858da0f97",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
