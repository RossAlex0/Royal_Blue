const express = require("express");

const router = express.Router();

const { login } = require("../../../controllers/costumerActions");
const { checkPassword } = require("../../../services/authentication");

router.post("/", checkPassword, login);

module.exports = router;
