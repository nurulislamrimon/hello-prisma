import express from "express";
import cors from "cors";
import { userRoute } from "./user/user.route";
import { profileRoute } from "./profile/profile.route";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// router
app.use(userRoute.route);
app.use(profileRoute.route);

export default app;
