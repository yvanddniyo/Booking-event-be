import { NextFunction, Request, Response } from "express";
import { getUserById } from "../utls/EmailAlreadyExist";
import jwt from "jsonwebtoken";
import { decodeToken, verifyToken } from "../config/cryptPassword";

export const validateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        status: "error",
        message: "Unauthorized Token, please login to continue"
      });
    }

    const token = authHeader.substring(7);
    
    const verify = await verifyToken(token);
    if (!verify) {
      return res.status(401).json({
        status: "error",
        message: "Invalid token, please login to continue"
      });
    }

    const decoded = await decodeToken(token);
    if (!decoded) {
      return res.status(401).json({
        status: "error",
        message: "Token could not be decoded"
      });
    }

    const id = (decoded as any).id;
    const user = await getUserById(id);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "User not found"
      });
    }

    (req as any).user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      status: "error",
      message: "Invalid token"
    });
  }
};