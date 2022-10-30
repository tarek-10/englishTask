const Joi = require("joi");

module.exports = {
  userSignUpSchema: {
    body: Joi.object().required().keys({
      username: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
    file: Joi.object().optional(),
  },
  userSignInSchema: {
    body: Joi.object().required().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  },
};
