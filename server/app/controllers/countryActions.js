const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const countries = await tables.country.readAll();

    res.json(countries);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const country = await tables.country.read(req.params.id);

    if (country == null) {
      res.sendStatus(404);
    } else {
      res.json(country);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
};
