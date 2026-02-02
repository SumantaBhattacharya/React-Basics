import mongoose from "mongoose";

import orderSchema from "../schemas/OrdersSchema.js";

export const OrdersModel = mongoose.model("Order", orderSchema);