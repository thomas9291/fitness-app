/* import mongoose from "mongoose";
const { Schema } = mongoose;

const inputSchema = new Schema({
  weight: { type: Number, required: true },
  serie: { type: Number, required: true },
  reps: { type: Number, required: true },
  adaptation: { type: Number, required: false },
  createDate: {
    type: Date,
    default: () => Date.now(),
  },
  updateDate: Date,
});

const Input = mongoose.models.Input || mongoose.model("Input", inputSchema);

export default Input;
 */
