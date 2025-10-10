import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URI = process.env.DB_URL || "mongodb://localhost:27017/primerNode";
if (!MONGO_URI) {
  throw new Error("La variable de entorno DB_URL no está definida");
}

async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("la conexion fue exitosa")
  } catch (error) {
    console.log(`la conexion fallo, el error presentado fue : ${error}`)
  }
}


export default connectDB;
