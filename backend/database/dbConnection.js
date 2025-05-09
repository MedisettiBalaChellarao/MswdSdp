import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; // ✅ Import cors

dotenv.config();

const app = express();
app.use(cors()); // ✅ Enable CORS

// Optional: parse JSON requests
app.use(express.json());

// ✅ MongoDB Connection Function
const dbConnection = () => {
  mongoose
    .connect(process.env.DB_URL, {
      dbName: "Job_Portal",
    })
    .then(() => {
      console.log("MongoDB Connected Successfully!");
    })
    .catch((error) => {
      console.log(`Failed to connect: ${error}`);
    });
};

export { app, dbConnection };
