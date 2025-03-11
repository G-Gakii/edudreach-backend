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
  subject: string,
  body: string
) => {
  await mailTransporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: subject,
    html: body,
  });
};
