import express from "express";
import { addUserController, getUserController } from "./user.controller";

const route = express.Router();

route.get("/user", getUserController);
route.post("/user", addUserController);

export const userRoute = {
  route,
};
