import express from "express";
import { allUser } from "../controller/allUser.js";
import userRouter from "./userRouter";

const router = express.Router();

router.get("/users", userRouter);

export default router;
