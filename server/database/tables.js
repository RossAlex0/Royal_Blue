const ItemRepository = require("./models/ItemRepository");
const CostumerRepository = require("./models/CostumerRepository");
const RoomRepository = require("./models/RoomRepository");
const CommentRepository = require("./models/CommentRepository");
const CountryRepository = require("./models/CountryRepository");
const EventRepository = require("./models/EventRepository");
const ReservationRoomRepository = require("./models/ReservationRoomRepository");
const ReservationServiceRepository = require("./models/ReservationServiceRepository");
const RoomStyleRepository = require("./models/RoomStyleRepository");
const ServiceRepository = require("./models/ServiceRepository");

const tables = {};

tables.item = new ItemRepository();
tables.costumer = new CostumerRepository();
tables.room = new RoomRepository();
tables.comment = new CommentRepository();
tables.country = new CountryRepository();
tables.event = new EventRepository();
tables.resRoom = new ReservationRoomRepository();
tables.resService = new ReservationServiceRepository();
tables.roomStyle = new RoomStyleRepository();
tables.service = new ServiceRepository();

module.exports = new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
