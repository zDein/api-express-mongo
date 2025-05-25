import mongoose from "mongoose";
import { addressSchema } from "./Address";

const userSchema= new mongoose.Schema(
    {
        name: { type: String, required: true },
        age: { type: Number },
        email: { type: String },
        phone: { type: String },
        address: addressSchema
    },
    { versionKey: false }
);


export const User = mongoose.model("users", userSchema);