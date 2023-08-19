import express from "express";
import {
  addProfileController,
  getProfileController,
} from "./profile.controller";

const route = express.Router();

route.get("/profile", getProfileController);
route.post("/profile", addProfileController);

export const profileRoute = {
  route,
};
