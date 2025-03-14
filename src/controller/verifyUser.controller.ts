import { Request, Response } from "express";
import User from "../model/user.model";
import Otp from "../model/otp.model";
import { Iuser } from "../interface/user.interface";
const verifyUser = async (req: Request, res: Response) => {
  try {
    const { otp } = req.body;
    const user = req.user as Iuser;
    console.log(user);

    if (!user) {
      res.status(404).json({ message: "user does not exist" });
      return;
    }

    const userEmail = user.email;
    const userInfo = await Otp.findOne({ email: userEmail });
    if (!userInfo) {
      res.status(404).json({ message: "user does not exist" });
      return;
    }
    if (user.isVerified) {
      res.status(400).json({ message: "you are already verified" });
      return;
    }
    const date = userInfo.updatedAt;

    function addMinutes() {
      let expiryDate = date.setMinutes(date.getMinutes() + 5);
      return expiryDate;
    }
    if (new Date(addMinutes()) < new Date()) {
      res.status(400).json({ message: "Code is expired" });
      return;
    }
    if (userInfo.otp !== otp) {
      res.status(400).json({ message: "Invalid Otp" });
      return;
    }
    user.isVerified = true;
    await user.save();
    res
      .status(200)
      .json({ message: "you have successfully verified your email" });
    return;
  } catch (error) {
    let err = error as Error;
    res.status(500).json(err);
  }
};

export default verifyUser;
