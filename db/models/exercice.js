import mongoose from "mongoose";
const { Schema } = mongoose;

const exerciceSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  muscle: { type: String, required: true },
  equipment: { type: String, required: true },
  images: { type: [String], required: false },
  maxValue: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  result: [{ type: Schema.Types.ObjectId, ref: "Input", required: false }],
});

const Exercice =
  mongoose.models.Exercice || mongoose.model("Exercice", exerciceSchema);

export default Exercice;
