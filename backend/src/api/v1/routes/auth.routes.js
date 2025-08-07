import express from "express";
import AuthController from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signup", async (req, res, next) => {
  try {
    await AuthController.userSignUp(req, res);
  } catch (error) {
    next(error);
  }
});

authRouter.post("/login", async (req, res, next) => {
  try {
    await AuthController.userLogin(req, res);
  } catch (error) {
    next(error);
  }
});

authRouter.post("/logout", async (req, res, next) => {
  try {
    await AuthController.userLogout(req, res);
  } catch (error) {
    next(error);
  }
});

export default authRouter;
