import mongoose from "mongoose";
const { Schema } = mongoose;

const inputSchema = new Schema({
  weight: { type: Number, required: false },
  serie: { type: Number, required: false },
  reps: { type: Number, required: false },
  adaptation: { type: Number, required: false },
  createDate: {
    type: Date,
    default: () => Date.now(),
  },
  updateDate: Date,
});

const Input = mongoose.models.Input || mongoose.model("Input", inputSchema);

export default Input;

/* exercice: { type: Schema.Types.ObjectId, ref: "Exercice", required: false }, */
