const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const events = await tables.event.readAll();

    res.json(events);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const event = await tables.event.read(req.params.id);

    if (event == null) {
      res.sendStatus(404);
    } else {
      res.json(event);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const event = req.body;

  try {
    const insertId = await tables.event.create(event);

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
