import nodemailer from "nodemailer";

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
export const sendMail = async (
  email: string,

  otp: string
) => {
  await mailTransporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: "Verification code",
    html: `<p>Your email verification code is ${otp}</p>`,
  });
};
