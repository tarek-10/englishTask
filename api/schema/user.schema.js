const { StatusCodes } = require("http-status-codes");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userPic: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = userSchema;
