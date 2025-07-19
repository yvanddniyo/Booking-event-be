import { Request, Response } from "express";
import { createUser, getUsers, getUserById, updateUser, deleteUser } from "../services/userServices";
import logger from "logger"
import { User } from "../generated/prisma";
import { UserSchema } from "../schemas/userSchema";

export const createUserController = async (req: Request, res: Response) => {
  try{
    const user = req.body;
    if(!user){
      return res.status(400).json({
        status: "error",
        message: "User is required"
      });
    }
    console.log("user -->", user);
    const newUser = await createUser(user);
    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: newUser
    });
  } catch (error) {
    res.status(500).json({ 
      status: "error",
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
};

export const getUsersController = async (req: Request, res: Response) => {
  const users = await getUsers();
  res.status(200).json({
    status: "success",
    message: "Users fetched successfully",
    length: users.length,
    users: users
  });
};

export const getUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserById(id);
  console.log("user -->", user);

  res.status(200).json({
    status: "success",
    message: "User fetched by ID successfully",
    user: user
  });
};

export const updateUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = req.body;
  if(!id){
    return res.status(400).json({
      status: "error",
      message: "User id is required"
    });
  }
  if(!req.body){
    return res.status(400).json({
      status: "error",
      message: "User body is required"
    });
  }
  let updatedUser: Partial<UserSchema> = {};
  user.firstName && (updatedUser.firstName = user.firstName);
  user.lastName && (updatedUser.lastName = user.lastName);
  user.email && (updatedUser.email = user.email);
  user.password && (updatedUser.password = user.password);
  user.role && (updatedUser.role = user.role);
  user.status && (updatedUser.status = user.status);

  const updatedUserData = await updateUser(id, updatedUser as User);
  res.status(200).json({
    status: "success",
    message: "User updated successfully",
    data: updatedUserData
  });
};

export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  res.status(200).json({
    status: "success",
    message: "User deleted successfully",
    data: deletedUser
  });
};