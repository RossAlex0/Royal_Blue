const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    res
      .cookie("RbAuth", req.token, {
        httpOnly: true,
      })
      .json({
        id: req.user.id,
        lastname: req.user.lastname,
        firstname: req.user.firstname,
        email: req.user.email,
        phone: req.user.phone,
        country: req.user.country,
      });
  } catch (error) {
    next(error);
  }
};

const loginByCookie = async (req, res, next) => {
  try {
    const user = {
      id: req.decoded.id,
      lastname: req.decoded.lastname,
      firstname: req.decoded.firstname,
      email: req.decoded.email,
      phone: req.decoded.phone,
      country: req.decoded.country,
    };
    res.status(200).send(user);
  } catch (error) {
    next();
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
  console.info(costumer);
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
  loginByCookie,
};
