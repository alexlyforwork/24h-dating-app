import dotenv from "dotenv";
import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";
import { initializeApp as initializeClientApp } from "firebase/app";
import fs from "fs";
const serviceAccount = JSON.parse(
  fs.readFileSync(new URL("./serviceAccountKey.json", import.meta.url)),
);

dotenv.config({ override: true });

// Client-side Firebase SDK (for features like sending ID tokens)
const firebaseConfig = {
  apiKey: process.env.firebaseAPIKey,
  authDomain: "datingapp-3be01.firebaseapp.com",
  projectId: "datingapp-3be01",
  storageBucket: "datingapp-3be01.firebasestorage.app",
  messagingSenderId: "217120280298",
  appId: "1:217120280298:web:ae71cdb8a5e9866f251193",
  measurementId: "G-8Y0PP8VNMD",
};

const app = initializeClientApp(firebaseConfig);

// Admin SDK for backend operations
if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export { app };
export default admin;
