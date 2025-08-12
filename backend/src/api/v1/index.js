import authRouter from "./routes/auth.router.js";
import profileRouter from "./routes/profile.router.js";
import express from "express";

const router = express.Router();
router.use(express.json());
router.use("/auth", authRouter);
router.use("/profile", profileRouter);

export { router };
