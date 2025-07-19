import { Router } from "express";
import { createUserController, getUsersController, getUserByIdController, updateUserController, deleteUserController } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/", createUserController);
userRouter.get("/", getUsersController);
userRouter.get("/:id", getUserByIdController);
userRouter.put("/:id", updateUserController);
userRouter.delete("/:id", deleteUserController);

export default userRouter;