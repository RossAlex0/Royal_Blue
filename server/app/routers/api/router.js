const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const costumerRouter = require("./costumer/router");
const countryRouter = require("./country/router");
const eventRouter = require("./event/router");
const resRoomRouter = require("./resRoom/router");
const resServiceRouter = require("./resService/router");
const roomRouter = require("./room/router");
const roomStyleRouter = require("./roomStyle/router");
const serviceRouter = require("./service/router");

router.use("/costumers", costumerRouter);
router.use("/countries", countryRouter);
router.use("/events", eventRouter);
router.use("/resRooms", resRoomRouter);
router.use("/resServices", resServiceRouter);
router.use("/rooms", roomRouter);
router.use("/styles", roomStyleRouter);
router.use("/services", serviceRouter);

/* ************************************************************************* */

module.exports = router;
