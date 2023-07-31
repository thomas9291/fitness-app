import mongoose from "mongoose";
const { Schema } = mongoose;

const inputSchema = new Schema({
  createDate: {
    type: Date,
    default: () => Date.now(),
  },
  inputs: {
    updateDate: Date,
    weight: Number,
    serie: Number,
    reps: Number,
  },
  exerciceInput: {
    type: Schema.Types.ObjectId,
    ref: "Exercice",
    required: false,
  },
});

const Input = mongoose.models.Input || mongoose.model("Input", inputSchema);

export default Input;
