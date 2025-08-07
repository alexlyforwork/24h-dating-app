// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKX2X2mHBt34N_nazfFgwtSfQabWT60ZA",
  authDomain: "datingapp-3be01.firebaseapp.com",
  projectId: "datingapp-3be01",
  storageBucket: "datingapp-3be01.firebasestorage.app",
  messagingSenderId: "217120280298",
  appId: "1:217120280298:web:ae71cdb8a5e9866f251193",
  measurementId: "G-8Y0PP8VNMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };