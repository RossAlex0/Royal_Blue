const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  readByStyle,
  add,
} = require("../../../controllers/roomActions");

router.get("/", browse);
router.get("/style/:id", readByStyle);
router.get("/:id", read);

router.post("/", add);

module.exports = router;
