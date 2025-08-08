import { getAuth } from "firebase-admin/auth";
import admin from "firebase-admin";

// Use the default initialized app
const auth = getAuth();

export const authMiddleware = async (req, res, next) => {
  try {
    const idToken = req.headers.authorization?.split("Bearer ")[1];
    if (!idToken) {
      return res.status(401).json({ message: "Missing authorization token" });
    }
    const decodedToken = await auth.verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("❌ Firebase token verification failed:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
