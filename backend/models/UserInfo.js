const mongoose = require("mongoose");

const SheyarSchema = new mongoose.Schema({
  text: String,
  category: String,
  language: String,
});

const SignupSchema = new mongoose.Schema({
  crn: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    default: "user",
  },
  isVerified: { type: Boolean, default: true },
});

const SignUp = mongoose.model("Signup", SignupSchema);
const Sheyar = mongoose.model("Shayar", SheyarSchema);
module.exports = {
  SignUp,
  Sheyar,
};
