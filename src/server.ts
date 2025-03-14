import express from "express";
import "dotenv/config";
import connectDb from "./database/db";
import userRouter from "./routers/user.router";
import cors from "cors";

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.use("/api/edureach", userRouter);
connectDb();

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
