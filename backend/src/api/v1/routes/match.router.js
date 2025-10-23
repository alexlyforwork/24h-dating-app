import express from "express";
import MatchController from "../controllers/match.controller.js";

const matchRouter = express.Router();

matchRouter.post("/compatibility", async (req, res, next) => {
  try {
    await MatchController.getMatchCompatibility(req, res);
  } catch (error) {
    next(error);
  }
});

export default matchRouter;
