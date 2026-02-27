import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// connect DB per request
app.use(async (req, res, next) => {
  await dbConnect();
  next();
});

// routes
app.use("/api/users", userRouter);

// test route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// 🚨 THIS LINE IS MANDATORY
export default app;

