import mongoose from "mongoose";
// import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, `Password is required`],
    },
    avatar: {
      type: String,
      default: function () {
        return `https://api.dicebear.com/9.x/pixel-art/svg?seed=${this._id}`;
      },
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// mongodb document is of 16mb
export const User = mongoose.model("User", userSchema);
