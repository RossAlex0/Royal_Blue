const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const services = await tables.service.readAll();

    res.json(services);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const service = await tables.service.read(req.params.id);

    if (service == null) {
      res.sendStatus(404);
    } else {
      res.json(service);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const service = req.body;

  try {
    const insertId = await tables.service.create(service);

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
