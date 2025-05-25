import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function dbConnection() {
    const database_url: string = String(process.env.DATABASE_URL); 
    mongoose.connect(database_url);
    
    return mongoose.connection;
} 


