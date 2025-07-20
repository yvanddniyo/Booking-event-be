import { NextFunction, Request, Response } from "express";
import { getUserById } from "../utls/EmailAlreadyExist";
import { decodeToken, verifyToken } from "../config/cryptPassword";

export const validateAdmin = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        status: "error",
        message: "Authorization header missing or invalid format"
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
    const role = (decoded as any).role;
    console.log("role -->", role);
    const user = await getUserById(id);
    if(role !== "ADMIN"){
      return res.status(403).json({
        status: "error",
        message: "Unauthorized, you are not an admin"
      });
    }

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
  }}