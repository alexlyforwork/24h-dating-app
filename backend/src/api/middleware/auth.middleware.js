// import express
import {verifyIdToken} from "firebase/auth";
import { app } from "../config/firebase.config.js";

export const authMiddleware = async (req, res, next) => {
    try {
        const decodedToken = await verifyIdToken(req.headers.authorization);
        next();
    } catch (error) {
        throw new Error(error.message);
    }
}