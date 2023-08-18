import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: false },
  email: { type: String, required: true },
  exerciceUser: [{ type: Schema.Types.ObjectId, ref: "Exercice" }],
  exerciceUserWeek2: [{ type: Schema.Types.ObjectId, ref: "Exercice" }],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
