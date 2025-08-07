import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../config/firebase.config.js";

const auth = getAuth(app);

class AuthService {
    async userSignUp(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async userLogin(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async userLogout() {
        try {
            await signOut(auth);
            return { message: 'Logout successful' };
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default new AuthService();