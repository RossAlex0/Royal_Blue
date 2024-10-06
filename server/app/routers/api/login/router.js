const express = require("express");

const router = express.Router();

const { login } = require("../../../controllers/costumerActions");
const { checkPassword } = require("../../../services/authentication");
const { createToken } = require("../../../services/token");

router.post("/", checkPassword, createToken, login);

module.exports = router;
