const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const comments = await tables.comment.readAll();

    res.json(comments);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const comment = await tables.comment.read(req.params.id);

    if (comment == null) {
      res.sendStatus(404);
    } else {
      res.json(comment);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const comment = req.body;

  try {
    const insertId = await tables.comment.create(comment);

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
