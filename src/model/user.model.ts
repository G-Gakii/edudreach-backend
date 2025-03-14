import mongoose from "mongoose";
import { userInfo } from "os";
import { Iuser } from "../interface/user.interface";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "admin", "volunteer", "donor"],
      required: true,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<Iuser>("user", UserSchema);

export default User;
