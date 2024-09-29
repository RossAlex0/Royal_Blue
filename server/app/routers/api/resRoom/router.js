const express = require("express");

const router = express.Router();

const { browse, read, add } = require("../../../controllers/roomReservActions");

router.get("/", browse);

router.get("/:id", read);

router.post("/", add);

module.exports = router;
