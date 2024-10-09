const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  add,
  edit,
  editPassword,
  destroy,
} = require("../../../controllers/costumerActions");
const { hashPassword } = require("../../../services/authentication");
const { checkUserRegistration } = require("../../../services/joiValidators");
const { verifyToken } = require("../../../services/token");

router.get("/", browse);

router.get("/:id", read);

router.post("/", checkUserRegistration, hashPassword, add);

router.put("/password/:id", hashPassword, editPassword);
router.put("/:id", edit);

router.delete("/:id", verifyToken, destroy);

module.exports = router;
