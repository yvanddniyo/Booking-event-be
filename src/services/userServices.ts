import { comparePassword, hashPassword } from "../config/cryptPassword";
import prisma from "../config/db";
import { User } from "../generated/prisma";
import { LoginUserSchema, UserSchema, userSchema } from "../schemas/userSchema";
import { EmailAlreadyExist } from "../utls/EmailAlreadyExist";

export const createUser = async (user: UserSchema) => {
  const validatedUser = userSchema.parse(user);
  const emailAlreadyExist = await EmailAlreadyExist(validatedUser.email);
  if(emailAlreadyExist){
    throw new Error("Email already exists");
  }
  const hashedPassword = await hashPassword(validatedUser.password);
  const newUser = await prisma.user.create({
    data: {
      ...validatedUser,
      password: hashedPassword,
    },
  });
  return newUser;

};

export const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const getUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  if(!user){
    throw new Error("User not found");
  }
  return user;
};

export const updateUser = async (id: string, user: Partial<User>) => {
  console.log("id -->", id);
  console.log("user -->", user);
  const updatedUser = await prisma.user.update({
    where: { id },
    data: user,
  });
  if(!updatedUser){
    throw new Error("User not found");
  }
  return updatedUser;
};

export const deleteUser = async (id: string) => {
  const deletedUser = await prisma.user.delete({
    where: { id },
  });
  return deletedUser;
};


export const loginUser = async (user: LoginUserSchema) => {
  const userLogin = await prisma.user.findUnique({
    where: { email: user.email },
  });
  if(!userLogin){
    throw new Error("User not found");
  }
  const isPasswordValid = await comparePassword(user.password, userLogin.password);
  if(!isPasswordValid){
    throw new Error("Invalid password");
  }
  return userLogin;
};