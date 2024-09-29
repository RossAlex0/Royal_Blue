const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const styles = await tables.roomStyle.readAll();

    res.json(styles);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const style = await tables.roomStyle.read(req.params.id);

    if (style == null) {
      res.sendStatus(404);
    } else {
      res.json(style);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
};
