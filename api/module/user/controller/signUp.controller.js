const { StatusCodes } = require("http-status-codes");
const userModel = require("../../../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const senEmail = require("../../../middleware/sendEmail");

const signUpFun = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (user) {
      res.json({ message: "You Aready Register Before By This email" });
    } else {
      let token = jwt.sign({ email: email }, process.env.SECRET_KEY);
      let message = `<a href='http://localhost:3000/verify/${token}'>Veriy Your Mail</a>`;
      let url = "";
      if (req.file) {
        url = process.env.IMAGE_URL + req.file.filename;
      }

      bcrypt.hash(password, 10, async function (err, hash) {
        if (err) throw err;
        const registerUser = await userModel.insertMany({
          username,
          email,
          password: hash,
          userPic: url,
        });
        res.status(StatusCodes.OK).json({ message: "success", registerUser });
      });
      await senEmail(email, message);
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "error", error });
  }
};
module.exports = signUpFun;
