import { Err } from "joi";
import loginschema from "../validator/login.validator";
import { Response, Request } from "express";

import * as argon2 from "argon2";
import User from "../model/user.model";
import generateAccessToken, {
  generaterefreshToken,
} from "../utils/generateToken.utils";

const loginUser = async (req: Request, res: Response) => {
  try {
    const loginResult = await loginschema.validateAsync(req.body);
    const { username, password } = loginResult;
    const user = await User.findOne({ username });
    if (!user) {
      res
        .status(404)
        .json({ message: ` User with username ${username} is not registered` });
      return;
    }
    const isMatch = await argon2.verify(user.password, password);
    if (!isMatch) {
      res.status(400).json({ message: "invalid username or password" });
      return;
    }
    const accessToken = await generateAccessToken(user.id);
    const refreshToken = await generaterefreshToken(user.id);
    res.status(201).json({
      accessToken: accessToken,
      refreshToken: refreshToken,
      role: user.role,
    });
    return;
  } catch (error) {
    const err = error as Error;
    res.status(500).json(err.message);
  }
};
export default loginUser;
