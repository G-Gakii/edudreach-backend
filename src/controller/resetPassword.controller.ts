import { Request, Response } from "express";
import resetPasswordSchema from "../validator/resetPassword.validator";
import User from "../model/user.model";
import * as argon2 from "argon2";

const resetPassword = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resetPasswordResult = await resetPasswordSchema.validateAsync(
      req.body
    );
    const { password } = resetPasswordResult;
    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: ` User not found ` });
      return;
    }
    const ChangedPassword = await argon2.hash(password);
    user.password = ChangedPassword;

    await user.save();
    res.status(200).json({ message: "Password successfully updated" });
    return;
  } catch (error) {
    const err = error as Error;
    res.status(500).json(err.message);
    return;
  }
};
export default resetPassword;
