const jwt = require("jsonwebtoken");

const createToken = async (req, res, next) => {
  try {
    const payload = req.user;
    const token = jwt.sign(payload, process.env.APP_SECRET, {
      expiresIn: "1y",
    });
    if (token) {
      req.token = token;
      next();
    } else {
      throw new Error("Échec de la création du token JWT");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { createToken };
