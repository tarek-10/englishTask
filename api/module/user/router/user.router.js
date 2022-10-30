const express = require("express");
const handleValidation = require("../../../middleware/handleValidation");
const {
  userSignUpSchema,
  userSignInSchema,
} = require("../joi/user.validation");

const router = express.Router();
const upload = require("../../../middleware/multer");

//create user
const signUpFun = require("../controller/signUp.controller");
router.post(
  "/user/signup",
  upload.single("image"),
  handleValidation(userSignUpSchema),
  signUpFun
);
//end

//sign in
const siginInFun = require("../controller/signin.controller");
router.post("/user/signin", handleValidation(userSignInSchema), siginInFun);
//end
module.exports = router;
