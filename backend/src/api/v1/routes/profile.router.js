import express from "express";
import ProfileController from "../controllers/profile.controller.js";

const profileRouter = express.Router();

profileRouter.post("/set", async (req, res, next) => {
  try {
    console.log("Setting profile with data:", req.body);
    await ProfileController.setProfile(req, res);
  } catch (error) {
    next(error);
  }
});

profileRouter.put("/set", async (req, res, next) => {
  try {
    console.log("Setting profile with data:", req.body);
    await ProfileController.setProfile(req, res);
  } catch (error) {
    next(error);
  }
});

profileRouter.post("/preferences", async (req, res, next) => {
  try {
    console.log("Setting preferences with data:", req.body);
    await ProfileController.setPreferences(req, res);
  } catch (error) {
    next(error);
  }
});

profileRouter.put("/preferences", async (req, res, next) => {
  try {
    console.log("Setting preferences with data:", req.body);
    await ProfileController.setPreferences(req, res);
  } catch (error) {
    next(error);
  }
});

profileRouter.get("/view", async (req, res, next) => {
  try {
    console.log("Fetching profile with preferences for UID:", req.user.uid);
    await ProfileController.getProfileWithPreferences(req, res);
  } catch (error) {
    next(error);
  }
});

profileRouter;

export default profileRouter;
