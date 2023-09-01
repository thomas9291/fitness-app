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
  planWeek1: [{ type: Schema.Types.ObjectId, ref: "Exercice" }],
  planWeek2: [{ type: Schema.Types.ObjectId, ref: "Exercice" }],
  planWeek3: [{ type: Schema.Types.ObjectId, ref: "Exercice" }],
  planWeek4: [{ type: Schema.Types.ObjectId, ref: "Exercice" }],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

/* export default userSchema; */
