import { router as v1Router } from "./api/v1/index.js";
import express from "express";
import { authMiddleware } from "./api/middleware/auth.middleware.js";

const app = express();
app.use(express.json());
app.use("/api/v1", v1Router);

app.get("/protected", authMiddleware, (req, res) => {
  res.status(200).json({ message: "You have access!", user: req.user });
});
export default app;
