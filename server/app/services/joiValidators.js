const Joi = require("joi");

const checkUserRegistration = (req, res, next) => {
  const schema = Joi.object({
    lastname: Joi.string().min(2).required(),
    firstname: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    country_id: Joi.string(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.message);
  } else {
    next();
  }
};

const checkUserLogin = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error.message);
  } else {
    next();
  }
};

module.exports = {
  checkUserRegistration,
  checkUserLogin,
};
