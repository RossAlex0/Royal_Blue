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
  // edit,
  add,
  // destroy,
};
