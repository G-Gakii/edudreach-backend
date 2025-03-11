import express from "express";
import "dotenv/config";
import connectDb from "./database/db";

const app = express();
const port = process.env.PORT;

connectDb();

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
