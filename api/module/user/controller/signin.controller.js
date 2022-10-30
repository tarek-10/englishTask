const { StatusCodes } = require("http-status-codes");
const userModel = require("../../../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const siginInFun = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "User Not Found ...!" });
    } else {
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        const token = jwt.sign(
          { _id: user._id, email: user.email },
          process.env.SECRET_KEY
        );

        res.status(StatusCodes.OK).json({
          message: "success",
          token,
          user: {
            _id: user._id,
            username: user.username,
            profile: user.userPic,
          },
        });
      } else {
        res.json({ message: "in-valid password" });
      }
    }
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "error", error });
  }
};
module.exports = siginInFun;
