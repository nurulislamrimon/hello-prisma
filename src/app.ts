import express from "express";
import cors from "cors";
import { userRoute } from "./user/user.route";

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// router
app.use(userRoute.route);

export default app;
