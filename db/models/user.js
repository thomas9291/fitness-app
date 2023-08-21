import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: false },
  email: { type: String, required: true },
  plans: [{ type: Schema.Types.ObjectId, ref: "Plan" }],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
