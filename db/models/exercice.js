import mongoose from "mongoose";
const { Schema } = mongoose;

const exerciceSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  muscle: { type: String, required: true },
  equipment: { type: String, required: true },
  images: { type: [String], required: false },
  input: { type: Schema.Types.ObjectId, ref: "Input", required: false },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Exercice =
  mongoose.models.Exercice || mongoose.model("Exercice", exerciceSchema);

export default Exercice;
