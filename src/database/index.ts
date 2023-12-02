import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const clientPromise = mongoose
  .connect(process.env.DB_URL!)
  .then((m) => m.connection.getClient())
  .catch((err) => console.log(err));
