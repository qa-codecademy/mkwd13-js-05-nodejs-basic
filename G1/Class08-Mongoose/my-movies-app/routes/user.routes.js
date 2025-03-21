import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const userRouter = Router();
const userController = new UserController();

userRouter.post("/register", (req, res) => userController.register(req, res));
userRouter.post("/login", (req, res) => userController.login(req, res));

export default userRouter;
