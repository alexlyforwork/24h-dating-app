import admin from "../v1/config/firebase.config.js";

const auth = admin.auth();

export const authMiddleware = async (req, res, next) => {
  try {
    const idToken = req.cookies.token;
    if (!idToken) {
      return res.status(401).json({ message: "Missing authorization token" });
    }
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("❌ Firebase token verification failed:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
