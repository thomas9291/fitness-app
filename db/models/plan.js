import mongoose from "mongoose";
const { Schema } = mongoose;

const planSchema = new Schema({
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  exerciceUser: [{ type: Schema.Types.ObjectId, ref: "Exercice" }],
});

const Plan = mongoose.models.Plan || mongoose.model("Plan", planSchema);

export default Plan;
