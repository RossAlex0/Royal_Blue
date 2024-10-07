const express = require("express");

const router = express.Router();

const {
  login,
  loginByCookie,
} = require("../../../controllers/costumerActions");
const { checkPassword } = require("../../../services/authentication");
const { createToken, verifyToken } = require("../../../services/token");
const { checkUserLogin } = require("../../../services/joiValidators");

router.get("/", verifyToken, loginByCookie);

router.post("/", checkUserLogin, checkPassword, createToken, login);

module.exports = router;
