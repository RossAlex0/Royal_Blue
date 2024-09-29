const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const reservations = await tables.resRoom.readAll();

    res.json(reservations);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const resRoom = await tables.resRoom.read(req.params.id);

    if (resRoom == null) {
      res.sendStatus(404);
    } else {
      res.json(resRoom);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const resRoom = req.body;

  try {
    const insertId = await tables.resRoom.create(resRoom);

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
