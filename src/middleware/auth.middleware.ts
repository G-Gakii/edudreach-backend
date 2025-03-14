import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";
import User from "../model/user.model";

export const autheticate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).json({ message: "Kindly register" });
      return;
    }
    const bearerToken = authHeader.split(" ");
    let token = bearerToken[1];
    const decode = jwt.verify(token, process.env.SECRET_KEY as string) as {
      id: string;
    };
    const user = await User.findById(decode.id);
    if (!user) {
      res.status(403).json({ message: "Invalid token" });
      return;
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: `internal server error ${error}` });
    return;
  }
};
