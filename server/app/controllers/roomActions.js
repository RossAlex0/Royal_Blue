const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const rooms = await tables.room.readAll();

    res.json(rooms);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const room = await tables.room.read(req.params.id);

    if (room == null) {
      res.sendStatus(404);
    } else {
      res.json(room);
    }
  } catch (err) {
    next(err);
  }
};

const readRoomQuery = async (req, res, next) => {
  try {
    const condition = {
      style_id: req.body.style_id,
      nb_person: req.body.person / 2,
    };
    const rooms = await tables.room.readByStyleAndPerson(condition);

    if (rooms == null) {
      res.sendStatus(404);
    } else {
      res.json(rooms);
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const room = req.body;

  try {
    const insertId = await tables.room.create(room);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  browse,
  read,
  readRoomQuery,
  // edit,
  add,
  // destroy,
};
