import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import adminRoute from "./routes/adminRoute.js";
import { connectDb } from "./config/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
connectDb();
app.use(cors({ origin: ["http://localhost:5173/"] }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/admin", adminRoute);
app.use("/api/users", userRoute);

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
