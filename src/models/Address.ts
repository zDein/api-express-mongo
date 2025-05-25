import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    country: { type: String, required: true},
    state: { type: String, required: true},
    city: { type: String},
    street: { type: String }
}, {versionKey: false})

const Address = mongoose.model("address", addressSchema);

export { Address, addressSchema };