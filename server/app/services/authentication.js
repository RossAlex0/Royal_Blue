const argon2 = require("argon2");

const tables = require("../../database/tables");

const checkPassword = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const costumer = await tables.costumer.readByEmail(email);

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

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;

    const hashedPassword = await argon2.hash(password, hashingOptions);

    req.body.password = hashedPassword;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { checkPassword, hashPassword };
