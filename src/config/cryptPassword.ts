import bcrypt from "bcrypt";
import { LoginUserSchema } from "../schemas/userSchema";
import jwt from "jsonwebtoken";
import { User } from "../generated/prisma";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password: string, hash: string) => {
  return await bcrypt.compare(password, hash);
};

export const generateToken = async (user: User) => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role } as DecodedToken, 
    process.env.JWT_SECRET as string, 
    { expiresIn: "1h" }
  );
};

export const verifyToken = async (token: string) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string);
  } catch (error) {
    return null;
  }
};

export const decodeToken = async (token: string) => {
  try {
    return jwt.decode(token);
  } catch (error) {
    return null;
  }
};

export type DecodedToken = {
  id: string;
  email: string;
  role: string;
}