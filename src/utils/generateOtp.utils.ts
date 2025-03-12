import randomstring from "randomstring";

const generateOtp = () => {
  return randomstring.generate({
    length: 6,
    charset: "numeric",
  });
};

export default generateOtp;
