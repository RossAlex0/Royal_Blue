const express = require("express");

const router = express.Router();

const { login } = require("../../../controllers/costumerActions");
const { checkPassword } = require("../../../services/authentication");
const { createToken } = require("../../../services/token");
const { checkUserLogin } = require("../../../services/joiValidators");

router.post("/", checkUserLogin, checkPassword, createToken, login);

module.exports = router;
