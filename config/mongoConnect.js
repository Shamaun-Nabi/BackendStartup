import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const DBURL = process.env.DATABASE_URL;
export const dataBaseConnection = async () => {
  try {
    await mongoose.connect(DBURL);
    console.log(
      `Connection established to ${mongoose.connection.name}`.bgMagenta
    );
  } catch (error) {
    console.log(`${error.message}`.bgRed);
  }
};
