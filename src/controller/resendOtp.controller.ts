import { Request, Response } from "express";
import generateOtp from "../utils/generateOtp.utils";
import User from "../model/user.model";
import Otp from "../model/otp.model";
import { sendMail } from "../utils/sendEmail.utils";

const resendOtp = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: "user does not exist" });
      return;
    }
    const userEmail = user.email;
    const otpInfo = await Otp.findOne({ email: userEmail });
    if (!otpInfo) {
      res.status(404).json({ message: "user does not exist" });
      return;
    }
    const otp = generateOtp();
    otpInfo.otp = otp;

    await otpInfo.save();
    sendMail(userEmail, otp);
    res.status(200).json({ message: "Code has been successfully resent" });
  } catch (error) {
    let err = error as Error;
    res.status(500).json(err);
  }
};

export default resendOtp;
