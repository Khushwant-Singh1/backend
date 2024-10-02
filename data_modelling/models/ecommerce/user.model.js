import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      retype: String,
      quired: true,
      unique: true,
      lowercase: true,
    },
    password: {},
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
