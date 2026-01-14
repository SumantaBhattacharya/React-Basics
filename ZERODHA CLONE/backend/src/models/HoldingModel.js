import mongoose from "mongoose";

import holdingSchema from "../schemas/HoldingSchema";

// mongoose.model it's a factory function
const HoldingModel = mongoose.model("Holding", holdingSchema);

export default HoldingModel;