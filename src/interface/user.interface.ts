import { Request } from "express";
import { Document } from "mongoose";

export interface Iuser extends Document {
  _id: string;
  username: string;
  email: string;
  password: string;
  role: string;
  isVerified: boolean;
}
