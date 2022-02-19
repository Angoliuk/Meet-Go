import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  password: { type: String, required: true },
  about: { type: String },
});

export default mongoose.model("UserModel", UserModel);
