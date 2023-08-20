import { Router } from "express";
const userRouter = Router();
import { createUser, getAllUsers } from "../controllers/user.controller.js";

// User creation
userRouter.post("/", createUser);
userRouter.get("/", getAllUsers);

export default userRouter;
