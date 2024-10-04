const tables = require("../../database/tables");

const checkPassword = async (req, res, next) => {
  try {
    const user = {
      mail: req.body.mail,
      password: req.body.password,
    };
    const costumer = await tables.costumer.readByEmail(user.mail);
    if (!costumer) {
      throw new Error("Véréfié votre adresse e-mail.");
    }
    if (costumer.password === user.password) {
      next();
    } else {
      throw new Error("Véréfié votre mot de passe.");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { checkPassword };
