import mongoose from "mongoose";

const { Schema } = mongoose;

const exerciceSchema = new Schema({
  name: { type: String, required: false },
  muscle: { type: String, required: false },
  equipment: { type: String, required: false },
  images: { type: [String], required: false },
  maxValue: { type: Number, required: false },
  trainings: { type: String, required: false },
  result: [{ type: Schema.Types.ObjectId, ref: "Input" }],
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Exercice =
  mongoose.models.Exercice || mongoose.model("Exercice", exerciceSchema);

export default Exercice;

/* user: { type: Schema.Types.ObjectId, ref: "User" },
result: [{ type: Schema.Types.ObjectId, ref: "Input", required: false }], */

/* export default exerciceSchema; */
