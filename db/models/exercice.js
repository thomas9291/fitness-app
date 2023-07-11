import mongoose from "mongoose";
import User from "./user";
const { Schema } = mongoose;

const exerciceSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  muscle: { type: String, required: true },
  equipment: { type: String, required: true },
  difficulty: { type: String, required: true },
  instruction: { type: String, required: true },
  images: { type: [String], required: false },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Exercice =
  mongoose.models.Exercice || mongoose.model("Exercice", exerciceSchema);

export default Exercice;
