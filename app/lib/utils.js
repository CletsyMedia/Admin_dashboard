import mongoose from "mongoose";

export const connect2DB = async () =>{
  // This to always keep the connection alive
  
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error(error.message);
  }
}