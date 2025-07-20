import { Router } from "express";
import { createUserController, getUsersController, getUserByIdController, updateUserController, deleteUserController, loginUserController } from "../controllers/userController";
import { validateAdmin } from "../middlewares/validateAdmin";
import { validateUser } from "../middlewares/validateUser";

const userRouter = Router();

userRouter.post("/auth/register", createUserController);
userRouter.get("/users", validateAdmin, getUsersController);
userRouter.get("/users/:id", validateUser, getUserByIdController);
userRouter.patch("/users/:id", validateUser, updateUserController);
userRouter.delete("/users/:id", validateUser, deleteUserController);
userRouter.post("/auth/login", loginUserController);

export default userRouter;