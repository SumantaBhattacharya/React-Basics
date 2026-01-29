import mongoose from "mongoose";
// import bcrypt from "bcrypt";
import { createHmac, randomBytes } from "crypto";
import jwt from "jsonwebtoken";

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
    salt: {
      type: String,
      // required: true, it will be set in pre-save
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
  },
);

// MODERN APPROACH: Async function without next parameter
userSchema.pre("save", async function () { //  NO 'next' parameter in async functions
  try {
    // this is basically pointing to the current user
    const user = this;

    // if the password is not modified then we dont want to hash it again
    if (!user.isModified("password")) return ; // Call next() to continue

    // https://nodejs.org/api/crypto.html#cryptocreatehmacalgorithm-key-options

    const salt = randomBytes(16).toString('hex'); // created a random string of 16
    // Hash password with salt
    const hashedPassword = createHmac("sha256", salt)
      .update(user.password)
      .digest("hex");

    // this refer to user here we dont have a user schema salt so,
    this.salt = salt;
    this.password = hashedPassword; // Replace password with hash and store salt

    // next(); async function returns promise automatically
  } catch (err) {
    console.error("Error hashing password:", err);
    // in production, throw generic errors to avoid leaking implementation details.
    // throw new Error("Password hashing failed: ${err.message}"); // Creates new error losses original stack trace and details!. In Node.js, 2nd param is IGNORED!
    
    // next(err); // Pass error to mongoose

    // Use throw err; during development for debugging
    throw err; // Re-throws the orginal error, keeps original stack trace.
  }
});

userSchema.methods.comparePassword = function (enteredPassword) {
  const user = this;

  // Recreate the hash with the stored salt
  const hash = createHmac("sha256", user.salt)
    .update(enteredPassword)
    .digest("hex");

  // Compare the recreated hash with the stored hash
  return hash === user.password;
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    },
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY },
  );
};

// mongodb document is of 16mb
export const User = mongoose.model("User", userSchema);
