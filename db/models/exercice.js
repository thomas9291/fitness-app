import mongoose from "mongoose";
const { Schema } = mongoose;

const exerciceSchema = new Schema({
  name: { type: String, required: false },
  type: { type: String, required: false },
  muscle: { type: String, required: false },
  equipment: { type: String, required: false },
  images: { type: [String], required: false },
  maxValue: { type: Number, required: false },
});

const Exercice =
  mongoose.models.Exercice || mongoose.model("Exercice", exerciceSchema);

export default Exercice;

/* user: { type: Schema.Types.ObjectId, ref: "User" },
result: [{ type: Schema.Types.ObjectId, ref: "Input", required: false }], */

/* export default exerciceSchema; */
