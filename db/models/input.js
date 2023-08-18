import mongoose from "mongoose";
const { Schema } = mongoose;
let newDate = new Date().toLocaleString();
const inputSchema = new Schema({
  createDate: {
    type: Date,
    default: () => newDate,
  },

  weight: { type: Number, required: true },
  reps: { type: Number, required: true },
  repMax: { type: Number, required: false },
  serieTarget: { type: Number, required: false },
  adaptation: { type: Number, required: false },

  exerciceInput: {
    type: Schema.Types.ObjectId,
    ref: "Exercice",
    required: false,
  },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Input = mongoose.models.Input || mongoose.model("Input", inputSchema);

export default Input;
