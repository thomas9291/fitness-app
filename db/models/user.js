import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: false },
  email: {
    type: String,
    require: true,
    index: true,
    unique: true,
    sparse: true,
  },
  plans: [{ type: Schema.Types.ObjectId, ref: "Exercice" }],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

/* export default userSchema; */
