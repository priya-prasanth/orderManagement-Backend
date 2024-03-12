import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectDB = async () => {
  try {
    const mongoURL = process.env.MONGODBCONNECTIONSTRING;
    const connection = await mongoose.connect(mongoURL);
    console.log("Connected to MongoDB");
    return connection;
  } catch (error) {
    console.error("Error", error);
  }
};

export default connectDB;
