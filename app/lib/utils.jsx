import mongoose from "mongoose";

export const connect2DB = async () =>{
  // This to always keep the connection alive
  const connection = {}
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.ALXMONGO);
    connection.isConnected = db.connection[0].readyState
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error(error.message);
  }
}