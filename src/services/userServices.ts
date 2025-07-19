import { hashPassword } from "../config/cryptPassword";
import prisma from "../config/db";
import { User } from "../generated/prisma";
import { UserSchema, userSchema } from "../schemas/userSchema";
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

export const updateUser = async (id: string, user: User) => {
  const updatedUser = await prisma.user.update({
    where: { id },
    data: user,
  });
  return updatedUser;
};

export const deleteUser = async (id: string) => {
  const deletedUser = await prisma.user.delete({
    where: { id },
  });
  return deletedUser;
};