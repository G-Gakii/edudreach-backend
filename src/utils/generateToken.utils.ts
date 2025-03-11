import jwt from "jsonwebtoken";

const generateAccessToken = async (id: string) => {
  return jwt.sign({ id }, process.env.SECRET_KEY as string, {
    expiresIn: "1h",
  });
};
export const generaterefreshToken = async (id: string) => {
  return jwt.sign({ id }, process.env.SECRET_KEY as string, {
    expiresIn: "1h",
  });
};

export default generateAccessToken;
