const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const reservations = await tables.resService.readAll();

    res.json(reservations);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const resService = await tables.resService.read(req.params.id);

    if (resService == null) {
      res.sendStatus(404);
    } else {
      res.json(resService);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const resService = req.body;

  try {
    const insertId = await tables.resService.create(resService);

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
