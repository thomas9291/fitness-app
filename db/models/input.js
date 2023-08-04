import mongoose from "mongoose";
const { Schema } = mongoose;

const inputSchema = new Schema({
  createDate: {
    type: Date,
    default: () => Date.now(),
  },
  weight: {
    type: Number,
    required: true,
  },
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
