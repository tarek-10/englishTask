const express = require("express");

const router = express.Router();

//get questions
const getQuestionFun = require("../controller/questions.controller");
router.get("/question", getQuestionFun);
//end

// rank
const userRankFun = require("../controller/userRank.controller");
router.post("/rnak", userRankFun);
//end
module.exports = router;
