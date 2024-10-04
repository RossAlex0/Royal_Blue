const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
};
const browse = async (req, res, next) => {
  try {
    const costumers = await tables.costumer.readAll();

    res.json(costumers);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const costumer = await tables.costumer.read(req.params.id);

    if (costumer == null) {
      res.sendStatus(404);
    } else {
      res.json(costumer);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const costumer = req.body;

  try {
    const insertId = await tables.costumer.create(costumer);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};
module.exports = {
  login,
  browse,
  read,
  // edit,
  add,
  // destroy,
};
