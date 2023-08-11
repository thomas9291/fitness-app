import mongoose from "mongoose";
const { Schema } = mongoose;
let newDate = new Date().toLocaleString();
const inputSchema = new Schema({
  createDate: {
    type: Date,
    default: () => newDate,
  },

  weight: { type: Number, required: true },
  serie: { type: Number, required: true },
  reps: { type: Number, required: true },

  exerciceInput: {
    type: Schema.Types.ObjectId,
    ref: "Exercice",
    required: false,
  },
});

const Input = mongoose.models.Input || mongoose.model("Input", inputSchema);

export default Input;
