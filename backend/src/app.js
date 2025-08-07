import authRoutes from "./api/v1/routes/auth.routes.js";
import express from "express";

const app = express();
app.use(express.json());
app.use("/api/v1/auth", authRoutes);

export default app;
