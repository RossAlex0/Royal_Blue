const argon2 = require("argon2");

const tables = require("../../database/tables");

const checkPassword = async (req, res, next) => {
  try {
    const { mail, password } = req.body;

    const costumer = await tables.costumer.readByEmail(mail);

    if (!costumer) {
      throw new Error("Véréfié votre adresse e-mail.");
    }

    req.user = {
      id: costumer.id,
      lastname: costumer.lastname,
      firstname: costumer.firstname,
      email: costumer.email,
      phone: costumer.phone,
      country: costumer.country,
    };

    const verified = await argon2.verify(costumer.password, password);
    if (verified) {
      next();
    } else {
      throw new Error("Vérifié votre mot de passe");
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { checkPassword };
