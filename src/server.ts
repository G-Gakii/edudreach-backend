import express from "express";
import "dotenv/config";
import connectDb from "./database/db";
import userRouter from "./routers/user.router";

const app = express();
const port = process.env.PORT;

connectDb();
app.use(express.json());
app.use("/api/edureach", userRouter);

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
