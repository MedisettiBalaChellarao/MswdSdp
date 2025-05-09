import express from "express";
import cors from "cors";
import app from "./app.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Enable CORS
app.use(cors());

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,  
  api_key: process.env.CLOUDINARY_API_KEY,        
  api_secret: process.env.CLOUDINARY_API_SECRET,  
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
