import mongoose from "mongoose";

const holdingSchema = new mongoose.Schema(
  {
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
  },
  { timestamps: true }
);

export default holdingSchema;