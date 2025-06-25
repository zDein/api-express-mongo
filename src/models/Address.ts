import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    country: { type: String, required: [true, "O nome do país é obrigatório!"]},
    state: { type: String, required: [true, "O nome do estado é obrigatório!"]},
    city: { type: String},
    street: { type: String }
}, {versionKey: false})

const Address = mongoose.model("address", addressSchema);

export { Address, addressSchema };