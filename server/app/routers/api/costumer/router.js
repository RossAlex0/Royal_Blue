const express = require("express");

const router = express.Router();

const { browse, read, add } = require("../../../controllers/costumerActions");
const { hashPassword } = require("../../../services/authentication");
const { checkUserRegistration } = require("../../../services/joiValidators");

router.get("/", browse);

router.get("/:id", read);

router.post("/", checkUserRegistration, hashPassword, add);

module.exports = router;
