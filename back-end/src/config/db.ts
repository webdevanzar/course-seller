import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL as string);
    console.log("DB connected :" + connection.host);
  } catch (error) {
    console.log(error);
  }
};
