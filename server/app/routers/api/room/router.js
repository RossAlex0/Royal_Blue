const express = require("express");

const router = express.Router();

const actions = require("../../../controllers/roomActions");

router.get("/", actions.browse);
router.get("/:id", actions.read);

router.post("/", actions.add);
router.post("/search", actions.readRoomQuery);

module.exports = router;
