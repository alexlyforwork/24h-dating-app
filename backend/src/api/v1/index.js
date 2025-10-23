import authRouter from "./routes/auth.router.js";
import profileRouter from "./routes/profile.router.js";
import matchRouter from "./routes/match.router.js";
import express from "express";

const router = express.Router();
router.use(express.json());
router.use("/auth", authRouter);
router.use("/profile", profileRouter);
router.use("/match", matchRouter);

export { router };
