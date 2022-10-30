const { StatusCodes } = require("http-status-codes");
const fs = require("fs");

const getQuestionFun = async (req, res) => {
  try {
    const quizData = fs.readFileSync("./TestData.json");
    const quizParsData = JSON.parse(quizData);

    res.status(StatusCodes.OK).json({ message: "success", quizParsData });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "error", error });
  }
};
module.exports = getQuestionFun;
