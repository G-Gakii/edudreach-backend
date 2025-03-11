import mongoose from "mongoose";
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("Connected to database");
  } catch (error) {
    console.log("Failure to connect to database", error);
  }
};

export default connectDb;
