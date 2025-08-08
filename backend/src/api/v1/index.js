import authRouter from "./routes/auth.router.js";
import express from "express";

const router = express.Router();
router.use(express.json());
router.use("/auth", authRouter);

export { router };
