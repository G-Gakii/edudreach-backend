import User from "../model/user.model";
import registerSchema from "../validator/register.validator";
import { Request, Response } from "express";
import * as argon2 from "argon2";
import generateAccessToken, {
  generaterefreshToken,
} from "../utils/generateToken.utils";
import { Error } from "mongoose";
import generateOtp from "../utils/generateOtp.utils";
import { sendMail } from "../utils/sendEmail.utils";
import Otp from "../model/otp.model";

const registerUser = async (req: Request, res: Response) => {
  try {
    const registerUserResult = await registerSchema.validateAsync(req.body);
    const { username, email, password, role } = registerUserResult;
    const user = await User.findOne({ username });
    if (user) {
      res.status(429).json({ message: "username already exist." });
      return;
    }
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      username,
      email,
      role,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();

    const otp = generateOtp();
    const userOtp = new Otp({
      email,
      otp,
    });
    await userOtp.save();

    sendMail(email, otp);
    const accessToken = await generateAccessToken(savedUser.id);
    const refreshToken = await generaterefreshToken(savedUser.id);
    res.status(201).json({
      accessToken: accessToken,
      refreshToken: refreshToken,
      role: role,
    });
    return;
  } catch (error) {
    const err = error as Error;
    res.status(500).json(err.message);
    return;
  }
};
export default registerUser;
