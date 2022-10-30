const { StatusCodes } = require("http-status-codes");

const userRankFun = async (req, res) => {
  try {
    const { correctAns } = req.body;
    const rankResult = (correctAns / 10) * 100;
    res.status(StatusCodes.OK).json({ message: "success", rankResult });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "error" });
  }
};

module.exports = userRankFun;
