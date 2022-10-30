const userSchema = require("../schema/user.schema");
const { StatusCodes } = require("http-status-codes");

const mongoose = require("mongoose");

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
