import { string } from "joi";
import mongoose from "mongoose";

const OtpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    otp: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Otp = mongoose.model("otp", OtpSchema);

export default Otp;
