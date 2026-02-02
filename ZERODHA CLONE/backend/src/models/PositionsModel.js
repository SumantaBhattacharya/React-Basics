import mongoose from "mongoose"

import {PositionsSchema} from "../schemas/PositionsSchema.js"

const PositionsModel = mongoose.model("Position", PositionsSchema);

export default PositionsModel;