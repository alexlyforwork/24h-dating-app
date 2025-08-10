import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../config/firebase.config.js";
import pool from "../config/db.config.js";

const auth = getAuth(app);

class AuthService {
  async userSignUp(name, email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await this.saveUserToDb(userCredential.user.uid, name, email);
      return userCredential.user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async saveUserToDb(uid, name, email) {
    try {
      await pool.query(
        "INSERT INTO users (uid, name, email) VALUES ($1, $2, $3) ON CONFLICT (uid) DO NOTHING",
        [uid, name, email],
      );
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async userLogin(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      return userCredential.user;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async userLogout() {
    try {
      await signOut(auth);
      return { message: "Logout successful" };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default new AuthService();
